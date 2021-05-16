import express from 'express';
import helmet from 'helmet';
import * as path from 'path';

import { createConnection, Connection } from 'typeorm';

/**
 * Provides basic configuration to run a NodeJS server
 * @class Server
 */
export default class Server {
    public app: express.Application;
    public port: number;
    public connection: Connection|undefined; // TypeORM connection to the database

    /**
     * Creates an instance of Server.
     * @param {number} port
     * @memberof Server
     */
    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.connection = undefined;
        this.app.use(helmet());
    }

    /**
     * Creates the TypeORM connection and initialize all models
     * @private
     * @memberof Server
     */
    private async initializeModels() {
        const connection = await createConnection();

        // In case the connection failed, the app stops.
        if (connection === undefined) {
            throw new Error('Error connecting to database');
        }

        connection.synchronize(); // this updates the database schema to match the models' definitions
        this.connection = connection; // Store the connection object in the class instance.
    }

    /**
     * Here we can add all the global middlewares for our application. (Those that will work across every contoller)
     * @private
     * @memberof Server
     */
    private initializeMiddlewares() {
        this.app.use(express.json());
    }

    /**
     * Resolves the public folder that will be visible when user surf into URL
     * @private
     * @memberof Server
     */
    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    /**
     * Start the server with the configured port and configured public folder
     * @param {Function} callback
     * @memberof Server
     */
    public listen(callback: Function) {
        this.app.listen(this.port, callback());
        this.publicFolder();
    }
}
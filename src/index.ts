import Server from './server';
import router from './router';

import { ExampleController } from './controller';

const controllers = [
    new ExampleController()
];
const instance = new Server(3000);

instance.listen(() => {
    console.log('Server is running in the TCP port 3000');
})

instance.app.use('/', router);

export default instance.app;

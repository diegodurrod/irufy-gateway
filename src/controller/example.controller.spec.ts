import { expect } from 'chai';
import { ExampleController } from './index'

describe('Example test', () => { // the tests container
    const example = new ExampleController(); // this will be your class
    const exampleResponse = example.exampleGet();
    const responseMock = { status: 'ok', message: 'It is only a test'};

    it('should return empty response', () => { // the single test
        expect(exampleResponse).to.not.be.empty;
    });

    it('should have a name property', () => {
        expect(exampleResponse).to.have.property('status').to.equal(responseMock.status);
    })

    it('should have a name property', () => {
        expect(exampleResponse).to.have.property('message').to.equal(responseMock.message);
    })
});
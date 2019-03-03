var CommonHandlerCallback = require('../../src/callback/common.handler.callback');


describe('common.handler.callback.js', function () {

    const TEST_TYPE = 200;
    const TEST_VALUE = 'TEST';

    const TEST_ERROR_CODE = 400;
    const TEST_ERROR_MESSAGE = 'FATAL ERROR';

    beforeAll(function(){
        
    });

    it('should generate genericResponseCallback', async () => {
        const result = CommonHandlerCallback.genericResponseCallback(TEST_TYPE,TEST_VALUE);

        expect(result.statusCode).toBe(TEST_TYPE);
        expect(result.body).toContain(TEST_VALUE);
    });

    it('should generate genericErrorCallback', async () => {
        const result = CommonHandlerCallback.genericErrorCallback(TEST_ERROR_CODE,TEST_ERROR_MESSAGE);

        expect(result.statusCode).toBe(TEST_ERROR_CODE);
        expect(result.body).toContain(TEST_ERROR_MESSAGE);
    });

});
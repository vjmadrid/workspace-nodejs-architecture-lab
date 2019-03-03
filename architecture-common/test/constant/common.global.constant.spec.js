var CommonGlobalConstant = require('../../src/constant/common.global.constant');

describe('common.global.constant.js', function () {

    beforeAll(function(){
        
    });

    it('should use constant', async () => {
        const result = CommonGlobalConstant.GLOBAL_CONSTANT.ASTERISK

        expect(result).toContain('*');
    });

});
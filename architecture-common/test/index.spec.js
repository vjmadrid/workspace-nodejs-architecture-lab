var Index = require('../../arq-common/src/index');

describe('index.js', function () {

    beforeAll(function(){
        
    });

    it('should load package', async () => {
        const result = Index.IndexCommonConstant.CommonGlobalConstant.GLOBAL_CONSTANT.ASTERISK;

        expect(result).toContain('*');
    });

});
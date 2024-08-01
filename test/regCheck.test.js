import assert from 'assert';
import regCheck from '../regCheck.js';

describe('regCheck function', function () {
    it('return true if registration number ends with GP, MP, EC, L ', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('return false if registration number starts with ND, CY, CA', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
    it('return all regCheck', function () {
        assert.equal(regCheck('5566 L', 'L'), true);
    });
});


assert.equal(regCheck('5566 L', 'L'), true);
assert.equal(regCheck('5566 L', 'M'), false);
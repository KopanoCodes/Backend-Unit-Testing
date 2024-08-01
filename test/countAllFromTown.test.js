import assert from 'assert';
import countAllFromTown from '../countAllFromTown.js';

describe('countAllFromTown function', function () {
    it('return True if number plate starts with CL', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
    });
    it('return False if number plate ends with a string', function () {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1)
    });
});
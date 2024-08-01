import assert from 'assert';
import fromWhere from '../fromWhere.js';

describe('fromWhere function', function () {
    it('return CA if the number plate is from Cape Town', function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it('return ZN if the number plate is from other places', function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});
import assert from 'assert';
import transportFee from '../transportFee.js';

describe('transportFee function', function () {
    it('return R20 when it is morning shift', function () {
        assert.equal(transportFee('morning'), 'R20');
    });
    it('return R10 when it is afternoon shift', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('return an empty array if it is nightshift', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});
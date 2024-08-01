import assert from 'assert';
import totalPhoneBill from '../totalPhoneBill.js';

describe('totalPhoneBill function', function () {
    it('return True if the totalPhoneBill is R7.45', function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('return False if the totalPhoneBill is less than R7.45', function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    });
});
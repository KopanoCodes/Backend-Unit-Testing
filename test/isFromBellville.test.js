//import assert from 'assert';
//import isFromBellville from '../isFromBellville.js';

//describe('isFromBelville function', function () {
   // it('return True if Number plate starts with CY', function () {
      //  assert.equal(isFromBellville('CY 123'), true);
   // });
   // it('return False if Number plate does not starts with CY', function () {
        //assert.equal(isFromBellville('CJ 123'), false);
    //});
//});
import isFromBellville from '../isFromBellville.js';
import assert from 'assert';

describe('isFromBellville function', function () {
  it('should return true if the number plate starts with CY', function () {
    assert.equal(isFromBellville('CY 123'), true);
  });

  it('should return false if the number plate does not start with CY', function () {
    assert.equal(isFromBellville('CJ 123'), false);
  });
});

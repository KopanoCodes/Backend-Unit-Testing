import assert from "assert";
import {isWeekday} from "../isWeekday.js";



describe('test my isWeekday function', function () {
    it("it should return 'false' when called with 'Saturday' ", function () {
        assert.equal(isWeekday('Saturday'), false), "this should not be true"
    });

    it("it should return 'false' when called with 'Sunday' ", function () {
        assert.equal(isWeekday('Sunday'), false), "this should not be true"
    });
    it("it should return 'true' when called with 'Monday' ", function () {
        assert.equal(isWeekday('Monday'), true), "this should not be true"
    });
    it("it should return 'true' when called with 'Tuesday' ", function () {
        assert.equal(isWeekday('Tuesday'), true), "this should not be true"
    });
    it("it should return 'true' when called with 'Wednesday' ", function () {
        assert.equal(isWeekday('Wednesday'), true), "this should not be true"
    });
    it("it should return 'true' when called with 'Thursday' ", function () {
        assert.equal(isWeekday('Thursday'), true), "this should not be true"
    });
    it("it should return 'true' when called with 'Friday' ", function () {
        assert.equal(isWeekday('Friday'), true), "this should not be true"
    });


});
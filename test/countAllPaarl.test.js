import assert from "assert";
import {countAllPaarl} from "../countAllPaarl.js";

describe('test my countAllPaarl' , function(){
    it("it should return '3' when called with 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123' " , function(){
       assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'),3), "this should not be true"});

       it("it should return '2' when called with 'CJ 345 123, CK 345, CJ 123' " , function(){
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'),2), "this should not be true"});
       
    });
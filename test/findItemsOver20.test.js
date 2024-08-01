import assert from 'assert';
import findItemsOver20 from '../findItemsOver20.js';

describe('findItemsOver20 function', function () {
    it('return items over 20', function () {
        const items = [
            { name: 'apple', qty: 10 },
            { name: 'banana', qty: 25 },
            { name: 'grapes', qty: 30 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, [
            { name: 'banana', qty: 25 },
            { name: 'grapes', qty: 30 }
        ]);
    });

    it('return an empty array if items have quantity over 20', function () {
        const items = [
            { name: 'apple', qty: 10 },
            { name: 'banana', qty: 15 },
            { name: 'grapes', qty: 5 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, []);
    });

    it('return an empty array if all have quantity over 20', function () {
        const items = [
            { name: 'apple', qty: 25 },
            { name: 'banana', qty: 30 },
            { name: 'grapes', qty: 35 }
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, [
            { name: 'apple', qty: 25 },
            { name: 'banana', qty: 30 },
            { name: 'grapes', qty: 35 }
        ]);
    });
});
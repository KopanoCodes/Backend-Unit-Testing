export default function findItemsOver20(itemList) {
    return itemList.filter(item => item.qty > 20);
}

function findItemsOver(itemList, threshold) {
    return itemList.filter(item => item.qty > threshold);
}
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

console.log("Items with quantity over 20:");
console.log(findItemsOver20(itemList));

var threshold = 25;
console.log(`Items with quantity over ${threshold}:`);
console.log(findItemsOver(itemList, threshold));
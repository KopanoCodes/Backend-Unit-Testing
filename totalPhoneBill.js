export default function totalPhoneBill(data) {
    var calls = 0;
    var smss = 0;

    
    var items = data.split(", ");


    for (var i = 0; i < items.length; i++) {
        if (items[i] === 'call') {
            calls++;
        } else if (items[i] === 'sms') {
            smss++;
        }
    }

    var totalBill = (calls * 2.75) + (smss * 0.65);
    
   
    var formattedBill = 'R' + totalBill.toFixed(2);

    return formattedBill;
}
var data = 'call, sms, call, sms, sms';
var bill = totalPhoneBill(data);
console.log(bill);
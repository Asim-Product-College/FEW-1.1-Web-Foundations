const button = document.getElementById("calculate");
const new_tip = document.getElementById('new-tip');

let new_total = 0;

const per_tip = document.getElementById('per-tip');
let per_total = document.getElementById('per-total');
// let new_per_total = 0;
let per_total_val = 0;

button.onclick = function(event) {
    const people = parseInt(document.getElementById('people').value);
    const amount = parseInt(document.getElementById('amount').value);
    const tip = parseInt(document.getElementById('tip').value);
    const new_tip_amount = (tip/100) * amount;
    
    // console.log(amount);
    // console.log(tip);
    // console.log(new_tip_amount);

    new_tip.innerHTML = new_tip_amount;
    new_total = new_tip_amount+amount;
    document.getElementById('total').innerHTML = new_total;
    console.log(people);
    
    const per_total_val = amount / people;
    const per_tip_val = per_total_val * (tip/100);

    document.getElementById('per-total').innerHTML = per_total_val;  
    document.getElementById('per-tip').innerHTML = per_tip_val;    
    
}

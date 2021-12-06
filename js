send.addEventListener("click",fnc); 
function fnc(){ 
    let val_or_price = or_price.value; 
    let val_price = price.value; 
    let val_period = period.value; 
    let val_result; 
    val_result = (val_or_price-val_price)*100/(val_period*val_or_price); 
    result.innerHTML = val_result.toFixed(2); 
}

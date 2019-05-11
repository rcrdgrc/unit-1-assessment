


/*----- constants -----*/ 

/*----- app's state (variables) -----*/ 
let total = 0
var x = document.getElementById("input");


/*----- event listeners -----*/ 
document.getElementById('plus').addEventListener('click', handleClick)
document.getElementById('minus').addEventListener('click', handleClick)
// document.getElementById('input').addEventListener('click', handleClick)
// document.getElementById('reset').addEventListener('click', reload)
// document.getElementById('reset2').addEventListener('click', reload)
/*----- functions -----*/


function handleClick(evt) {
    const marker = evt.target.id;
    if(marker === "plus") { add();}
    else if(marker === "minus") { subtract(); }
     console.log(marker);
     console.log(x.value)
}

function add() {
   total += parseInt(x.value);
   document.getElementById("total").innerHTML = total;
}

function subtract() {
   total -= parseInt(x.value);
   if( total < 0) {document.getElementById("total").innerHTML = "<span style=\"color:red\">" + total + "</span>";}
   else {document.getElementById("total").innerHTML = total;}
   
}
var screen = document.getElementById('screen');
var isCalculated = false 
function getBtnValue(val){
    if(isCalculated && typeof val == "number"){
        screen.value="";
    }
    screen.value +=val;
    isCalculated = false;
}

function clr(){
    screen.value="";
}

function calculate(){
    screen.value = eval(screen.value);
    isCalculated = true;
}






















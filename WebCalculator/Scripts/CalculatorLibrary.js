var txtInput;
var txtResult;
function initialize() {
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn'+i).addEventListener('click', numberClick, false);
    }
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');

    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntryClick, false);
    document.getElementById('btnClear').addEventListener('click', clearClick, false);
    txtInput.value = "0";
    txtResult.value = "0";
    //clear(); * does not seem to work
    


}

function numberClick() {
    txtInput.value = txtInput.value == '0' ? this.innerText : txtInput.value + this.innerText;
    //txtInput.value = this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    //txtInput.clearEntry();
    txtInput.value = "0";
}

function minusClick(){
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    //txtInput.clearEntry();
    txtInput.value = "0";
}

function clearEntryClick() {
    txtInput.value = "0";
}

function clearClick() {
    txtInput.value = "0";
    txtResult.value = "0";
}
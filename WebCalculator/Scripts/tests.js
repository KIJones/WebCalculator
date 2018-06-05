/// <reference path="_references.js" />

module('Calculator Test Suite', { setup: function () { calculatorNamespace.initialize(); } });

test("Initialize Test", function () {
    expect(2);
    //txtInput.value = '';
    //txtResult.value = '';
    var expected = "0";
    equal(txtInput.value, expected, "Expected value: " + expected + " Actual value: " + txtInput.value);
    equal(txtResult.value, expected, "Expected value: " + expected + " Actual value: " + txtResult.value);
})






test("Btn Click Test", function () {
    expect(10);
    for (var count = 0; count <= 9; count++) {
        var btn = document.getElementById('btn'+count);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length-1];
        var expected = String(count);
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
        
    }

});

test("Add Test", function () {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '30';
    equal(txtResult.value, expected, "Expected value: " + expected + " Actual value: " + txtResult.value);
    expected = "0";
    equal(txtInput.value, expected, "Expected value: " + expected + " Actual value: " + txtInput.value);

    
});

test("Subtract Test", function () {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnMinus = document.getElementById('btnMinus');
    QUnit.triggerEvent(btnMinus, 'click');
    var expected = '10';
    equal(txtResult.value, expected, "Expected value: " + expected + " Actual value: " + txtResult.value);
    expected = "0";
    equal(txtInput.value, expected, "Expected value: " + expected + " Actual value: " + txtInput.value);
})

test("Clear Entry", function () {
    expect(1)
    txtInput.value = '10';
    var btnClearEntry = document.getElementById('btnClearEntry');
    QUnit.triggerEvent(btnClearEntry, 'click');
    var expected = "0";
    equal(txtInput.value, expected, "Expected value: " + expected + " Actual value: " + txtInput.value);
});

test("Clear Test", function () {
    expect(2)
    txtInput.value = "10";
    txtResult.value = "10";
    var expected = "0";
    //var btnClear = document.getElementById('btnClear');
    QUnit.triggerEvent(btnClear, 'click');
    equal(txtInput.value, expected, "Expected: " + expected + " Actual: " + txtInput.value);
    equal(txtResult.value, expected, "Expected: " + expected + " Actual: " + txtResult.value);
 

})
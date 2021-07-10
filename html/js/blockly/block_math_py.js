Blockly.Python['operation_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import math \nfrom statistics import *\nimport random\n";
  return code;
};

Blockly.Python['math_library'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "import math \n";
    return code;
  };

  Blockly.Python['math1'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "math."+dropdown_name + '(' + value_name + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['math2'] = function (block) {
    var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    if (dropdown_name == 1)   var code = "gcd" + '(' + value_name1 + ", " + value_name2 + ')';
    else if (dropdown_name == 2) var code = "log" + '(' + value_name1 + "[, " + value_name2 + '])';
    else if (dropdown_name == 3) var code = "pow" + '(' + value_name1 + ", " + value_name2 + ')';
    else if (dropdown_name == 4) var code = "dist" + '(' + value_name1 + ", " + value_name2 + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['math3'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "math."+dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
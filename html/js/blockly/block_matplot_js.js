// 라이브러리
Blockly.JavaScript['visualization_library'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
  var code = "\n";
  return code;
};


//그래프 출력 설정
Blockly.JavaScript['select_graph_option'] = function(block) { 
    var value_select_graph_option_location1 = Blockly.JavaScript.valueToCode(block, 'select_graph_option_location1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_location2 = Blockly.JavaScript.valueToCode(block, 'select_graph_option_location2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_xy = Blockly.JavaScript.valueToCode(block, 'select_graph_option_XY', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_graph = Blockly.JavaScript.valueToCode(block, 'select_graph_option_graph', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_title = Blockly.JavaScript.valueToCode(block, 'select_graph_option_title', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_x = Blockly.JavaScript.valueToCode(block, 'select_graph_option_X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_y = Blockly.JavaScript.valueToCode(block, 'select_graph_option_Y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_end = Blockly.JavaScript.valueToCode(block, 'select_graph_option_END', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.  
    var code = '\n';    
    return code; 
  };


  Blockly.JavaScript['matp_Ex'] = function(block) {
    var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name3 = Blockly.JavaScript.valueToCode(block, 'd3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.JavaScript['matp_title'] = function(block) {
    var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  
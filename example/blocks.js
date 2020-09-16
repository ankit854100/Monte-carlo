Blockly.Blocks['calculate'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(195);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["start", "Start"], ["stop", "Stop"], ["reset", "Reset"]]), "options");
    this.setTooltip('');
  }
};

Blockly.JavaScript['calculate'] = function(block) {
  var dropdown_options = block.getFieldValue('options');
  if(dropdown_options === 'Start'){
    var code = "start";
  }
  if(dropdown_options === 'Stop'){
    var code = "stop";
  }
  if(dropdown_options === 'Reset'){
    var code = "reset";
  }

  return code;
};

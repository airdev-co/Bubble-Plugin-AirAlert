function(properties, context) {
  
  var positionMapping = {
    "Top Right":"top-right",
    "Bottom Right":"bottom-right",
    "Bottom Left":"bottom-left",
    "Top Left":"top-left",
    "Top Center":"top-center",
    "Bottom Center":"bottom-center"
    };
  var animationMapping = {
    "Fade":"fade",
    "Slide":"slide",
    "Plain":"plain",
  };
  var iconMapping = {
    "Warning":"warning",
    "Success":"success",
    "Error":"error",
    "Information":"info"
  };
  var textAlignMapping = {
    "Left":"left",
    "Center":"center",
    "Right":"right",
  };
  var settings = {};
  
  addToSettings('heading',properties.heading);
  addToSettings('text',properties.text);
  addToSettings('icon',iconMapping[properties.icon]);
  addToSettings('showHideTransition',animationMapping[properties.animation]);
  addToSettings('allowToastClose',properties.closeButton);
  addToSettings('position',positionMapping[properties.position]);
  addToSettings('hideAfter',properties.hideAfter);
  addToSettings('stack',properties.maxNumber);
  addToSettings('loader',properties.progressBar);
  addToSettings('loaderBg',properties.progressBarColor);
  addToSettings('textAlign',textAlignMapping[properties.textAlign]);
  addToSettings('bgColor',properties.bgColor);
  addToSettings('textColor',properties.textColor);
  
  
  $(document).ready($.toast(settings));
  
  function addToSettings(keyname,value) {
    if ((value!==undefined)&&(value!==null)) settings[keyname] = value;
  }
  
}
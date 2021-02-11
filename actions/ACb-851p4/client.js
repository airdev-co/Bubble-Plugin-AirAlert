function(properties, context) {
  
  //console.log(properties.type);
  var genericDefaults = {
    showHideTransition: 'plain',
    allowToastClose: true,
    position: 'top-right',
    stack: 5,
    loader: false,
    textAlign: 'left'
  }
  
  var themeDefaults = {
    Success: {
      bgColor: context.keys['BgColor - Success'] || '#E7FBEF',
      textColor: context.keys['TextColor - Success'] || '#38ab69',
      hideAfter: Number(context.keys['Default Duration']) || 5000
    },
    Information: {
      bgColor: context.keys['BgColor - Info'] || '#ebeced' ,
      textColor: context.keys['TextColor - Info'] || '#333333',
      hideAfter: Number(context.keys['Default Duration']) || 5000
    },
    Warning: {
      bgColor: context.keys['BgColor - Warning'] || '#FEF6E6',
      textColor: context.keys['TextColor - Warning'] || '#e89320',
      hideAfter: Number(context.keys['Default Duration']) || 5000
    },
    Error: {
      bgColor: context.keys['BgColor - Error'] || '#FBECEC',
      textColor: context.keys['TextColor - Error'] || '#E9403F',
      hideAfter: Number(context.keys['Default Duration']) || 5000
    }
  }
  
  //console.log(themeDefaults[properties.type]);
  
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
  
  var settings = $.extend({},genericDefaults,themeDefaults[properties.type]);
  
  //console.log(settings);
  if ((properties.heading!==undefined)&&(properties.heading!==null)) {
      addToSettings('heading',"<div style='padding: 6px 6px 0px';><style>h2{ font-family: 'Inter', sans-serif; !important };</style><b><h2 style='font-size:16px'>" + properties.heading + "</h2></b></div>");
  }
  if ((properties.text!==undefined)&&(properties.text!==null)) {
    addToSettings('text',"<div style='padding: 0px 6px 6px';><style>p{ font-family: 'Inter', sans-serif; font-weight: 500; line-height:20px}</style><p style='font-size:14px';>" + properties.text + "</p></div>");
  }
//  addToSettings('icon',iconMapping[properties.type]);
  
  $(document).ready($.toast(settings));
  
  function addToSettings(keyname,value) {
    if ((value!==undefined)&&(value!==null)) settings[keyname] = value;
  }
  
}
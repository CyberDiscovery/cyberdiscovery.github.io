function initElement(elementClassName, elementInitFunction) {
  var x = document.getElementsByClassName(elementClassName);
  if (x[0] !== null){
    var y;
    for(y = 0; y < x.length; y++){
      elementInitFunction(x[y]);
    }
  }
}
function oneElementInit(queryElementName, instantiationFunction) {
  if (document.querySelector(queryElementName) !== null){
    new instantiationFunction(document.querySelector(queryElementName));
  }
}
oneElementInit(".mdc-top-app-bar", mdc.topAppBar.MDCTopAppBar);
oneElementInit(".mdc-tab-bar", mdc.tabBar.MDCTabBar);
initElement("mdc-button",mdc.ripple.MDCRipple.attachTo);
window.mdc.autoInit();

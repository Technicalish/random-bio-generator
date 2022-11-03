var icons = ["email","facebook","instagram","linkedIn","pinterest","twitter","youTube"];
function Icons() {
var iconsArray = [];
var i = Math.floor(Math.random() * 5 + 3);
  while (i > 0) {
  var icon = icons[Math.floor(Math.random() * icons.length)];
    if (!iconsArray.includes(icon)) {
    iconsArray.push(icon);
    i--;
    }
  }
return iconsArray;
}
export default Icons();
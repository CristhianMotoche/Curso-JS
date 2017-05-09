// For loop
for (var i = 0; i < 20; ++i) {
  console.log("For:", i);
}

// For each
var array = [1,2,3,4,5];
for (var item in array) {
  console.log("For each:", item);
}

// While
var i = 0;
while (i < 20) {
  console.log("While:", i);
  i += 1;
}

// Switch
var num = null;
switch (num) {
  case 1:
    console.log("Uno");
    break;
  case 2:
    console.log("Dos");
    break;
  default:
    console.log("LOL");
    break;
}

// lowercase
var personName = "Fatima";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

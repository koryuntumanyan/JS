let a = "" + 1 + 0; // 10
alert(a);
a = "" - 1 + 0; // -1
alert(a);
a = true + false; // 1
alert(a);
a = 6 / "3"; // 2
alert(a);
a = "2" * "3"; // 6
alert(a);
a = 4 + 5 + "px"; // "9px"
alert(a);
a = "$" + 4 + 5; // "$45"
alert(a);
a = "4" - 2; // 2
alert(a);
a = "4px" - 2; // NaN
alert(a);
a = "  -9  " + 5; // "  -9  5"
alert(a);
a = "  -9  " - 5; // -14
alert(a);
a = null + 1; // 1
alert(a);
a = undefined + 1; // NaN
alert(a);
a = " \t \n" - 2; // -2
alert(a);
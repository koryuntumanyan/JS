let a;
a = 5 > 4; // true
alert(a);
a = "ананас" > "яблоко"; // false
alert(a);
a = "2" > "12"; // true
alert(a);
a = undefined == null; // true
alert(a);
a = undefined === null; // false
alert(a);
a = null == "\n0\n"; // false
alert(a);
a = null === +"\n0\n"; // false
alert(a);
// 1.write a js program to convert this array without using any methods
// input : a=[1,[2,4,5],[3,[4,6,7]],4];
// output : a=[1,2,4,5,3,4,6,7,4]

var a = [1, [2, 4, 5], [3, [4, 6, 7]], 4];

var flat = 2;
var array = a;
for (let i = 0; i < flat; i++) {
    array = array.flat();
}
console.log(array);
//with method
var a = [1, [2, 4, 5], [3, [4, 6, 7]], 4];

result = a.flat(Infinity);
console.log(result);

//2. Take any array and print the values above 3, then store them in a new array.

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var b = [];
for (i = 0; i < a.length; i++) {
    if (i > 3) {
        b.push(a[i] - 1);
    }
}
console.log(b);                //[ 4, 5, 6, 7, 8 ]


var a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var b = [];
for (i = 0; i < a.length; i++) {
    if (i > 3) {
        b[b.length] = a[i] - 1;
    }
}
console.log(b);                 //[ 4, 5, 6, 7, 8 ]


// 3. take any array and check the all value should be above 1 
// if above 1 then print "true" else "false"

var a = [2, 4, 5, 6, 3, 79, 0, 1]

for (i = 0; i < a.length; i++) {
    if (a[i] > 1) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
// output: true true true true true true false false

// 4.take any array convert into a string
// inp:[2,3,4,5,5,6,7,7,8,9]
// output : 2345567789

var a = [2, 3, 4, 5, 5, 6, 7, 7, 8, 9]

var b = a.join("")
console.log(b);                 // output : 2345567789

// 5. convert this array into {vowels,consonants}
// inp : var a = ["hello","kumar","raju"]
// o/p:[[eo,hell],[ua,kmr],[au,rj]]


var a = ["hello", "kumar", "raju"]

var b = [];
for (var i = 0; i < a.length; i++) {
    vowels = "";
    consonants = "";

    for (var j = 0; j < a[i].length; j++) {
        if (a[i][j].match(/[aeiou]/i)) {
            vowels += a[i][j];
        }
        else {
            consonants += a[i][j];
        }
    }
    b.push([vowels, consonants]);
}
console.log(b);                 //[ [ 'eo', 'hll' ], [ 'ua', 'kmr' ], [ 'au', 'rj' ] ]


var a = ["hello", "kumar", "raju"];
output = [];

for (i = 0; i < a.length; i++) {
    vowels = "";
    consonants = "";

    for (j = 0; j < a[i].length; j++) {
        letter = a[i][j];
        if ('aeiou'.indexOf(letter) !== -1) {
            vowels += letter;
        } else {
            consonants += letter;
        }
    }

    output.push([vowels, consonants]);

}

console.log(output);             //[ [ 'eo', 'hll' ], [ 'ua', 'kmr' ], [ 'au', 'rj' ] ]


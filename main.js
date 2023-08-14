let serialEl = document.querySelector(".serial");
let btnGen = document.querySelector("#gen");
let input = document.querySelector("#inp");

btnGen.onclick = () => {
  let serialLen;
  if (input.value != "") {
    if (input.value > 24 || input.value < 8) {
      serialLen = 16;
    } else {
      serialLen = input.value;
    }
  } else {
    serialLen = 16;
  }
  input.value = serialLen;
  let charachter = "azertyuiopqsdfghjklmwxcvbn";
  charachter += charachter.toUpperCase() + "0123456789";
  let serial = "";
  for (let i = 0; i < serialLen; i++) {
    serial += charachter[Math.floor(Math.random() * charachter.length)];
  }
  serialEl.innerHTML = serial;
  if (!serialEl.innerHTML == "") {
    document.querySelector(".msg").classList.add("top-30");
  }
};

serialEl.onclick = () => {
  if (serialEl.innerText == "") {
    return;
  }
  document.querySelector(".msg").classList.remove("top-30");
  navigator.clipboard.writeText(serialEl.innerText);
  document.querySelector(".copy").classList.add("top-30");
  setTimeout(() => {
    document.querySelector(".copy").classList.remove("top-30");
  }, 2000);
};

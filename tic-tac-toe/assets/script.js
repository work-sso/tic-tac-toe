const trs = document.querySelectorAll("tr");
const tds = document.querySelectorAll("td");
const btn = document.querySelector("button");
const win = document.querySelector(".win");
let turn = "X";
let validation = false;

const game = () => {
  for (i = 0; i < tds.length; i++) {
    tds[i].addEventListener(
      "click",
      function (e) {
        console.log();
        e.target.innerHTML = turn;
        e.target.innerHTML === "X"
          ? (e.target.style.color = "red")
          : (e.target.style.color = "blue");
        check();
        result();
      },
      { once: true }
    );
  }
};

const reset = () => {
  btn.addEventListener("click", function () {
    location.reload();
  });
};

game();
reset();

const check = () => {
  for (i = 0; i < trs.length; i++) {
    if (
      trs[i].cells[0].innerHTML === turn &&
      trs[i].cells[1].innerHTML === turn &&
      trs[i].cells[2].innerHTML === turn
    ) {
      validation = true;
    }
    if (
      trs[0].cells[i].innerHTML === turn &&
      trs[1].cells[i].innerHTML === turn &&
      trs[2].cells[i].innerHTML === turn
    ) {
      validation = true;
    }
  }
  if (
    trs[0].cells[0].innerHTML === turn &&
    trs[1].cells[1].innerHTML === turn &&
    trs[2].cells[2].innerHTML === turn
  ) {
    validation = true;
  }
  if (
    trs[0].cells[2].innerHTML === turn &&
    trs[1].cells[1].innerHTML === turn &&
    trs[2].cells[0].innerHTML === turn
  ) {
    validation = true;
  }
};

const result = () => {
  if (validation) {
    win.innerHTML = "win : " + turn;
    win.style.display = "block";
  } else {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
};

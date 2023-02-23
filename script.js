let highscore = document.querySelector(".highscore");
let inputNumber = document.querySelector(".guess");
let messageProgres = document.querySelector(".message");
let liveScore = document.querySelector(".score");
let numberTv = document.querySelector(".number");
let checkButton = document.querySelector(".check");

let modal = document.querySelector(".modal");

let modalBtn = document.querySelector(".modal-btn");
let overlay = document.querySelector(".overlay");

let nextChance = true;

let restartGame = document.querySelector(".again");

let randomNumber = Math.floor(Math.random() * 20) + 1;

checkButton.addEventListener("click", () => {
    console.log(randomNumber);
    if (nextChance) {
        if (inputNumber.value == "") {
            messageProgres.textContent = "wait";

            setTimeout(() => {
                messageProgres.textContent = "Siz son kiritmadingiz";
            }, 300);
        } else if (inputNumber.value > 20) {
            messageProgres.textContent = "wait";

            setTimeout(() => {
                messageProgres.textContent = "Siz 20 dan katta son kiritingiz";
            }, 300);
        } else if (inputNumber.value > randomNumber) {
            messageProgres.textContent = "wait";

            setTimeout(() => {
                messageProgres.textContent = "kiritgan soningiz katta";
            }, 300);

            if (Number(liveScore.textContent) <= 0) {
                modal.classList.remove("hidden");
                overlay.classList.remove("hidden");
            }
            liveScore.textContent = Number(liveScore.textContent) - 1;
        } else if (inputNumber.value < randomNumber) {
            messageProgres.textContent = "wait";

            setTimeout(() => {
                messageProgres.textContent = "kiritgan soningiz kichik";
            }, 300);

            liveScore.textContent = Number(liveScore.textContent) - 1;
            if (Number(liveScore.textContent) <= 0) {
                modal.classList.remove("hidden");
                overlay.classList.remove("hidden");
            }
        } else if (inputNumber.value == randomNumber) {
            messageProgres.textContent = "wait";

            setTimeout(() => {
                messageProgres.textContent = "siz soni toptingiz";
            }, 300);
            numberTv.textContent = randomNumber;
            nextChance = false;

            if (Number(highscore.textContent) < Number(liveScore.textContent)) {
                highscore.textContent = liveScore.textContent;
            }

            document.body.style.background = "#60b347";
        }
    }
});

restartGame.addEventListener("click", () => {
    nextChance = true;
    randomNumber = Math.floor(Math.random() * 20) + 1;

    liveScore.textContent = "20";

    document.body.style.background = "#222";
    numberTv.textContent = "?";

    inputNumber.value = "";

    messageProgres.textContent = "Start guessing...";

    modal.classList.add("hidden");
});

modalBtn.addEventListener("click", () => {
    nextChance = true;
    randomNumber = Math.floor(Math.random() * 20) + 1;

    document.body.style.background = "#222";
    numberTv.textContent = "?";
    liveScore.textContent = "20";

    inputNumber.value = "";

    messageProgres.textContent = "Start guessing...";

    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

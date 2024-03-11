let caruselValue = 1;

setInterval(() => {
    switch (caruselValue) {
        case 1:
            document.querySelector(".CaruselContents_1").classList.add("CaruselContentOwn");
            document.querySelector(".CaruselContents_1").classList.remove("CaruselContentNotOwn");

            document.querySelector(".CaruselContents_2").classList.remove("CaruselContentOwn");
            document.querySelector(".CaruselContents_2").classList.add("CaruselContentNotOwn");

            document.querySelector(".CaruselContents_3").classList.remove("CaruselContentOwn");
            document.querySelector(".CaruselContents_3").classList.add("CaruselContentNotOwn");
            break;

        case 2:
            document.querySelector(".CaruselContents_2").classList.add("CaruselContentOwn");
            document.querySelector(".CaruselContents_2").classList.remove("CaruselContentNotOwn");

            document.querySelector(".CaruselContents_1").classList.remove("CaruselContentOwn");
            document.querySelector(".CaruselContents_1").classList.add("CaruselContentNotOwn");

            document.querySelector(".CaruselContents_3").classList.remove("CaruselContentOwn");
            document.querySelector(".CaruselContents_3").classList.add("CaruselContentNotOwn");
            break;

        case 3:
            document.querySelector(".CaruselContents_3").classList.add("CaruselContentOwn");
            document.querySelector(".CaruselContents_3").classList.remove("CaruselContentNotOwn");

            document.querySelector(".CaruselContents_2").classList.remove("CaruselContentOwn");
            document.querySelector(".CaruselContents_2").classList.add("CaruselContentNotOwn");

            document.querySelector(".CaruselContents_1").classList.remove("CaruselContentOwn");
            document.querySelector(".CaruselContents_1").classList.add("CaruselContentNotOwn");
            break;

        default:
            break;
    }
    if (caruselValue <= 0) {
        caruselValue = 3
    }else if (caruselValue >= 4) {
        caruselValue = 1
    }
});

setInterval(() => {
    caruselValue +=1
}, 20000);
document.querySelector(".CaruselBtnRightBg").addEventListener("click", () => {
    caruselValue += 1;
    if (caruselValue > 3) {
        caruselValue = 1;
    }
});

document.querySelector(".CaruselBtnLeftBg").addEventListener("click", () => {
    caruselValue -= 1;
    if (caruselValue < 1) {
        caruselValue = 3;
    }
});

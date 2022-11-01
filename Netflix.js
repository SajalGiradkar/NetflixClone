let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');
let ans5 = document.getElementById('ans5');
let ans6 = document.getElementById('ans6');

let plusImg1 = document.getElementById('plus-img1');
let plusImg2 = document.getElementById('plus-img2');
let plusImg3 = document.getElementById('plus-img3');
let plusImg4 = document.getElementById('plus-img4');
let plusImg5 = document.getElementById('plus-img5');
let plusImg6 = document.getElementById('plus-img6');

const faqFunc1 = () => {
    if (ans1.style.display !== "none") {
        ans1.style.display = 'none';
        plusImg1.style.transform = 'rotate(0)';

    } else {
        ans1.style.display = 'block';
        if (plusImg1.style.transform !== "rotate(45deg)") {
            plusImg1.style.transform = 'rotate(45deg)';
        } else {
            plusImg1.style.transform = 'rotate(0)';
        }
    } 
};
const faqFunc2 = () => {
    if (ans2.style.display !== "none") {
        ans2.style.display = 'none';
        plusImg2.style.transform = 'rotate(0)';
    } else {
        ans2.style.display = 'block';
         if (plusImg2.style.transform !== "rotate(45deg)") {
            plusImg2.style.transform = 'rotate(45deg)';
        } else {
            plusImg2.style.transform = 'rotate(0)';
        }
    }
};
const faqFunc3 = () => {
    if (ans3.style.display !== "none") {
        ans3.style.display = 'none';
        plusImg3.style.transform = 'rotate(0)';
    } else {
        ans3.style.display = 'block';
         if (plusImg3.style.transform !== "rotate(45deg)") {
            plusImg3.style.transform = 'rotate(45deg)';
        } else {
            plusImg3.style.transform = 'rotate(0)';
        }
    }
};
const faqFunc4 = () => {
    if (ans4.style.display !== "none") {
        ans4.style.display = 'none';
        plusImg4.style.transform = 'rotate(0)';
    } else {
        ans4.style.display = 'block';
         if (plusImg4.style.transform !== "rotate(45deg)") {
            plusImg4.style.transform = 'rotate(45deg)';
        } else {
            plusImg4.style.transform = 'rotate(0)';
        }
    }
};
const faqFunc5 = () => {
    if (ans5.style.display !== "none") {
        ans5.style.display = 'none';
        plusImg5.style.transform = 'rotate(0)';
    } else {
        ans5.style.display = 'block';
         if (plusImg5.style.transform !== "rotate(45deg)") {
            plusImg5.style.transform = 'rotate(45deg)';
        } else {
            plusImg5.style.transform = 'rotate(0)';
        }
    }
};
const faqFunc6 = () => {
    if (ans6.style.display !== "none") {
        ans6.style.display = 'none';
        plusImg6.style.transform = 'rotate(0)';
    } else {
        ans6.style.display = 'block';
         if (plusImg6.style.transform !== "rotate(45deg)") {
            plusImg6.style.transform = 'rotate(45deg)';
        } else {
            plusImg6.style.transform = 'rotate(0)';
        }
    }
};
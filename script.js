// ======================================
// SECRET CODE
// ======================================

let code = "";
const correct = "2006";

// ======================================
// DIAL PAD
// ======================================

function press(number){

    if(code.length >= 4) return;

    code += number;

    document.getElementById("display").textContent =
        "*".repeat(code.length);

}

function clearCode(){

    code = "";

    document.getElementById("display").textContent = "____";

}

// ======================================
// UNLOCK
// ======================================

function unlock(){

    if(code !== correct){

        alert("Wrong code 😅");

        clearCode();

        return;

    }

    document.getElementById("lockScreen").style.display = "none";

    document.getElementById("story").style.display = "block";

    document.body.style.overflowY = "auto";

    const music = document.getElementById("bgMusic");

    music.volume = 0.35;

    music.play().catch(() => {
    console.log("Music will start after first interaction.");
    });

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    startAnimations();

}

// ======================================
// SCROLL ANIMATION
// ======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

function startAnimations(){

    const sections = document.querySelectorAll(".reveal");

    sections.forEach(section=>{

        observer.observe(section);

    });

}

// ======================
// FLOATING PETALS
// ======================

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration =
    (6+Math.random()*6)+"s";

    petal.style.opacity =
    Math.random();

    petal.style.transform =
    `scale(${0.5+Math.random()})`;

    document.getElementById("petals").appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,450);

// ======================
// LETTER
// ======================

// ======================
// LETTER TYPEWRITER
// ======================

const message = `Dear Esha,

Happy Birthday. ❤️

okay..this is a little different from a normal birthday gift 😭 
I don't know if a website can say everything I wanted to say, 
but I thought it'd be way more fun than just sending a text. So... here we are.

I just wanted to make you something you'd smile at, scroll through, laugh at (hopefully 😤), 
and maybe remember once in a while.

I hope this year brings you lots of happiness, good health, peace, 
and plenty of reasons to keep smiling...  ✨

stay the same...ok!!!

Thank you for being you.

Happy Birthday once again.

Enjoy your day. dont forget to give me treat 😎

— B👾`;

function openLetter(){

    const envelope = document.querySelector(".envelope");
    const paper = document.getElementById("letterPaper");
    const text = document.getElementById("letterText");

    envelope.classList.add("open");

    setTimeout(()=>{

        paper.classList.add("showLetter");

        text.innerHTML="";

        let i=0;

        const typing=setInterval(()=>{

            if(i<message.length){

                if(message[i]==="\n"){

                    text.innerHTML+="<br>";

                }else{

                    text.innerHTML+=message[i];

                }

                i++;

            }else{

                clearInterval(typing);

            }

        },35);

    },700);

}
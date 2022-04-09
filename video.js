// vars //
const html = document.documentElement;
const canvas = document.querySelector(".vid");
const context = canvas.getContext('2d');

const defaultpagelength = "800vh";
var shown = false;

const currentFrame = index => (
    `./images/archie_${index.toString().padStart(3,'0')}.png`
)

// video details //
const frameCount = 200;
canvas.width = 1694;
canvas.height = 720;
const img = new Image();
img.src = currentFrame(0);
console.log(img)

// load first frame /
img.onload = function() {
    context.drawImage(img, 0, 0)
}

// update image seq //
const updateImage = index => {
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0);
}

// scroll animation code //
window.addEventListener('scroll', () => {
    if (shown == true) {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount + 20)); // change + 20 to whatever frame you want to start on //
    /*
    debug
    console.log(scrollTop)
    console.log(maxScrollTop)
    console.log(scrollFraction)
    console.log(frameIndex + 1);
    */
    requestAnimationFrame( () => updateImage(frameIndex + 1))
    }
})


// animation before scroll //
var animfr = 0
const animation = () => {

    // debug console.log("hi")
    if (animfr != 21) { // change 21 to what frame you want to stop on //
        animfr += 1;
        const img = new Image();
        img.src = currentFrame(animfr);
        requestAnimationFrame( () => updateImage(animfr + 1))
    } else {
        clearInterval(anim);
        shown = true
    }

};

// preload //

    // stop scrolling before preload //

const videocanvas = document.getElementById("videocanvas");
var loaded = false
videocanvas.style.height = "0vh";
const preloadImg = () => {
    for (let x = 1; x < frameCount; x++) {
        const img = new Image();
        img.src = currentFrame(x)
        img.addEventListener('load', function () {
            console.log("Loaded!")

            // load //
            if (x == frameCount - 1) {
                
        document.getElementById("loading").remove();
        videocanvas.style.height = defaultpagelength;
        loaded = true
        anim = setInterval(animation, 41.666666666666664);

            }
        });

    };

};




preloadImg();

// reset scroll on close func //

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// start anim before scroll //

/* while (loaded == false) {} */

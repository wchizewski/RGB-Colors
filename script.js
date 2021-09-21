// RGB Colors with js by Will

// Variables to store html els
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut")
let displayEl = document.getElementById("display");

// Event listener
redInEl.addEventListener("input", rbgPreview)
greenInEl.addEventListener("input", rbgPreview)
blueInEl.addEventListener("input", rbgPreview)


// Event Function
function rbgPreview() {
    // Input: get rgb values
    let rValue = +redInEl.value;
    let gValue = +greenInEl.value;
    let bValue = +blueInEl.value;

    // Validate Colors (Constrain colors between 0 - 255)
    // check rValue
    if (rValue < 0){
        rValue = 0
        redInEl.value = 0;
    } else if (rValue > 255){
        rValue = 255;
        redInEl.value = 255;
    }

    // check gValue
    if (gValue < 0){
        gValue = 0
        greenInEl.value = 0;
    } else if (gValue > 255){
        gValue = 255;
        greenInEl.value = 255;
    }

    // check bValue
    if (bValue < 0){
        bValue = 0
        blueInEl.value = 0;
    } else if (bValue > 255){
        bValue = 255;
        blueInEl.value = 255;
    }

    // Process: build rgb string rgb(_, _, _,)
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")"

    // Output: display rgb string and update the color preview
    rgbStringOutEl.innerHTML = rgbString;
    displayEl.style.background = rgbString;

    
}
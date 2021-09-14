// RGB Colors with js by Will

// Event listener
document.getElementById("preview-btn").addEventListener("click", rbgPreview);

// Event Function
function rbgPreview() {
    // Input: get rgb values
    let rValue = document.getElementById("redIn").value;
    let gValue = document.getElementById("greenIn").value;
    let bValue = document.getElementById("blueIn").value;

    // Process: build rgb string rgb(_, _, _,)
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")"

    // Output: display rgb string and update the color preview
    document.getElementById("rgbStrOut").innerHTML = rgbString;
    document.getElementById("display").style.background = rgbString;
}
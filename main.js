let colorWheel = document.getElementById("color_wheel");
let result = document.getElementById("result");

let clientX;
let clientY;


colorWheel.addEventListener("touchstart", (e) => {
  // Get the x and y coordinates where the user touched
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;

  // Get the pixel at the coordinates and extract its color
  let color = html2canvas(colorWheel).then(function(canvas) {
    let ctx = canvas.getContext("2d");
    color = ctx.getImageData(clientX, clientY, 1, 1);
    console.log(color);

    // Update the results div to display the selected color
    let r = color.data[0].toString(16);
    let g = color.data[1].toString(16);
    let b = color.data[2].toString(16);

    let code = ("#").concat(r, b, g)
    result.innerHTML = code
  });
});
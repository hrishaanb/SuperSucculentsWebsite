function colorchange () {
    random_number_r = Math.floor(Math.random()*255) + 1;
    random_number_g = Math.floor(Math.random()*255) + 1;
    random_number_b = Math.floor(Math.random()*255) + 1;
    document.getElementById("Title").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";
}
setInterval(colorchange, 500);
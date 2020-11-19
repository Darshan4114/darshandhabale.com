var i = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */
var text = "Architect of the modern Web!"
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

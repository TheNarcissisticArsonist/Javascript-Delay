delay = 2000;
document.getElementById("submit").addEventListener("click", function() {
  alert("click");
  form = document.getElementById("delayInput");
  delay = form.elements[0].value;
  alert(delay);
});
document.getElementById("box").addEventListener("click", function() {
  alert("Hello!");
  startDelay(delay);
  alert("How are you?");
});

function startDelay(time) {
  start = new Date();
  start = start.getTime();
  console.log(start);
  finishDelay(time, start);
}
function finishDelay(t, s) {
  now = new Date()
  now = now.getTime();
  console.log(now);
  if(now < s + delay) {
    finishDelay(t, s);
  }
  else {
    return;
  }
}

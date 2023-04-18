document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    playSound();
    window.location.href = 'nextpage.html';
  });
});

function showAlert() {
  alert("STAY TUNED FOR PERSONALIZED PLANNER FEATURE");
}

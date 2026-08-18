function update() {

  // Read from form
  var company = document.getElementById('companyName').value;
  var cand    = document.getElementById('candName').value;
  var job     = document.getElementById('jobTitle').value;
  var salary  = document.getElementById('salary').value;
  var start   = document.getElementById('startDate').value;
  var hr      = document.getElementById('hrname').value;

  // Update the letter
  document.getElementById('prev-company').textContent  = company;
  document.getElementById('prev-greeting').textContent = 'Dear ' + cand + ',';
  document.getElementById('prev-intro').textContent    = 'We are pleased to offer you the position of ' + job + ' at ' + company + '.';
  document.getElementById('prev-pos').textContent      = job;
  document.getElementById('prev-salary').textContent   = '$' + salary;
  document.getElementById('prev-sig').textContent = hr;

  // Format the date nicely
  if (start) {
    var d = new Date(start + 'T00:00:00');
    var formatted = d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    document.getElementById('prev-start').textContent = formatted;
  }

}

// Run once when page loads
update();
//
function setColor(color) {
  document.documentElement.style.setProperty('--accent', color);
}
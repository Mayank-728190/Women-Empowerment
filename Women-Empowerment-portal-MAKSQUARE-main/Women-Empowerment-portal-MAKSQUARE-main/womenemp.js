document.addEventListener('DOMContentLoaded', function() {
    // Simulating asynchronous loading of helpline numbers
    setTimeout(function() {
      const helplineNumbers = ['Emergency: 911', 'Domestic Violence: 1-800-799-SAFE', 'Sexual Assault: 1-800-656-HOPE'];
      document.getElementById('helpline').textContent = helplineNumbers.join(', ');
    }, 2000);
  
    // Handling form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      const formDataObject = {};
      formData.forEach(function(value, key) {
        formDataObject[key] = value;
      });
      // Here you can send the form data to your backend for processing
      console.log(formDataObject);
      alert('Your message has been sent!');
      this.reset();
    });
  });

  function calculatePayGap() {
    let maleSalary = parseFloat(document.getElementById("maleSalary").value);
    let femaleSalary = parseFloat(document.getElementById("femaleSalary").value);
    let payGap = ((maleSalary - femaleSalary) / maleSalary) * 100;
    document.getElementById("payGapResult").textContent = "The gender pay gap is " + Math.abs(payGap).toFixed(2) + "%.";
}

  
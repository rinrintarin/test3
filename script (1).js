  <script>
    function sendReceiptEmail() {
      // Fetch the form values
      const studentName = document.getElementById('studentName').value;
      const email = document.getElementById('email').value;
      const tutoringLevelSelect = document.getElementById('tutoringLevel');
      const selectedTutoringLevel = tutoringLevelSelect.options[tutoringLevelSelect.selectedIndex];
      const tutoringLevelPrice = selectedTutoringLevel.dataset.price;
      const subjectSelect = document.getElementById('subject');
      const selectedSubject = subjectSelect.options[subjectSelect.selectedIndex];
      const subjectPrice = selectedSubject.dataset.price;
      const totalPrice = parseInt(tutoringLevelPrice) + parseInt(subjectPrice);

      // Construct the email template parameters
      const templateParams = {
        studentName,
        email,
        tutoringLevel: selectedTutoringLevel.value,
        subject: selectedSubject.value,
        totalPrice
      };

      // Send the email using EmailJS
      emailjs.send('service_lg8lnm5', 'template_3ccb7fp', templateParams, 'YZcQvqy2JGrh8bSzq')
        .then(function(response) {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Receipt email sent successfully!');
        }, function(error) {
          console.error('Error sending email:', error);
          alert('Failed to send receipt email.');
        });
    }
  </script>

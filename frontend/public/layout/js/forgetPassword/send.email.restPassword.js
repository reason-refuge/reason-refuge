function generateCode() {
    var code = "";
    for (var i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }
  
  function sendMail(to) {
      var code = generateCode();
  
      emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          {
              email_user : to,
              code : code 
          },
          emailJsConfig.userId
        )
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
          console.log('FAILED...', error);
       });
      return code;
  }
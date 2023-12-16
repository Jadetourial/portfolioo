function emailSend(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rtjunior124@gmail.com",
        Password : "96CC27D9436A5D0E77204B0438A4D3A75A29",
        To : 'rtjunior124@gmail.com',
        From : "rtjunior124@gmail.com",
        Subject : "New Message!",
        Body : "Name: " + document.getElementById("nameS").value
        + "<br> Email: " + document.getElementById("emailS").value
        + "<br> Message: " + document.getElementById("messageS").value

    }).then(
      message => alert("Thank You For Your Submission!")
    );

}
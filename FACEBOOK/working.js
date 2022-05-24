var loginfunction = function()
{
    
   
      var username = document.querySelector('#username').value;
      var password = document.querySelector('#password').value;


    

     if (username == "vcdiamond507@gmail.com" && password == "Vijay@8568370")
     {
        window.open('facebookhome.html', '_blank');
     }
     else
     {
         alert('Either your user id or password wrong');
     }

}

var forgetpassword = function()
{
      var recoverymail = document.querySelector('#recoverymail').value;
      if(recoverymail == "")
      {
          alert("Plz provide a mail id......");
      }
      else
      {
        alert("password has been sent to " + recoverymail  + " address");
      }
        console.log('hlo');
    
}
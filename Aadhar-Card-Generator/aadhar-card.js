document.querySelector('#submit-btn').addEventListener
( 'click', function()
{

     var section = document.querySelector('#main-section');
     section.classList.toggle('after-click')
    var username = document.querySelector('#name').value;
    var userdob = document.querySelector('#dob').value;
    var maleg = document.querySelector('#male');
    var femaleg = document.querySelector('#female');
    
    document.querySelector('#user-name').textContent = username;
    document.querySelector('#user-dob').textContent = userdob;
    
   if(maleg.checked == true)
   {
       document.querySelector('#user-gender').textContent = 'Male';
       document.querySelector('#photo').src = "https://rukminim1.flixcart.com/image/416/416/jm81zm80/poster/u/v/w/medium-pocute-babies-hd-wallpapers-charming-face-pocute-babies-original-imaf2ggnxfxkgzcf.jpeg?q=70";
   }
   if(femaleg.checked == true)
   {
       document.querySelector('#user-gender').textContent = 'Female';
       document.querySelector('#photo').src = "https://i.pinimg.com/originals/68/76/c7/6876c787e4523dafdc34e30b3f9e3fb5.jpg"
   }

})
/*
var profileMenu = document.querySelector(".profile-menu");
function profileMenuToggle(){
  profileMenu.classList.toggle("profile-menu-height");
}
*/



/*================ scroll sections active Link ==============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};





// কন্ট্রাক বাটন ক্লিক করলে সোশাল মিডিয়া হাইলাইট হবে।


document.querySelector('.contract-btn').addEventListener('click', () => {
  // Styles applied on click
  document.querySelector('.one').style.boxShadow = '0 0 1rem #1876fe';
  document.querySelector('.one').style.background = '#1876fe';
  document.querySelector('.one').style.border = '.2rem solid #1876fe';
  document.querySelector('.one').style.color = '#fff';

  document.querySelector('.two').style.boxShadow = '0 0 1rem #bc2a8d';
  document.querySelector('.two').style.background = 'linear-gradient(#EC1E89,#EC8821)';
  document.querySelector('.two').style.border = '.2rem solid transparent';
  document.querySelector('.two').style.color = '#fff';

  document.querySelector('.three').style.boxShadow = '0 0 1rem #25D366';
  document.querySelector('.three').style.background = '#25D366';
  document.querySelector('.three').style.border = '.2rem solid #25D366';
  document.querySelector('.three').style.color = '#fff';

  document.querySelector('.four').style.boxShadow = '0 0 1rem #1DA1F2';
  document.querySelector('.four').style.background = '#1DA1F2';
  document.querySelector('.four').style.border = '.2rem solid #1DA1F2';
  document.querySelector('.four').style.color = '#fff';

  // Remove styles after 3 seconds
  setTimeout(() => {
    document.querySelector('.one').removeAttribute('style');
    document.querySelector('.two').removeAttribute('style');
    document.querySelector('.three').removeAttribute('style');
    document.querySelector('.four').removeAttribute('style');
  }, 0800);
});





// send email.from smtpJs

function emailSend(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "lazinmahmud69@gmail.com",
Password : "916148617084B00CB74328E284BD2EB900E2",
    To : 'lazinmahmud69@gmail.com',
    From : document.getElementById("emailId").value,
    Subject : "New User Mail",
    Body : "And this is the body"
}).then(
  message => alert("Meaasge Sent Successfully")
);
}

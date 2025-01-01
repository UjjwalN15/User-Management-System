let edit_email = document.getElementById('edit_email');
let edit_password = document.getElementById('edit_password');

edit_email.addEventListener('click', function() {
    const email = document.getElementById('email');
    if (email.hasAttribute('readonly')){
        email.removeAttribute('readonly');
        email.style.width = '100%';
        email.style.fontSize = '1.5rem';
        email.focus(); 
    }else{
        email.setAttribute('readonly', true);
    }
});

document.getElementById('edit_password').addEventListener('click', function() {
    const edit_password_box = document.querySelector('.edit_password_box');
    const password = document.getElementById('password');
    
    // Check if the element's display is 'none' or not set, then toggle
    if (edit_password_box.style.display === 'none' || edit_password_box.style.display === '') {
        edit_password_box.style.display = 'block';
        password.style.opacity='0';
    } else {
        edit_password_box.style.display = 'none';
        password.style.opacity='1';
    }
});




const new_password = document.getElementById('new_password');
const confirm_password = document.getElementById('confirm_password');
const change_profile_form = document.getElementById('change_profile_form');

change_profile_form.addEventListener('submit', (event) => {
    if (new_password.value !== confirm_password.value) {
        alert("Passwords do not match");
        event.preventDefault(); // Prevent form submission
    }
});


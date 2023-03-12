const form = document.getElementById('quote-form');
const nameInput = document.getElementById('yourName');
const emailInput = document.getElementById('yourEmail');
const serviceInput = document.getElementById('service');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        submitBtn.disabled = true;
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../../submit-form.php');
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Thank you for submitting your request!');
                form.reset();
                submitBtn.disabled = false;
            } else {
                alert('An error occurred. Please try again later.');
                submitBtn.disabled = false;
            }
        };
        xhr.send(formData);
    }
});

function validateForm() {
    let isValid = true;
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('is-invalid');
    }
    if (emailInput.value.trim() === '') {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('is-invalid');
    }
    if (serviceInput.value === '') {
        serviceInput.classList.add('is-invalid');
        isValid = false;
    } else {
        serviceInput.classList.remove('is-invalid');
    }
    return isValid;
}

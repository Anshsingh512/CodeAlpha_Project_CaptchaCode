function generateCaptcha() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captchaText = '';
    for (var i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    var captchaImage = document.getElementById('captcha-image');
    captchaImage.textContent = captchaText;
}

function showPopup() {
    var enteredCaptcha = document.getElementById('captcha').value;
    var captchaImage = document.getElementById('captcha-image').textContent;

    if (enteredCaptcha === captchaImage) {
        var popup = document.getElementById('popup');
        popup.style.display = 'flex';
    } else {
        alert("Incorrect CAPTCHA. Please try again.");
    }
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

document.getElementById('popup-close').addEventListener('click', closePopup);
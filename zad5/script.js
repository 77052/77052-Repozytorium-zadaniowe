/* 77052 */
let currentTheme = "red";

function changeTheme() {
    const theme = document.getElementById("themeStylesheet");

    if (currentTheme === "red") 
    {
        theme.href = "green.css";
        currentTheme = "green";
    } 
    else 
    {
        theme.href = "red.css";
        currentTheme = "red";
    }
}

function toggleSection() {
    const section = document.getElementById("umiejętności");

    if (section.style.display === "none") 
    {
        section.style.display = "block";
    } 
    else 
    {
        section.style.display = "none";
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) { e.preventDefault();

    let valid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    const nameValid = /^[A-Za-zÀ-ž\s-]+$/;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'Podaj imię';
        valid = false;
    }
    else if (!nameValid.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'Imię nie może zawierać cyfr';
        valid = false;
    }

    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Podaj nazwisko';
        valid = false;
    }
    else if (!nameValid.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Nazwisko nie może zawierać cyfr';
        valid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Podaj e-mail';
        valid = false;
    }
    else if (!emailValid.test(email)) {
        document.getElementById('emailError').textContent = 'Niepoprawny e-mail';
        valid = false;
    }

    if (!message) {
        document.getElementById('messageError').textContent = 'Podaj wiadomość';
        valid = false;
    }

    if (valid) {
        alert('Poprawnie uzupełniono formularz');
        this.reset();
    }
});

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

fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        const skillsList = document.getElementById('skillsList');

        data.umiejetnosci.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        const projectsList = document.getElementById('projectsList');

        data.projekty.forEach(project => {
            const li = document.createElement('li');
            li.textContent = project;
            projectsList.appendChild(li);
        });

    });

let tasks = [];

function loadTasks() {
    const data = localStorage.getItem("tasks");
    if (data) {
        tasks = JSON.parse(data);
    }
    renderTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const btn = document.createElement("button");
        btn.textContent = "Usuń";
        btn.onclick = () => deleteTask(index);
        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const value = input.value.trim();

    if (value === "") return;

    tasks.push(value);
    input.value = "";

    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

document.addEventListener("DOMContentLoaded", loadTasks);

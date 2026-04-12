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

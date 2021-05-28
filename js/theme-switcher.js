/*
    Decided to add theming cause I thought it would be a fun thing to add.
    I learned this setup from
    (https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2)

    applied my own twist to show that I understand the code
 */

const darkMode = {
    name: "dark-mode",
    img: "img/sun.svg",
    desc: "Light Mode"
};

const lightMode = {
    name: "light-mode",
    img: "img/moon.svg",
    desc: "Dark Mode"
};


let currentTheme;

function setTheme(isDarkMode) {
    currentTheme = isDarkMode;
    //Updates the value of dark-mode in local storage
    localStorage.setItem(darkMode.name, isDarkMode)

    let mode = isDarkMode ? darkMode : lightMode;

    document.documentElement.className = mode.name;

    let toggle = document.getElementById("switch");
    toggle.setAttribute("src", mode.img);
    toggle.setAttribute("alt", mode.desc);
}

function toggleTheme() {
    //inverts the value of the dark-mode value in local storage and calls setTheme
    setTheme(!currentTheme);
}

//Ran on page load to set the theme
(function () {
    setTheme(localStorage.getItem(darkMode.name) === "true");
})();
const passwordBox = document.getElementById("password");

let lenght;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "!@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    lenght = Math.floor(Math.random() * 6) + 10;
    let password = "";
    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select(); // ctrl + a
    document.execCommand("copy"); // ctrl + c
}
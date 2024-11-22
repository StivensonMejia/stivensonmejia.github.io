const colorRed = document.querySelector('.themeRed');
const colorPurple = document.querySelector('.themePurple');
const colorBlue = document.querySelector('.themeBlue');

colorRed.addEventListener('click', function () {
    document.documentElement.style.setProperty('--red', '#bd2929');
});

colorPurple.addEventListener('click', function () {
    document.documentElement.style.setProperty('--red', '#8553AC');
});

colorBlue.addEventListener('click', function () {
    document.documentElement.style.setProperty('--red', '#55C78B');
});
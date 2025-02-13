document.addEventListener('DOMContentLoaded', function () {

    function getOrSetTheme() {
        let theme = localStorage.getItem('WinAppLocalTheme');

        if (theme !== 'light' && theme !== 'dark') {
            // Проверяем поддержку prefers-color-scheme
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                theme = 'light';
            } else {
                theme = 'dark'; // Если нет поддержки, ставим "dark" по умолчанию
            }

            localStorage.setItem('WinAppLocalTheme', theme);
        }

        applyTheme(theme);
        return theme;
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.getElementsByTagName('wrap')[0].classList.add('dark');
            document.getElementById('themeToggleBtn').innerHTML = "<emoji>🌚</emoji>Тёмная тема"
        } else {
            document.getElementsByTagName('wrap')[0].classList.remove('dark');
            document.getElementById('themeToggleBtn').innerHTML = "<emoji>🌞</emoji>Cветлая тема"
        }
    }

    // Функция для смены темы
    function toggleTheme() {
        let currentTheme = localStorage.getItem('WinAppLocalTheme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('WinAppLocalTheme', currentTheme);
        applyTheme(currentTheme);
    }

    // Устанавливаем тему при загрузке страницы
    getOrSetTheme();


    // Пример: смена темы по кнопке
    document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);

});
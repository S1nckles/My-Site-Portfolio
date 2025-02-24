particlesJS("background", {
    particles: {
        number: {
            value: 25, // Кількість частинок на екрані
            density: {
                enable: true, // Включення розподілу частинок по площі
                value_area: 250, // Область, у якій будуть розташовуватися частинки
            },
        },

        color: {
            value: "#ffffff", // Колір частинок (білий)
        },
        shape: {
            type: "circle", // Форма частинок (коло)
        },
        opacity: {
            value: 0.8, // Базова прозорість частинок
            random: true, // Випадкове значення прозорості для кожної частинки
            anim: {
                enable: true, // Включення анімації зміни прозорості
                speed: 1, // Швидкість зміни прозорості
                opacity_min: 0.1, // Мінімальне значення прозорості
                sync: false, // Відключення синхронізації прозорості між частинками
            },
        },
        size: {
            value: 5, // Базовий розмір частинок
            random: true, // Випадковий розмір для кожної частинки
            anim: {
                enable: true, // Включення анімації зміни розміру
                speed: 4, // Швидкість зміни розміру частинок
                size_min: 0.3, // Мінімальне значення розміру частинки
                sync: false, // Відключення синхронізації зміни розміру між частинками
            },
        },

        // Налаштування з'єднувальних ліній між частинками
        line_linked: {
            enable: true, // Включення з'єднувальних ліній
            distance: 150, // Максимальна відстань між частинками для утворення ліній
            color: "#ffffff", // Колір ліній
            opacity: 0.4, // Прозорість ліній
            width: 1, // Товщина ліній
        },

        // Налаштування руху частинок
        move: {
            enable: true, // Включення руху частинок
            speed: 4, // Швидкість руху частинок
            direction: "none", // Напрям руху (none — хаотичний рух)
            random: false, // Відключення випадкового руху
            straight: false, // Відключення прямолінійного руху
            out_mode: "bounce", // Поведінка, коли частинки виходять за межі екрану (відскакують)
            bounce: false, // Відключення додаткового відскоку від меж
        },
    },

    // Налаштування інтерактивності
    interactivity: {
        detect_on: "canvas", // Область, на якій виявляються взаємодії (полотно)
        events: {
            onhover: {
                enable: true, // Включення взаємодії при наведенні миші
                mode: "repulse", // Частинки відштовхуються від курсора
            },
            onclick: {
                enable: true, // Включення взаємодії при кліку
                mode: "push", // Додаються нові частинки при кліку
            },
            resize: true, // Адаптація анімації при зміні розміру вікна
        },
    },

    // Виявлення Retina-дисплеїв для кращої якості рендерингу
    retina_detect: true,
});

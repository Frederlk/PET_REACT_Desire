// Подключение списка активных модулей
/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? "webp" : "no-webp";
        document.documentElement.classList.add(className);
    });
}
/* Проверка мобильного браузера */
export let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
};
// Получение хеша в адресе сайта
export function getHash() {
    if (location.hash) {
        return location.hash.replace("#", "");
    }
}
// Указание хеша в адресе сайта
export function setHash(hash) {
    hash = hash ? `#${hash}` : window.location.href.split("#")[0];
    history.pushState("", "", hash);
}
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains("lock")) {
        bodyUnlock(delay);
    } else {
        bodyLock(delay);
    }
};
export let bodyUnlock = (delay = 500) => {
    let body = document.querySelector("body");
    if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = "0px";
            }
            body.style.paddingRight = "0px";
            document.documentElement.classList.remove("lock");
        }, delay);
        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};
export let bodyLock = (delay = 500) => {
    let body = document.querySelector("body");
    if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll("[data-lp]");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
        }
        body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
        document.documentElement.classList.add("lock");

        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};
// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/menu-burger.html
Сниппет (HTML): menu
*/
export function menuInit() {
    if (document.querySelector(".icon-menu")) {
        document.addEventListener("click", function (e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            } else if (
                document.documentElement.classList.contains("menu-open") &&
                bodyLockStatus &&
                !e.target.closest(".menu__body")
            ) {
                menuClose();
            }
        });

        document.addEventListener("keydown", function (e) {
            if (
                bodyLockStatus &&
                e.which == 27 &&
                e.code === "Escape" &&
                document.documentElement.classList.contains("menu-open")
            ) {
                menuClose();
            }
        });
    }
}

export function menuOpen() {
    bodyLock();
    document.documentElement.classList.add("menu-open");
}
export function menuClose() {
    bodyUnlock();
    document.documentElement.classList.remove("menu-open");
}

//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================

// Получить рандомное число
export const getRandomInt = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
};

// Сортировка данных
export const sortData = (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
};

// Добавление класса _touch для HTML если браузер мобильный
export function addTouchClass() {
    if (isMobile.any()) document.documentElement.classList.add("touch");
}

// Найти вложженный элемент массива
export const findNested = (obj, key, value) => {
    // Base case
    if (obj[key] === value) {
        return obj;
    } else {
        let keys = Object.keys(obj); // add this line to iterate over the keys

        for (let i = 0, len = keys.length; i < len; i++) {
            let k = keys[i]; // use this key for iteration, instead of index "i"

            // add "obj[k] &&" to ignore null values
            if (obj[k] && typeof obj[k] == "object") {
                let found = findNested(obj[k], key, value);
                if (found) {
                    // If the object was found in the recursive call, bubble it up.
                    return found;
                }
            }
        }
    }
};

// Работа с шапкой при скроле
export function headerScroll(startPoint = 1) {
    let addWindowScrollEvent = true;
    const wrapper = document.querySelector(".wrapper");
    let scrollDirection = 0;
    document.addEventListener("windowScroll", function (e) {
        const scrollTop = window.scrollY;
        if (scrollTop >= startPoint) {
            !wrapper.classList.contains("_scroll") ? wrapper.classList.add("_scroll") : null;
        } else {
            wrapper.classList.contains("_scroll") ? wrapper.classList.remove("_scroll") : null;
        }
        scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
    });

    // При подключении модуля обработчик события запустится автоматически
    setTimeout(() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", function (e) {
                document.dispatchEvent(windowScroll);
            });
        }
    }, 0);
}

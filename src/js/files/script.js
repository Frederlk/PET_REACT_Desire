// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.querySelector(".about-video")) {
    let videoThumb = document.querySelector(".about-video__thumbnail");
    videoThumb.addEventListener("click", function (e) {
        videoThumb.classList.toggle("_active");
    });
}

if (document.querySelector(".about-progress")) {
    const progressSection = document.querySelector(".about-details__bottom");
    const progressBars = document.querySelectorAll(".about-progress__bar");

    function showProgress() {
        progressBars.forEach((progressBar) => {
            const value = progressBar.dataset.progress;
            progressBar.style.width = `${value}%`;
        });
    }

    window.addEventListener("scroll", () => {
        const sectionPos = progressSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos) {
            showProgress();
        }
    });
    if (progressSection.classList.contains("_active")) {
        console.log(POgU);
    }
}

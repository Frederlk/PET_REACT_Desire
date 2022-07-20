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

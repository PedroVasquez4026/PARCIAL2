const setupScrolling = () => {
    const container = [...document.querySelectorAll('.movie-container')]
    const nextBtn = [...document.querySelectorAll('.nxt-btn')]
    const pretBtn = [...document.querySelectorAll('.pre-btn')]



    container.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nextBtn[i].addEventListener("click", () => {
            item.scrollLeft += containerWidth;
        })

        pretBtn[i].addEventListener("click", () => {
            item.scrollLeft -= containerWidth;
        })
    })
}
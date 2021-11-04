export function addingScreenToPhone () {
    const images = [
        require("../images/1.jpeg"),
        require("../images/2.jpeg"),
        require("../images/3.jpeg"),
        require("../images/4.jpeg"),
        require("../images/5.jpeg"),
    ];
    const changingScreen = document.createElement("div");
    let div = null

    images.map((el) => {
        div = document.createElement("div");
        div.style.background = `url(${el})`;
        div.classList.add("screens-img")
        changingScreen.appendChild(div);
    });

    div.classList.add("screens-img-visible")

    const pics = changingScreen.querySelectorAll("div")
    let index = 0

    let idInterval = setInterval(() => {
        index++
        if (index >= images.length) {
            index = 0
        }
        pics.forEach((el) => {
            el.classList.remove("screens-img-visible")
        })

        pics[index].classList.add("screens-img-visible");
    }, 5000)

    return changingScreen
}

export function createIPhoneBlock() {
    const iPhones = document.createElement("div")
    iPhones.classList.add("phones")

    return iPhones
}
export function addingScreenToPhone () {
    const images = [
        "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
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
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const signInPage = createSignInPage();

    // root.appendChild(signInPage)
})  

function createSignInPage() {
    function createImages(source, className) {
        const img = document.createElement("img")
        img.src = source
        img.classList.add(className)

        return img
    }

    function createCarousel() {
        const images = [
            "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
        ]


    }

    function createSignInHeading () {
        const heading = document.createElement("h1")
        heading.innerText = "My Instagram"

        return heading
    }

    function addingScreenToPhone () {
        const images = [
            "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
            "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
        ];

        const changingScreen = document.createElement("div");
        changingScreen.classList.add("screens");
        changingScreen.style.background = 'url("https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg")';
        
        images.map((el) => {
            const div = document.createElement("div")
            div.style.background = `url(${el})`
            changingScreen.appendChild(div)
        });

        const pics = changingScreen.querySelectorAll("div")
        let index = 0

        let idInterval = setInterval(() => {
            index++
            if (index >= images.length) {
                index = 0
            }

            pics[index].classList.toggle("showing-class");
        }, 1000)

        changingScreen.style.backgroundSize = "cover";
        changingScreen.style.backgroundRepeat = "no-repeat";

        return changingScreen
    }

    function createIPhoneBlock() {
        const iPhones = document.createElement("div")
        iPhones.classList.add("phones")

        return iPhones
    }

    function createSignInFormInput(inputObject) {
        const input = document.createElement("input");
        input.type = inputObject.type;

        if (typeof inputObject.value !== "undefined") {
            input.value = inputObject.value;
        }

        if (typeof inputObject.placeholder !== "undefined") {
            input.placeholder = inputObject.placeholder;
        }

        if (typeof inputObject.name !== "undefined") {
            input.name = inputObject.name;
        }

        return input;
    };

    function createSignInForm () {
        const signInForm = document.createElement("form");
        signInForm.classList.add("sign-in-form")
        const emailInput = createSignInFormInput({ type: "email", placeholder: "Эл. почта", name: "email" });
        const passwordInput = createSignInFormInput({ type: "password", placeholder: "Пароль", name: "password" });
        const submitButton = createSignInFormInput({ type: "submit", value: "Войти" })
        // submitButton.disabled = true

        signInForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const fields = event.target.querySelectorAll("input[type=email], input[type=password]");
            const values = {};
            
            fields.forEach((field) => {
                values[field.name] = field.value;
            });

            console.log("values", values);
        });

        const header = createSignInHeading()
        signInForm.appendChild(header);

        signInForm.appendChild(emailInput);
        signInForm.appendChild(passwordInput);
        signInForm.appendChild(submitButton);

        return signInForm;
    };

    function createFooter() {
        const footer = document.createElement("footer")
        const footerText = document.createElement("span")
        let now = new Date()

        footerText.innerText = `\u00A9 by Alan, ${now.getFullYear()}`
        footer.appendChild(footerText)

        return footer
    }

    function render(container) {
        const signInPageContainer = document.createElement("div");
        signInPageContainer.id = "sign-in-page-container"; 
        const mainContainer =  document.createElement("div");
        mainContainer.classList.add("main-container")

        const signInForm = createSignInForm();
        const footer = createFooter()
        const iPhoneBlock = createIPhoneBlock()
        const changingScreen = addingScreenToPhone()

        iPhoneBlock.appendChild(changingScreen)
        mainContainer.appendChild(iPhoneBlock);
        mainContainer.appendChild(signInForm);
        signInPageContainer.appendChild(mainContainer);
        signInPageContainer.appendChild(footer);
        container.appendChild(signInPageContainer);
    }

    render(root)

    // content.appendChild(photoBlock);
    // const changingScreen = addingScreenToPhone()
    // photoBlock.appendChild(changingScreen)
    // const phoneImg = changingScreen()
    // changingScreen.appendChild(phoneImg)

}

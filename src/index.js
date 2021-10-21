
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const content = document.getElementById("content");
    content.classList.add("main-content")



    const signInPage = {
        createFooter() {
            const footer = document.createElement("footer")
            const footerText = document.createElement("span")
            let now = new Date()

            footerText.innerText = `\u00A9 by Alan, ${now.getFullYear()}`
            footer.appendChild(footerText)

            return footer
        },

        createPhotoBlock() {
            const photoBlock = document.createElement("div")
            photoBlock.classList.add("phones")

            return photoBlock
        },

        changingScreen() {
            const images = [
                "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
                "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
                "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
                "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
                "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
            ]

            let index = 0
            const phoneImg = document.createElement("img")
            phoneImg.src = images[index]
            phoneImg.classList.add("phoneImg")

            setInterval(() => {
                console.log(index);
                index++
                if (index >= images.length) {
                    index = 0
                }

            }, 1000)
            return phoneImg
        },

        addingScreenToPhone () {
            const changingScreen = document.createElement("div")
            changingScreen.classList.add("screens")

            return changingScreen
        },

        createSignInHeading () {
            const heading = document.createElement("h1")
            heading.innerText = "My Instagram"

            return heading
        },
        
        createSignInFormInput(inputObject) {
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
        },

        createSignInForm () {
            const signInForm = document.createElement("form");
            signInForm.classList.add("sign-in-form")
            const emailInput = this.createSignInFormInput({ type: "email", placeholder: "Эл. почта", name: "email" });
            const passwordInput = this.createSignInFormInput({ type: "password", placeholder: "Пароль", name: "password" });
            const submitButton = this.createSignInFormInput({ type: "submit", value: "Войти" })
            submitButton.disabled = true

            signInForm.addEventListener("submit", (event) => {
                event.preventDefault();

                const fields = event.target.querySelectorAll("input[type=email], input[type=password]");
                const values = {};
                
                fields.forEach((field) => {
                    values[field.name] = field.value;
                });
            });

            signInForm.appendChild(emailInput);
            signInForm.appendChild(passwordInput);
            signInForm.appendChild(submitButton);

            return signInForm;
        },

        render(container) {
            const signInPageContainer = document.createElement("div");
            signInPageContainer.id = "sign-in-page-container";  

            const signInForm = this.createSignInForm();
            const header = this.createSignInHeading()

            signInPageContainer.appendChild(header);
            signInPageContainer.appendChild(signInForm);
            container.appendChild(signInPageContainer);
        },
    };

    const photoBlock = signInPage.createPhotoBlock()
    content.appendChild(photoBlock);
    const changingScreen = signInPage.addingScreenToPhone()
    photoBlock.appendChild(changingScreen)
    const phoneImg = signInPage.changingScreen()
    changingScreen.appendChild(phoneImg)

    signInPage.render(content);

    const footer = signInPage.createFooter()
    root.appendChild(footer);
});
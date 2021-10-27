function createSignInHeading () {
    const heading = document.createElement("h1")
    heading.innerText = "My Instagram"

    return heading
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

export function createSignInForm () {
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
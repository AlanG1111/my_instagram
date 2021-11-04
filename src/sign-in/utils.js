import {addingScreenToPhone, createIPhoneBlock} from "./phones"
import {createFooter} from "./footer"
import {createSignInForm} from "./sign-in form"
import { container } from "webpack";

function renderPage() {
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
    
    return {
        render(container) {
        container.appendChild(signInPageContainer);
        },
        remove() {
            signInPageContainer.remove()
        }
    }
}

export const SignInPage = renderPage()
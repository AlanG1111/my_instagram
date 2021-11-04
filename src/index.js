import { createRouter } from "./routing";
import { APP_ROUTES } from "./routing/router";
import {render, renderPage} from "./sign-in/utils"

export let router = null;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    router = createRouter(APP_ROUTES, root)

    router.go("sign-in")
    // const p = renderPage()

    // p.render(root)
})   



export function createFooter() {
    const footer = document.createElement("footer")
    const footerText = document.createElement("span")
    let now = new Date()

    footerText.innerText = `\u00A9 by Alan, ${now.getFullYear()}`
    footer.appendChild(footerText)

    return footer
}

export function summarySection() {

    // Const da seção

    const about = document.querySelector("#about")
    const aboutTitle = document.querySelector(".about-title")

    // Const do currículo

    const aboutSummary = document.querySelector(".about-summary")

    // Funções

    document.addEventListener("keydown", function insertSummary(){
        aboutSummary.textContent = about.value
        !about.value ? aboutTitle.textContent = "" : aboutTitle.textContent = "Sobre mim"
        setTimeout(() => {
            insertSummary()
        }, 500)
    })

}
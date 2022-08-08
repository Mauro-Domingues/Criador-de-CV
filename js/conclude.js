import { main } from "./index.js"

export function concludeSection(){

    // Const da seção

    const fontFamily = document.querySelector("#font-family")
    const pageColor = document.querySelector("#page-color")
    const beltColor = document.querySelector("#belt-color")
    const fontColor = document.querySelector("#font-color")
    const beltFontColor = document.querySelector("#belt-font-color")
    const pictureFile = document.querySelector("#picture-file")
    const socialMedia = document.querySelector("#social-media")
    const socialMediaType = document.querySelector("#social-media-type")
    const addButton = document.querySelector(".conclude-add")
    const removeButton = document.querySelector(".conclude-remove")
    const printButton = document.querySelector(".pdf")

    // Const do currículo

    const curriculum = document.querySelector(".curriculum")
    const curriculumBody = document.querySelector(".body")
    const belt = document.querySelector(".belt")
    const getPicture = document.querySelector(".get-picture")
    const socialMedias = document.querySelector(".social-medias")

    // Funções

    fontFamily.addEventListener("change", () => {
        curriculum.style.fontFamily = `"${fontFamily.value}"`
    })

    pageColor.addEventListener("change", () => {
        curriculumBody.style.backgroundColor = `${pageColor.value}`
    })

    beltColor.addEventListener("change", () => {
        belt.style.backgroundColor = `${beltColor.value}`
    })

    fontColor.addEventListener("change", () => {
        curriculumBody.style.color = `${fontColor.value}`
    })

    beltFontColor.addEventListener("change", () => {
        belt.style.color = `${beltFontColor.value}`
    })

    pictureFile.addEventListener("change", () => {
        alert(`Importante! Escolha uma foto 3x4 ou retirada "com o celular em pé"`)
        const fileReader = new FileReader()
        fileReader.readAsDataURL(pictureFile.files[0])
        fileReader.onloadend = (event) => {
            getPicture.src = event.target.result
        }
    })

    addButton.addEventListener("change", () => {
        socialMedias.appendChild(addLI())
    })

    removeButton.addEventListener("change", () => {
        socialMedias.removeChild(socialMedias.lastChild)
    })

    function addLI(){
        const listItem = document.createElement('li')
        listItem.setAttribute('class', 'extra-data social-link')
        listItem.innerHTML = `<img src="./images/${socialMediaType.value}-icon.png" class="icon extra-data">${socialMedia.value}`
        socialMedia.value = ""
        socialMediaType.value = "internet"
        return listItem
    }

    printButton.addEventListener("click", () => {
        alert("Impressão com cores de fundo ainda não está disponível, tenha paciência e em breve será disponibilizado")
        window.print()
    })

}
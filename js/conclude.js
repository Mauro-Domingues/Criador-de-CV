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
    const onButton = document.querySelector(".conclude-on")
    const outButton = document.querySelector(".conclude-out")
    const printButton = document.querySelector(".pdf")

    // Const do currículo

    const curriculum = document.querySelector(".curriculum")
    const curriculumBody = document.querySelector(".body")
    const belt = document.querySelector(".belt")
    const getPicture = document.querySelector(".get-picture")
    const socialMedias = document.querySelector(".social-medias")
    let getPictureSize = 140

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
        alert("Importante! Escolha uma foto no qual seu rosto esteja centralizado")
        const fileReader = new FileReader()
        fileReader.readAsDataURL(pictureFile.files[0])
        fileReader.onloadend = (event) => {
            getPicture.style.backgroundImage = `url('${event.target.result}')`
        }
    })

    function pictureScale(){
        getPicture.style.backgroundSize = `${getPictureSize}px`
    }

    onButton.addEventListener("change", () => {
        getPictureSize = getPictureSize + 5
        pictureScale()
    })

    outButton.addEventListener("change", () => {
        getPictureSize = getPictureSize - 5
        pictureScale()
    })

    addButton.addEventListener("change", () => {
        socialMedias.appendChild(addLI())
    })

    removeButton.addEventListener("change", () => {
        socialMedias.removeChild(socialMedias.lastChild)
    })

    function addLI(){
        const listItem = document.createElement('li')
        listItem.setAttribute('class', 'social-link')
        listItem.innerHTML = `<a class="extra-data" href="${socialMedia.value}" target="_blank"><img src="./images/${socialMediaType.value}-icon.png" class="icon extra-data">${socialMedia.value}</a>`
        socialMedia.value = ""
        socialMediaType.value = "internet"
        return listItem
    }

    printButton.addEventListener("click", () => {
        alert(`Atenção!
            Na aba de imprimir/salvar como PDF selecionar:
            • Tamanho do papel: A4
            • Escala(%): 130%
            • Margens: Nenhum
            • Ativar elementos gráficos de plano de fundo`)
        window.print()
    })

}
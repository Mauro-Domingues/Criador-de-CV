export function graduationSection(){

    // Const da seção

    const instituition = document.querySelector("#instituition")
    const cert = document.querySelector("#cert")
    const duration = document.querySelector("#duration")
    const certDescription = document.querySelector("#cert-description")    
    const addButton = document.querySelector(".add-grad")
    const removeButton = document.querySelector(".remove-grad")

    // Const do currículo

    const gradList = document.querySelector(".grad-list")

    // Funções

    addButton.addEventListener("change", () => {
        gradList.appendChild(addLI())
    })

    removeButton.addEventListener("change", () => {
        gradList.removeChild(gradList.lastChild)
    })

    function addLI(){
        const listItem = document.createElement('li')
        listItem.setAttribute('class', 'container')
        listItem.innerHTML = `
        <div class="grad-name">
            <h4 class="extra-data"><span class="extra-data icon"></span>${instituition.value}</h4>
            <h6>Duração: ${duration.value}</h6>
        </div>
        <div class="grad-description">
            <h5 class="extra-data">${cert.value}</h5>
            <h6 class="extra-data desc">${certDescription.value}</h6>
        </div>`
        instituition.value = ""
        cert.value = ""
        duration.value = ""
        certDescription.value = ""
        return listItem
    }

}
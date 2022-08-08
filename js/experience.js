export function experienceSection(){

    // Const da seção

    const position = document.querySelector("#position")
    const companyName = document.querySelector("#company-name")
    const period = document.querySelector("#period")
    const workXP = document.querySelector("#work-xp")
    const addButton = document.querySelector(".add-xp")
    const removeButton = document.querySelector(".remove-xp")

    // Const do currículo

    const XPList = document.querySelector(".xp-list")

    // Funções

    addButton.addEventListener("change", () => {
        XPList.appendChild(addLI())
    })

    removeButton.addEventListener("change", () => {
        XPList.removeChild(XPList.lastChild)
    })

    function addLI(){
        const listItem = document.createElement('li')
        listItem.setAttribute('class', 'container')
        listItem.innerHTML = `
        <div class="company-name">
            <h4 class="extra-data"><img src="./images/map-pin-marker-icon.png" class="icon extra-data">${companyName.value}</h4>
            <h6 class="title">Período: ${period.value}</h6>
        </div>
        <div class="company-xp">
            <h5 class="extra-data">${position.value}</h5>
            <h6 class="extra-data desc">${workXP.value}</h6>
        </div>`
        position.value = ""
        companyName.value = ""
        period.value = ""
        workXP.value = ""
        return listItem
    }

}
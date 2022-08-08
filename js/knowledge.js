export function knowledgeSection(){

    // Const da seção
        
    const knowledge = document.querySelector("#knowledge")
    const level = document.querySelector("#k-level")
    const addButton = document.querySelector(".k-add")
    const removeButton = document.querySelector(".k-remove")

    // Const do currículo

    const skillList = document.querySelector(".skill-list")

    // Funções

    addButton.addEventListener("change", () => {
        skillList.appendChild(addLI())
    })

    removeButton.addEventListener("change", () => {
        skillList.removeChild(skillList.lastChild)
    })

    function addLI(){
        const kItem = document.createElement('h5')
        kItem.setAttribute('class', 'extra-data')
        kItem.innerHTML = `• ${level.value} em ${knowledge.value}`
        knowledge.value = ""
        level.value = "Nenhum conhecimento"
        return kItem
    }

}
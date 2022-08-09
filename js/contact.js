export function contactSection(){

    // Const da seção

    const firstName = document.querySelector("#name")
    const surname = document.querySelector("#surname")
    const age = document.querySelector("#age")
    const title = document.querySelector("#title")
    const phone = document.querySelector("#phone")
    const email = document.querySelector("#email")
    const adress = document.querySelector("#adress")
    const city = document.querySelector("#city")
    const cep = document.querySelector("#cep")

    // Const do currículo

    const cFirstName = document.querySelector(".first-name")
    const cSurname = document.querySelector(".surname")
    const cTitle = document.querySelector(".c-title")
    const cAge = document.querySelector(".age")
    const cPhoneNumber = document.querySelector(".phone-number")
    const cContactEmail = document.querySelector(".contact-email")
    const cID = document.querySelector(".id")

    // Funções

    document.addEventListener("keydown", function insertInfo(){
        cFirstName.textContent = firstName.value
        cSurname.textContent = surname.value
        !age.value ? cAge.textContent = "" : cAge.textContent = `${age.value} anos`
        cTitle.textContent = title.value
        const cArea = phone.value.slice(0, 2)
        const ddd = phone.value.slice(2, 4)
        const preN = phone.value.slice(4, 9)
        const sufN = phone.value.slice(-4)
        cPhoneNumber.innerHTML = `<a class="extra-data" href="https://wa.me/${phone.value}" target="_blank"><img src="./images/phone-icon.png" class="icon extra-data"></img>+${cArea} (${ddd}) ${preN} - ${sufN}</a>`
        cContactEmail.innerHTML = `<a class="extra-data" href="mailto:${email.value}" target="_blank"><img src="./images/email-icon.png" class="icon extra-data"></img>${email.value}</a>`
        cID.innerHTML = `<img src="./images/map-landmarker-icon.png" class="icon extra-data"></img>${adress.value}, ${city.value} - ${cep.value}`
        setTimeout(() => {
            insertInfo()
        }, 500)
    })

}
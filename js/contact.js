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
        cPhoneNumber.innerHTML = `<img src="./images/phone-icon.png" class="icon extra-data"></img>${phone.value}`
        cContactEmail.innerHTML = `<img src="./images/email-icon.png" class="icon extra-data"></img>${email.value}`
        cID.innerHTML = `<img src="./images/map-landmarker-icon.png" class="icon extra-data"></img>${adress.value}, ${city.value} - ${cep.value}`
        setTimeout(() => {
            insertInfo()
        }, 500)
    })

}
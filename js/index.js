// Funções importadas

import { contactSection } from "./contact.js"
import { experienceSection } from "./experience.js"
import { graduationSection } from "./graduation.js"
import { knowledgeSection } from "./knowledge.js"
import { summarySection } from "./summary.js"
import { concludeSection } from "./conclude.js"

contactSection()
experienceSection()
graduationSection()
knowledgeSection()
summarySection()
summarySection()
concludeSection()

// Seções

const main = document.querySelector(".main-section")
const presentationContainer = document.querySelector(".presentation-container")
const mainHeader = document.querySelector(".main-header")
const contact = document.querySelector(".contact")
const experience = document.querySelector(".experience")
const graduation = document.querySelector(".graduation")
const knowledge = document.querySelector(".knowledge")
const summary = document.querySelector(".summary")
const conclude = document.querySelector(".conclude")
const curriculum = document.querySelector(".curriculum")

// Header das seções

const xpHNV = document.querySelector("#xp-hnv")
const xpSNV = document.querySelector("#xp-snv")
const fHNV = document.querySelector("#f-hnv")
const fSNV = document.querySelector("#f-snv")
const kHNV = document.querySelector("#k-hnv")
const kSNV = document.querySelector("#k-snv")
const aHNV = document.querySelector("#a-hnv")
const aSNV = document.querySelector("#a-snv")
const cHNV = document.querySelector("#c-hnv")
const cSNV = document.querySelector("#c-snv")

// Botões

const presentationGoBtn = document.querySelector(".presentation-go-btn")
const contactGoBtn = document.querySelector(".contact-go-btn")
const experienceGoBtn = document.querySelector(".experience-go-btn")
const experienceBackBtn = document.querySelector(".experience-back-btn")
const graduationGoBtn = document.querySelector(".graduation-go-btn")
const graduationBackBtn = document.querySelector(".graduation-back-btn")
const knowledgeGoBtn = document.querySelector(".knowledge-go-btn")
const knowledgeBackBtn = document.querySelector(".knowledge-back-btn")
const summaryGoBtn = document.querySelector(".summary-go-btn")
const summaryBackBtn = document.querySelector(".summary-back-btn")
const concludeBackBtn = document.querySelector(".conclude-back-btn")

// Avançar para Contato

presentationGoBtn.addEventListener("click", () => {
    presentationContainer.style.display = "none"
    main.style.display = "block"
    mainHeader.style.display = "flex"
    contact.style.display = "flex"
    curriculum.style.display = "flex"
})

// Avançar para Experiência

contactGoBtn.addEventListener("click", () => {
    contact.style.display = "none"
    experience.style.display = "flex"
    xpHNV.classList.remove('non-verified-text')
    xpSNV.classList.remove("non-verified")
    xpHNV.classList.add("verified-text")
    xpSNV.classList.add("verified")
})

// Voltar para contato

experienceBackBtn.addEventListener("click", () => {
    experience.style.display = "none"
    contact.style.display = "flex"
    xpHNV.classList.remove("verified-text")
    xpSNV.classList.remove("verified")
    xpHNV.classList.add('non-verified-text')
    xpSNV.classList.add("non-verified")
})

// Avançar para Graduação

experienceGoBtn.addEventListener("click", () => {
    experience.style.display = "none"
    graduation.style.display = "flex"
    fHNV.classList.remove('non-verified-text')
    fSNV.classList.remove("non-verified")
    fHNV.classList.add("verified-text")
    fSNV.classList.add("verified")
})

// Voltar para Experiência

graduationBackBtn.addEventListener("click", () => {
    graduation.style.display = "none"
    experience.style.display = "flex"
    fHNV.classList.remove("verified-text")
    fSNV.classList.remove("verified")
    fHNV.classList.add('non-verified-text')
    fSNV.classList.add("non-verified")
})

// Avançar para Conhecimento

graduationGoBtn.addEventListener("click", () => {
    graduation.style.display = "none"
    knowledge.style.display = "flex"
    kHNV.classList.remove('non-verified-text')
    kSNV.classList.remove("non-verified")
    kHNV.classList.add("verified-text")
    kSNV.classList.add("verified")
})

// Voltar para Graduação

knowledgeBackBtn.addEventListener("click", () => {
    knowledge.style.display = "none"
    graduation.style.display = "flex"
    kHNV.classList.remove("verified-text")
    kSNV.classList.remove("verified")
    kHNV.classList.add('non-verified-text')
    kSNV.classList.add("non-verified")
})

// Avançar para Sobre

knowledgeGoBtn.addEventListener("click", () => {
    knowledge.style.display = "none"
    summary.style.display = "flex"
    aHNV.classList.remove('non-verified-text')
    aSNV.classList.remove("non-verified")
    aHNV.classList.add("verified-text")
    aSNV.classList.add("verified")
})

// Voltar para Conhecimento

summaryBackBtn.addEventListener("click", () => {
    summary.style.display = "none"
    knowledge.style.display = "flex"
    aHNV.classList.remove("verified-text")
    aSNV.classList.remove("verified")
    aHNV.classList.add('non-verified-text')
    aSNV.classList.add("non-verified")
})

// Avançar para Conclusão

summaryGoBtn.addEventListener("click", () => {
    summary.style.display = "none"
    conclude.style.display = "flex"
    cHNV.classList.remove('non-verified-text')
    cSNV.classList.remove("non-verified")
    cHNV.classList.add("verified-text")
    cSNV.classList.add("verified")
})

// Voltar para Sobre

concludeBackBtn.addEventListener("click", () => {
    conclude.style.display = "none"
    summary.style.display = "flex"
    cHNV.classList.remove("verified-text")
    cSNV.classList.remove("verified")
    cHNV.classList.add('non-verified-text')
    cSNV.classList.add("non-verified")
})
import "./SCSS/style.scss"

const AlertMessage = document.createElement("div")
AlertMessage.classList.add("alert")

const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    validationHandler()
})

const validationHandler = () => {
    const input = document.querySelector("#input") as HTMLInputElement
    if(input.value.trim() === ""){
        sendAlertMessage("Field must be filled...")
    }
}

const sendAlertMessage =(message:string) => {
    AlertMessage.innerText = message
    document.querySelector("body").append(AlertMessage)
    setTimeout(()=>AlertMessage.classList.toggle("active"),0)
    setTimeout(()=>AlertMessage.classList.toggle("active"),1000)
}

AlertMessage.addEventListener("animationend", ()=>{
    AlertMessage.remove()
})


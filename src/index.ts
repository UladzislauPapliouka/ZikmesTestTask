import "./SCSS/style.scss"
import "@fortawesome/fontawesome-free/js/all"
const alertIcon = document.createElement("i")
const checkIcon = document.createElement("i")
alertIcon.classList.add("fa-solid")
alertIcon.classList.add("fa-triangle-exclamation")
checkIcon.classList.add("fa-regular")
checkIcon.classList.add("fa-circle-check")
const AlertMessage = document.createElement("div")
AlertMessage.classList.add("alert")

const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    validationHandler()
})

const validationHandler = () => {
    const input = document.querySelector("#input") as HTMLInputElement
    if(input.value.trim() === ""){
        sendAlertMessage("Field must be filled", "error")
    } else {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title:  `USER`,
                body: input.value,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => sendAlertMessage(`${json.title} — ${json.body}`, "success"))
    }
}

const sendAlertMessage =(message:string, type: 'error' | 'success') => {
    const par = document.createElement("p")
    par.innerHTML = message
    AlertMessage.append(type === "error" ? alertIcon : checkIcon,par)
    AlertMessage.classList.add(type)
    document.querySelector("body").append(AlertMessage)
    setTimeout(()=>AlertMessage.classList.toggle("active"),0)
    setTimeout(()=>AlertMessage.classList.toggle("active"),1000)
}

AlertMessage.addEventListener("animationend", ()=>{
    AlertMessage.remove()
    AlertMessage.innerHTML =""
    AlertMessage.classList.remove('error', 'success')
})


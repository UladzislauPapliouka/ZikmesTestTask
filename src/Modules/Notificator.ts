class Notificator {
    notification = document.createElement( "div" )
    icon = document.createElement( "i" )
    paragraph = document.createElement( "p" )

    constructor() {
        this.notification.addEventListener( "animationend", () => {
            this.clearNotification()
        } )
    }

    createErrorNotification() {
        this.notification.classList.add( "alert" )
        this.notification.classList.add( "error" )
        this.icon.classList.add( "fa-solid" )
        this.icon.classList.add( "fa-triangle-exclamation" )
    }

    createSuccessNotification() {
        this.notification.classList.add( "alert" )
        this.notification.classList.add( "success" )
        this.icon.classList.add( "fa-regular" )
        this.icon.classList.add( "fa-circle-check" )
    }

    clearNotification() {
        this.notification.remove()
        this.notification.innerHTML = ''
        this.notification.className = ''
    }

    sendNotification( message: string, messageType: "error" | "success" ) {
        this.clearNotification()
        this.paragraph.innerText = message
        messageType === "error" ? this.createErrorNotification() : this.createSuccessNotification()
        this.notification.append( this.icon, this.paragraph )
        document.querySelector( 'body' ).append( this.notification )
    }
}

export default Notificator
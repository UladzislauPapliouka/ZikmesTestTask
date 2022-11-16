import "./SCSS/style.scss"
import "@fortawesome/fontawesome-free/js/all"
import Notificator from "./Modules/Notificator";

const btn = document.querySelector( "button" )
// @ts-ignore
const Notifier = new Notificator()

btn.addEventListener( "click", () => {
    validationHandler()
} )

const validationHandler = () => {
    const input = document.querySelector( "#input" ) as HTMLInputElement
    if (input.value.trim() === "") {
        Notifier.sendNotification( "Field must be filled", "error" )
    } else {
        fetch( 'https://jsonplaceholder.typicode.com/post1s', {
            method: 'POST',
            body: JSON.stringify( {
                title: `USER`,
                body: input.value,
                userId: 1,
            } ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        } )
            .then( ( response ) => {
                if (!response.ok) {
                    throw new Error("Response code isn't OK")
                }
                return response.json()
            } )
            .then( ( json ) => Notifier.sendNotification( `${ json.title } — ${ json.body }`, "success" ) )
            .catch( error => Notifier.sendNotification( error, 'error' ) )
    }
}


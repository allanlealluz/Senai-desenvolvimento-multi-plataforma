import { useRouteError } from "react-router-dom";
export default function ErrorPage(){
    const error = useRouteError();
    return(
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}
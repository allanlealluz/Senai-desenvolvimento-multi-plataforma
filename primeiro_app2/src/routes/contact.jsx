import { Form } from "react-router-dom";
export default function Contact(){
    const contact = {
        first: "Your",
        last: "Name",
        email: "Email",
        avatar: "https://robohash.org/you.png?size=200x200"
    };
    return(
        <div className="contact">
            <h1>Contact</h1>
            <div>
            <img key={contact.avatar} src={contact.avatar}></img>
            </div>
        </div>
    );

}
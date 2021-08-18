import { useState } from "react";
import emailjs from 'emailjs-com';
import "./contact.scss"

require('dotenv').config();

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);

        emailjs.sendForm(process.env.React_App_SERVICE_ID, process.env.React_App_TEMPLATE_ID, e.target, process.env.React_App_API_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="contact" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Enter your name" required={true} />
                    <input type="email" name="user_email" placeholder="Enter your email" required={true}  />
                    <textarea name="message" placeholder="Enter your message.." required={true} />
                    <button type="submit">Send</button>
                    {message && <span>Thanks! I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

import { useState } from "react";
import styl from "../app/home.module.scss"

export default function ContactForm() {
    const [buttonText, setButtonText] = useState('🕊️ Send')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        setButtonText("🚀 Sending...");

        fetch('https://script.google.com/macros/s/AKfycbx9M7nk_aHYfk-RneqemNbTyfwGsGhwvARt9dksVGo0jHglfdvjQwTSV-TVm_vGgwjB/exec', {
            method: "POST",
            body: formData
        })
            .then(res => res.text())
            .then(data => {
                if (JSON.parse(data).result === 'success') {
                    setButtonText("❤️ Message Sent");
                    setTimeout(() => {
                        setButtonText("🕊️ Send");
                    }, 3000)
                }
                // gtag_report_conversion()
            })
            .catch(() => {
                setButtonText("Form could not be submitted! Please reach out by phone/email. Sorry for the inconvinience.");
            }).finally(() => {
                form.reset();
            })
    };
    return (
        <form className={styl.ctaForm} id='lead-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input placeholder='spiderman@gmail.com' name='email' id='email' />
            <label htmlFor='message'>Message</label>
            <textarea rows={3} name='message' placeholder='Hey! I really like your projects!' />
            <button>
                <input type='submit' value={buttonText} id='lead-form-submit-button' />
            </button>
        </form>
    )
}
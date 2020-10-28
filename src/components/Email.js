import React from 'react';
import emailjs from 'emailjs-com';
import './Email.css';

export default function Email() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('Polishme', 'template_kgsny4n', e.target, 'user_KC21zlvSZFNFItcxZJiYi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    return (
        <div>
            <div className="container_email">
                <form onSubmit={sendEmail}>
                    <div className="email_send">
                        <div className="email_name">
                            <input type="text" className="form_control" placeholder="Name" name="name"></input>
                        </div>
                        <div className="email_email">
                            <input type="email" className="form_control" placeholder="Email" name="email"></input>
                        </div>
                        <div className="email_phone">
                            <input type="number" className="form_control" placeholder="Phone Number" name="phone"></input>
                        </div>
                        <div className="email_message">
                            <textarea className="form_control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div className="email_submit">
                            <input type="submit" className="email_btn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};






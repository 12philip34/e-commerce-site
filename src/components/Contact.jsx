import React, { useRef } from 'react';
import "../css/contact.css"

export default function Contact() {
    let initialValue;
    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            fullName: initialValue,
            email: initialValue,
            message: initialValue
        }
        alert("Thanks for submitting!")

    }

    return (
        <div className="home p-4">
            <div className="address">
            <p>nssienphilip@gmail.com</p>
            <p className='lead'>+2349032127081</p>
            <p>16 Uqua road, Eket,AkwaIbom State</p>
            <p className='lead'>Nigeria</p>
            
            </div>
            <div className="container">
                <div className="content">
                    <form onSubmit={handleSubmit} method="POST">
                        <div class="mb-3">
                            <label for="exampleForm" class="form-label">Full Name</label>
                            <input type="text" name="fullName" className="fullName" class="form-control" id="exampleForm" placeholder="Name:" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleForm" class="form-label">Email address</label>
                            <input type="email" id="email" name="email" className="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3" placeholder="Type your message here..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark btn-lg message">Send Message</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

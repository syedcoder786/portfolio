import React from 'react';

function ContactForm(props) {
    return (
        <div class="containerform" data-aos="fade-left" data-aos-delay="250" id="contactme">
            <center><h2>Contact Form</h2></center>
            <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Your Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Describe why you want to contact</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>  
        </div>
    );
}

export default ContactForm;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import image from '../assets/doodle.png'
import SpinText from '../SpinText'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gh7ion7', 'template_9y200fm', form.current, 'uqgxedZlQbqWny7xN')
            .then((result) => {
                console.log(result.text);
                toast.success("Message Sent");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-400">Unlocking possibilities: Reach out and let's create together!</div>
                </div>
                <div className='w-[70%]'>
                    <img src={image} alt="" className="" />
                </div>
                <div className='-mt-[180px] ml-[80px]'>
                    <SpinText />
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} novalidate="" data-aos="zoom-in" data-aos-duration="1800" className="space-y-6">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" type="text" name="user_name" placeholder="" className="w-full p-3 rounded dark:bg-gray-800 border-2 border-solid border-smallTextColor" required/>
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" name="user_email" className="w-full p-3 rounded dark:bg-gray-800 border-2 border-solid border-smallTextColor" required/>
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" name="message" className="w-full p-3 rounded dark:bg-gray-800 border-2 border-solid border-smallTextColor" required/>
                </div>
                <button type="submit" value="Send" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-headingColor hover:bg-smallTextColor text-white ">Send Message</button>
            </form>
        </div>
    )
}

'use client'
import { useState } from "react";
import {Input, Textarea, Button} from "@nextui-org/react";
import React from "react";
import { SendIcon } from "./icons";


export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);


  async function handleSubmit(event: any) {
  event.preventDefault();
  setLoading(true);

  const data = {
    name: event.target.name.value,
    email: event.target.email.value,
    subject: event.target.subject.value,
    message: event.target.message.value,
  };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      setLoading(false);
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }


    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        setLoading(false);
        // reset the form
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.subject.value = "";
        event.target.message.value = "";
      } else {
        console.log("Error sending message");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
    }

  return (
    <div className='bg-secondary py-5 px-10 mx-10 rounded-xl shadow-lg font-body w-lg'>
      <h2 className="font-bold text-lg py-4 font-title">Contact Me!</h2>
      <form onSubmit={handleSubmit}>
        <div className='py-2 w-full'>
            <Input isRequired size='md' type="text" label="Name" placeholder="Enter your name" id="name" className="min-w-max"/>
        </div>
        <div className='py-2'>
          <Input isRequired size='md' type="enail" label="Email" placeholder="Enter your email" id="email" errorMessage={emailError  && "Please enter a valid email"} className="min-w-max"/>
        </div>
        <div className='py-2'>
          <Input isRequired size='md' type="text" label="Title" placeholder="Enter a email title" id="subject" className="min-w-max"/>
        </div>
        <div className='py-2 max-h-full'>
          <Textarea
            isRequired
            label="Message"
            placeholder="Enter your message"
            className="min-w-max"
            name="message"
          />
        </div>
        <Button type="submit" className="bg-accent hover:bg-primary text-background px-5 py-2 my-2 rounded font-body min-w-max" startContent={<SendIcon/>}>
          Send Message
        </Button>
    </form>
  </div>

  );
}


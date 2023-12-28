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

      // Validación de email con expresión regular
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      setLoading(false);
      setEmailError(true);
      return; // Sale de la función si el email no es válido
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
    <div className='bg-secondary p-5 m-0-auto max-w-md min-w-md max-h-max rounded-xl shadow-lg place-self-center font-body'>
      <h2 className="font-bold text-xl py-4 font-title">Create a New Message</h2>
      <form onSubmit={handleSubmit}>
      <div className='py-2 w-full'>
        {/* <input
          placeholder="Name"
          type="text"
          name="name"
          minLength={3}
          maxLength={150}
          required
          className='border border-primary bg-background rounded px-8 py-1 font-body'
          autoComplete="off"
          id="name"
        /> */}

          <Input isRequired size='lg' type="text" label="Name" placeholder="Enter your name" id="name" className="min-w-max"/>


      </div>
      <div className='py-2'>
        {/* <input
          placeholder="Email Address"
          type="email"
          minLength={5}
          maxLength={150}
          required
          className='border border-primary bg-background rounded px-8 py-1 font-body'
          autoComplete="off"
          id="email"
        /> */}
        <Input isRequired size='lg' type="enail" label="Email" placeholder="Enter your email" id="email" errorMessage={emailError  && "Please enter a valid email"} className="min-w-max"/>
      </div>
      <div className='py-2'>
        {/* <input
          placeholder="Subject"
          type="text"
          minLength={5}
          maxLength={150}
          required
          className='border border-primary bg-background rounded px-8 py-1 font-body'
          autoComplete="off"
          id="subject"
        /> */}
        <Input isRequired size='lg' type="text" label="Subject" placeholder="Enter a email subject" id="subject" className="min-w-max"/>
      </div>
      <div className='py-2 max-h-full'>
        {/* <textarea
          placeholder="Message"
          rows={4}
          required
          minLength={10}
          maxLength={500}
          name="message"
          className='border border-primary bg-background rounded px-8 py-1 font-body'
        /> */}

        <Textarea
          isRequired
          label="Message"
          // labelPlacement="outside"
          placeholder="Enter your message"
          className="min-w-max"
          name="message"
        />
      </div>
      {/* <button
        type="submit"
        disabled={loading}
        className="bg-accent hover:bg-primary text-background px-5 py-1 rounded font-body"
      >
        Send Message
      </button> */}

      <Button type="submit" className="bg-accent hover:bg-primary text-background px-5 py-1 rounded font-body" startContent={<SendIcon/>}>
        Send Message
      </Button>
    </form>
    </div>

  );
}


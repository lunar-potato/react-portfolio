"use client";
import React, { useState } from "react";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Asking rquest for sending data to the server
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message Sent!");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12"
    >
       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-[#f5bde6]">
          Let&apos;s Connect
        </h5>
        <p className="text-[#cad3f5] mb-4 max-w-md">
        I&apos;m presently exploring new career prospects, and my email is readily accessible. Whether you have inquiries or simply want to send a greeting, I&apos;ll do my utmost to respond promptly! Feel free to email me at <span className="text-[#91d7e3] font-bold"> gwy@sukiluna.me</span> !
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="https://github.com/lunar-potato">
            <GithubIcon className="text-[#eed49f]"></GithubIcon>
          </Link>
          <Link href="https://www.linkedin.com/in/gwyneth-bautista-284053257/">
            <LinkedinIcon className="text-[#eed49f]"></LinkedinIcon>
          </Link>
          <Link href="mailto:gwy@sukiluna.me">
            <Mail className="text-[#eed49f]"></Mail>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="mt-2 text-sm text-[#a6da95]">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#f0c6c6]"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#b8c0e0] text-[#a5adcb] text-sm rounded-lg block w-full p-2.5"
                placeholder="gwy@sukiluna.me"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-[#f0c6c6]"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#b8c0e0] text-[#a5adcb] text-sm rounded-lg block w-full p-2.5"
                placeholder="Hello!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-[#f0c6c6]"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#b8c0e0] text-[#a5adcb] text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's connect!"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-[#eed49f] font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
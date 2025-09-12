"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+998) 94 125 99 77",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "otaxonovo22222@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Karaulbazar Town , B.Nakshbandiy st 12 home",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState({});

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState("success"); // 'success' | 'error'
  const [dialogMessage, setDialogMessage] = useState("");

  const BOT_TOKEN = "8280470218:AAEWVkd_iRXvaZDN2-6HbGVs4LODfv0x3mQ";
  const CHAT_ID = "6026141610";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("validating");

    const newErrors = {};
    const isValidEmail = (val) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(val);
    if (!name.trim()) newErrors.name = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(email.trim()))
      newErrors.email = "Enter a valid email";
    if (!service) newErrors.service = "Please select a service";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      setDialogType("error");
      setDialogMessage("Please correct the highlighted fields and try again.");
      setIsDialogOpen(true);
      return;
    }

    setErrors({});
    setStatus("sending");

    const text =
      `<b>📩 Portfolio Contact Form</b>\n\n` +
      `<b>👤 Name:</b> ${name || "—"} ${lastName || ""}\n` +
      `<b>📧 Email:</b> ${email || "—"}\n` +
      `<b>📞 Phone:</b> ${phone || "—"}\n` +
      `<b>🛠 Service Request:</b> ${service || "—"}\n` +
      `<b>💬 Comment:</b> ${message || "—"}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            parse_mode: "HTML",
            text,
          }),
        }
      );
      const data = await res.json();
      if (data.ok) {
        setStatus("sent");
        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");
        setDialogType("success");
        setDialogMessage(
          "Your message has been sent successfully. I will get back to you soon."
        );
        setIsDialogOpen(true);
      } else {
        console.error("Telegram error:", data);
        setStatus("error");
        setDialogType("error");
        setDialogMessage(
          "Failed to send your message. Please try again later."
        );
        setIsDialogOpen(true);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setDialogType("error");
      setDialogMessage("An unexpected error occurred. Please try again.");
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6 "
      >
        <div className="mx-auto container">
          <div className="flex flex-col xl:flex-row gap-[30px] ">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none ">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
              >
                <h3 className="text-4xl text-accent ">Let's work together</h3>
                <p className="text-white/60">
                  Tell me about your project and how I can help. Fields marked
                  as required: Firstname, Lastname, Email, Service, and Message.
                  I usually reply within 24 hours.
                </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Firstname"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "error-name" : undefined}
                      className={`${
                        errors.name
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.name && (
                      <p id="error-name" className="mt-1 text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      placeholder="Lastname"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={
                        errors.lastName ? "error-lastname" : undefined
                      }
                      className={`${
                        errors.lastName
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.lastName && (
                      <p
                        id="error-lastname"
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "error-email" : undefined
                      }
                      className={`${
                        errors.email
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.email && (
                      <p id="error-email" className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      placeholder="Phone number (optional)"
                    />
                  </div>
                </div>
                {/* select  */}
                <div>
                  <Select
                    value={service}
                    onValueChange={(val) => setService(val)}
                  >
                    <SelectTrigger
                      className={`w-full ${
                        errors.service
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                    >
                      <SelectValue placeholder="Select a service " />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="UI/UX Design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                        <SelectItem value="Other services">
                          Other services
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.service}
                    </p>
                  )}
                </div>
                {/* textarea */}
                <div>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`h-[200px] ${
                      errors.message
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                    placeholder="Type your message here."
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "error-message" : undefined
                    }
                  />
                  {errors.message && (
                    <p id="error-message" className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
                {/* button */}
                <Button
                  type="submit"
                  size="md"
                  className="max-w-40"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
              <ul className="flex flex-col gap-10 ">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6 ">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl ">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Dialog for success / error */}
      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
          <Dialog.Content className="fixed z-[60] left-1/2 top-1/2 w-[90%] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#27272c] p-6 text-white shadow-xl">
            <Dialog.Title
              className={`text-xl font-semibold ${
                dialogType === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {dialogType === "success" ? "Message Sent" : "Sending Failed"}
            </Dialog.Title>
            <Description className="mt-2 text-white/80">
              {dialogMessage}
            </Description>
            <div className="mt-6 flex justify-end">
              <Dialog.Close asChild>
                <Button variant="outline">Close</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Contact;

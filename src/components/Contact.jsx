import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
//service_1zp7xlm
//_fG8fXKGKmyoQyRR_
//template_djp1l6o
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_1zp7xlm",
        "template_djp1l6o",
        {
          from_name: user.name,
          to_name: "Shivam",
          from_email: user.email,
          to_email: "shivam8077990774@gmail.com",
          message: user.message,
        },
        "_fG8fXKGKmyoQyRR_"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you for Contact get back to you as soon as possible!");
        setUser({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(console.error(error));
  };
  return (
    <div className="xl:flex-row xl:mt-12 flex flex-col-reverse overflow-hidden gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl bg-[#011e6bb3]"
      >
        <div className="p-5 w-full">
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
        </div>
        <div className="flex flex-col w-full rounded-xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 px-8 rounded-xl"
          >
            <label>
              <span className="text-white mb-5">Name</span>
              <input
                type="text"
                placeholder="What's your name?"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="border-none py-3 px-3 outline-none rounded-xl w-full bg-[#0d2d73]"
              />
            </label>
            <label>
              <span className="text-white mb-5">EMAIL</span>
              <input
                type="email"
                placeholder="What's your email?"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="border-none py-3 px-3 outline-none rounded-xl w-full bg-[#0d2d73]"
              />
            </label>
            <label>
              <span className="text-white mb-5">Message</span>
              <textarea
                type="text"
                placeholder="What do you want to say?"
                name="message"
                value={user.message}
                onChange={handleChange}
                rows="7"
                className="border-none py-5 px-6 outline-none rounded-xl w-full bg-[#0d2d73]"
              />
            </label>
            <button className="border-none outline-none rounded-xl w-fit text-white bg-[#0d2d73] px-7 py-3">
              {loading ? "sending..." : "SEND"}
            </button>
          </form>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

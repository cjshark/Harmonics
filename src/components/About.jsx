import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaShippingFast,
  FaLock,
  FaPhone,
  FaHeadset,
  FaGuitar,
  FaMicrophoneAlt,
  FaMusic,
} from "react-icons/fa";
import {
  SiPaypal,
  SiVisa,
  SiMastercard,
  SiApplepay,
  SiGooglepay,
} from "react-icons/si";

const faqData = [
  {
    question: "What makes Harmonics unique?",
    answer:
      "We blend cutting-edge design with a passion for music to bring you premium instruments that inspire.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide with fast and reliable delivery.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Reach us anytime at support@harmonics.com or through our live chat.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and other popular payment gateways.",
  },
  {
    question: "Do you offer warranties on your products?",
    answer:
      "Absolutely! All our products come with a one-year warranty covering manufacturing defects.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, once your order is shipped, you’ll receive tracking information via email.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, Harmonics offers digital gift cards for all special occasions.",
  },
  {
    question: "Can I return a product if I'm not satisfied?",
    answer:
      "Yes, we offer a 30-day return policy for all unopened items in original condition.",
  },
  {
    question: "Do you provide beginner guides or tutorials?",
    answer:
      "Yes, we provide online resources and tutorials to help you get started with your instrument.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .2 }}
        viewport={{ once: false }}
        className="max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-red-500 mb-10 text-center"
        >
          About Harmonics
        </motion.h1>

        <div className="space-y-12">
          {[
            {
              title: "Our Mission",
              text: "To revolutionize the way people experience music by offering innovative, stylish, and high-performance instruments that resonate with your passion.",
            },
            {
              title: "Our Vision",
              text: "We envision a world where music becomes more than just sound—it's a lifestyle. Harmonics empowers every musician, from amateur to pro, with gear that performs and inspires.",
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {section.text}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li>Creativity and innovation in every product</li>
              <li>Quality and reliability you can trust</li>
              <li>Customer-first mindset with exceptional support</li>
              <li>Empowering musicians of all backgrounds</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Our Guarantees
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center text-red-400">
              {[FaShippingFast, FaLock, FaHeadset, FaPhone].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <Icon className="text-3xl" />
                  <p>
                    {
                      [
                        "Fast Shipping",
                        "Secure Payment",
                        "24/7 Support",
                        "Easy Contact",
                      ][i]
                    }
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              FAQs
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="bg-zinc-900 p-4 rounded-xl border border-red-500"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-red-400 text-lg font-semibold focus:outline-none"
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {faq.question}
                    <span>{activeIndex === index ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.p
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="mt-2 text-gray-300 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
            className="pt-10 text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Trusted Payment Partners
            </h3>
            <div className="flex justify-center items-center gap-6 text-3xl text-red-500">
              <SiPaypal />
              <SiVisa />
              <SiMastercard />
              <SiApplepay />
              <SiGooglepay />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
            className="pt-10 text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Passion for Music
            </h3>
            <div className="flex justify-center items-center gap-6 text-3xl text-red-500">
              <FaGuitar />
              <FaMicrophoneAlt />
              <FaMusic />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

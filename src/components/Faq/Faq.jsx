import React, { useState } from "react";

const faqs = [
  {
    question: "What is a refurbished product?",
    answer:
      "A refurbished product is a pre-owned item that has been tested, repaired if necessary, and restored to a fully functional condition by professionals.",
  },
  {
    question: "Why is refurbed the best place to buy refurbished products?",
    answer:
      "Refurbed offers high-quality refurbished items that are tested, certified, and come with a warranty, ensuring a safe and reliable purchase.",
  },
  {
    question:
      "How does refurbed guarantee the quality of its refurbished products?",
    answer:
      "Refurbed partners with certified refurbishers who follow strict quality guidelines and conduct thorough testing and cleaning processes.",
  },
  {
    question: "What warranty and support does refurbed offer on its products?",
    answer:
      "All products purchased on refurbed come with a minimum 12-month warranty and dedicated customer support.",
  },
  {
    question:
      "How does purchasing refurbished products benefit the environment?",
    answer:
      "Buying refurbished reduces electronic waste and conserves natural resources by extending the lifecycle of electronic devices.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-custom-bg1">
      <div className="container py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-custom-dark-text mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-custom-grey-text text-custom-dark-text pb-4">
              <button
                className="flex items-center gap-3 w-full text-left text-lg font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl">
                  {openIndex === index ? "–" : "+"}
                </span>
                <span>{faq.question}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

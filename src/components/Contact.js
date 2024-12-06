import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">Feel free to reach out via email or phone!</p>
        <p className="text-gray-800 mt-2">
          Email: <a href="mailto:sumitsjce16@gmail.com" className="text-blue-500 hover:underline">sumitsjce16@gmail.com</a>
        </p>
        <p className="text-gray-800">
          Phone: <a href="tel:+917080008970" className="text-blue-500 hover:underline">+91 7080008970</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Contact = () => {
  return (
    <section className="px-20 pb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <div className="relative flex items-end mb-8">
          <h2 className="text-2xl font-medium text-primary pl-10">contacts</h2>
          <div className="absolute bottom-2 left-[-6rem] w-[120px] h-[2px] bg-accent" />
        </div>

        <h3 className="text-primary text-5xl font-bold mb-6">
          Have a project?
        </h3>
        <h3 className="text-primary text-5xl font-bold mb-14">Let&apos;s talk.</h3>
        <button className="bg-accent hover:bg-accentDark font-medium text-primary px-4 py-2">
          Submit
        </button>
      </div>

      <form className="flex flex-col justify-end space-y-4 text-[15px] font-medium text-lightGray">
        <input
          type="text"
          placeholder="Name"
          className="pb-4 border-b border-b-darkGray bg-transparent focus:outline-none focus:border-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="pb-4 border-b border-b-darkGray bg-transparent focus:outline-none focus:border-none"
        />
        <textarea
          placeholder="Message"
          className="pb-6 border-b border-b-darkGray bg-transparent focus:outline-none focus:border-none"
        />
      </form>
    </section>
  );
};

export default Contact;

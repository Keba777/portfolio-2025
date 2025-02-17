import React from "react";

const Contact = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 pb-16 grid grid-cols-1 md:gap-8 md:grid-cols-2">
      <div>
        <div className="relative flex justify-center md:justify-normal items-end mb-4 md:mb-8">
          <h2 className="text-2xl font-medium text-primary md:pl-10">
            contacts
          </h2>
          <div className="absolute bottom-[2px] md:bottom-2 md:left-[-6rem] w-[60px] md:w-[120px] h-[2px] bg-accent" />
        </div>

        <h3 className="text-primary text-4xl text-center md:text-start md:text-5xl font-bold mb-3 md:mb-6">
          Have a project?
        </h3>
        <h3 className="text-primary text-4xl text-center md:text-start md:text-5xl font-bold  md:mb-14">
          Let&apos;s talk.
        </h3>
        <button className="invisible md:visible bg-accent hover:bg-accentDark font-medium text-primary px-4 py-2">
          Submit
        </button>
      </div>

      <form>
        <div className="flex flex-col justify-end space-y-4 text-[15px] font-medium text-lightGray mb-8 md:mb-0">
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
        </div>
        <button className="md:invisible w-full rounded-2xl bg-accent hover:bg-accentDark font-medium text-primary px-4 py-2">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

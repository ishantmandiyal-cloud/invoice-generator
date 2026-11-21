const Contact = () => {
  return (
    <div className="min-h-screen bg-emerald-950 px-6 py-16 text-white">

      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block rounded-full border border-emerald-700 bg-emerald-900 px-4 py-2 text-sm font-semibold text-emerald-300">
            Get in Touch
          </span>

          <h1 className="mt-5 text-4xl font-bold md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-emerald-200">
            Have a question or need help with InvoiceGen?
            Feel free to contact us using the information below.
          </p>

        </div>


        {/* Contact Information */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-emerald-700 bg-emerald-900 p-8 shadow-xl">

          {/* Name */}
          <div className="border-b border-emerald-800 pb-6">

            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Name
            </p>

            <p className="mt-2 text-2xl font-bold">
              Ishant
            </p>

          </div>


          {/* Email */}
          <div className="border-b border-emerald-800 py-6">

            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Email
            </p>

            <a
              href="mailto:ishantmandiyal@gmail.com"
              className="mt-2 block text-lg font-semibold text-emerald-200 transition duration-300 hover:text-emerald-400"
            >
              ishantmandiyal@gmail.com
            </a>

            <p className="mt-1 text-sm text-emerald-300">
              Click the email address to send an email.
            </p>

          </div>


          {/* Phone */}
          <div className="pt-6">

            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Phone
            </p>

            <a
              href="tel:+919015944784"
              className="mt-2 block text-lg font-semibold text-emerald-200 transition duration-300 hover:text-emerald-400"
            >
              +91 9015944784
            </a>

            <p className="mt-1 text-sm text-emerald-300">
              Contact us on Office timing only (Mon–Fri: 9:00 AM – 5:00 PM)
            </p>

          </div>

        </div>


        {/* Bottom Message */}
        <div className="mt-8 text-center">

          <p className="text-emerald-300">
            We are always happy to hear from you.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Contact;
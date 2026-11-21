import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-emerald-950 text-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">

          <span className="inline-block rounded-full border border-emerald-600 bg-emerald-900 px-4 py-2 text-sm font-semibold text-emerald-300">
            Simple. Fast. Professional.
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Everything you need to create
            <span className="block text-emerald-400">
              professional invoices
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-200">
            InvoiceGen helps you create, manage, and keep track of your
            invoices from one simple dashboard. No complicated spreadsheets,
            no unnecessary steps, and no confusing tools.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/create-invoice"
              className="cursor-pointer rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-emerald-400"
            >
              Create an Invoice
            </Link>

            <Link
              to="/my-invoices"
              className="cursor-pointer rounded-lg border border-emerald-600 bg-emerald-900 px-6 py-3 font-semibold text-emerald-200 transition duration-300 hover:bg-emerald-800"
            >
              View My Invoices
            </Link>

          </div>
        </div>
      </section>


      {/* ================= WHAT IS INVOICEGEN ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold md:text-4xl">
              What is InvoiceGen?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-emerald-200">
              InvoiceGen is a simple invoice management application designed
              to make billing faster, easier, and more organized.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-2xl border border-emerald-800 bg-emerald-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500">

              <div className="mb-5 text-4xl">
                🧾
              </div>

              <h3 className="text-xl font-bold">
                Create Invoices
              </h3>

              <p className="mt-3 leading-7 text-emerald-200">
                Enter your business details, customer information, products,
                quantities, prices, taxes, and dates to quickly prepare an
                invoice.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="rounded-2xl border border-emerald-800 bg-emerald-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500">

              <div className="mb-5 text-4xl">
                📁
              </div>

              <h3 className="text-xl font-bold">
                Manage Invoices
              </h3>

              <p className="mt-3 leading-7 text-emerald-200">
                Visit My Invoices to view previously created invoices and
                manage your billing records from one place.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="rounded-2xl border border-emerald-800 bg-emerald-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500">

              <div className="mb-5 text-4xl">
                👤
              </div>

              <h3 className="text-xl font-bold">
                Manage Your Profile
              </h3>

              <p className="mt-3 leading-7 text-emerald-200">
                Keep your personal account information organized and use your
                account to manage your invoices.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="border-y border-emerald-900 bg-emerald-950 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <h2 className="text-3xl font-bold md:text-4xl">
              How InvoiceGen Works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-emerald-200">
              Creating an invoice is only a few simple steps.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {/* STEP 1 */}
            <div className="relative rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                1
              </div>

              <h3 className="text-xl font-bold">
                Login
              </h3>

              <p className="mt-3 text-emerald-200">
                Sign in to your account before creating or managing your
                invoices.
              </p>

            </div>


            {/* STEP 2 */}
            <div className="relative rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                2
              </div>

              <h3 className="text-xl font-bold">
                Create
              </h3>

              <p className="mt-3 text-emerald-200">
                Open the Create Invoice page and enter all the required
                invoice information.
              </p>

            </div>


            {/* STEP 3 */}
            <div className="relative rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                3
              </div>

              <h3 className="text-xl font-bold">
                Review
              </h3>

              <p className="mt-3 text-emerald-200">
                Check the customer details, items, quantities, prices, taxes,
                and final total before saving your invoice.
              </p>

            </div>


            {/* STEP 4 */}
            <div className="relative rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                4
              </div>

              <h3 className="text-xl font-bold">
                Manage
              </h3>

              <p className="mt-3 text-emerald-200">
                Open My Invoices whenever you want to view and manage your
                saved invoices.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CREATE INVOICE TUTORIAL ================= */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Step-by-step guide
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              How to Create an Invoice
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-emerald-200">
              Follow these steps to create a complete invoice using
              InvoiceGen.
            </p>

          </div>


          <div className="mt-12 space-y-6">

            {/* GUIDE 1 */}
            <div className="flex gap-5 rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-bold">
                01
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Open Create Invoice
                </h3>

                <p className="mt-2 leading-7 text-emerald-200">
                  Navigate to the Create Invoice page from the navigation bar
                  or click the Create an Invoice button on the home page.
                </p>

              </div>

            </div>


            {/* GUIDE 2 */}
            <div className="flex gap-5 rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-bold">
                02
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Enter Invoice Information
                </h3>

                <p className="mt-2 leading-7 text-emerald-200">
                  Enter the invoice number, invoice date, and due date. These
                  details help identify and organize your invoice.
                </p>

              </div>

            </div>


            {/* GUIDE 3 */}
            <div className="flex gap-5 rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-bold">
                03
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Add Your Business Information
                </h3>

                <p className="mt-2 leading-7 text-emerald-200">
                  In the From section, enter your name, email address, and
                  business or address information.
                </p>

              </div>

            </div>


            {/* GUIDE 4 */}
            <div className="flex gap-5 rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-bold">
                04
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Add Customer Information
                </h3>

                <p className="mt-2 leading-7 text-emerald-200">
                  Use the Bill To section to enter the customer's name or
                  business, email address, and billing address.
                </p>

              </div>

            </div>


            {/* GUIDE 5 */}
            <div className="flex gap-5 rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-bold">
                05
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Add Invoice Items
                </h3>

                <p className="mt-2 leading-7 text-emerald-200">
                  Add each product or service as an item. Enter the
                  description, quantity, and price. Add more rows whenever
                  necessary.
                </p>

              </div>

            </div>


            {/* GUIDE 6 */}
            <div className="flex gap-5 rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-bold">
                06
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Check Tax and Total
                </h3>

                <p className="mt-2 leading-7 text-emerald-200">
                  Review the subtotal, enter the applicable tax, and check
                  that the final amount is correct before saving the invoice.
                </p>

              </div>

            </div>


            {/* GUIDE 7 */}
            <div className="flex gap-5 rounded-2xl border border-emerald-800 bg-emerald-900 p-6">

              <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-bold">
                07
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Save and Manage
                </h3>

                <p className="mt-2 leading-7 text-emerald-200">
                  Once everything looks correct, save the invoice and use
                  the My Invoices section to manage your saved records.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= OTHER PAGES ================= */}
      <section className="bg-emerald-900/40 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              Explore InvoiceGen
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-emerald-200">
              Each section of the application has a specific purpose.
            </p>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* CREATE */}
            <Link
              to="/create-invoice"
              className="group rounded-2xl border border-emerald-800 bg-emerald-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500"
            >

              <div className="text-3xl">
                🧾
              </div>

              <h3 className="mt-4 text-lg font-bold group-hover:text-emerald-400">
                Create Invoice
              </h3>

              <p className="mt-2 text-sm leading-6 text-emerald-200">
                Build a complete invoice using your customer and item
                information.
              </p>

            </Link>


            {/* MY INVOICES */}
            <Link
              to="/my-invoices"
              className="group rounded-2xl border border-emerald-800 bg-emerald-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500"
            >

              <div className="text-3xl">
                📂
              </div>

              <h3 className="mt-4 text-lg font-bold group-hover:text-emerald-400">
                My Invoices
              </h3>

              <p className="mt-2 text-sm leading-6 text-emerald-200">
                View and manage invoices that you have previously created.
              </p>

            </Link>


            {/* PROFILE */}
            <Link
              to="/profile"
              className="group rounded-2xl border border-emerald-800 bg-emerald-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500"
            >

              <div className="text-3xl">
                👤
              </div>

              <h3 className="mt-4 text-lg font-bold group-hover:text-emerald-400">
                Profile
              </h3>

              <p className="mt-2 text-sm leading-6 text-emerald-200">
                Manage your account and personal profile information.
              </p>

            </Link>


            {/* CONTACT */}
            <Link
              to="/contact-us"
              className="group rounded-2xl border border-emerald-800 bg-emerald-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500"
            >

              <div className="text-3xl">
                ✉️
              </div>

              <h3 className="mt-4 text-lg font-bold group-hover:text-emerald-400">
                Contact Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-emerald-200">
                Get help or send us your questions and feedback.
              </p>

            </Link>

          </div>

        </div>

      </section>


      {/* ================= TIPS ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto max-w-4xl rounded-2xl border border-emerald-700 bg-emerald-900 p-8">

          <h2 className="text-2xl font-bold">
            Useful Invoice Tips
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex gap-3">
              <span className="text-emerald-400">✓</span>
              <p className="text-emerald-200">
                Always verify your customer's name, email, and address before
                saving an invoice.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-emerald-400">✓</span>
              <p className="text-emerald-200">
                Make sure item quantity and price are correct so your totals
                are accurate.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-emerald-400">✓</span>
              <p className="text-emerald-200">
                Always check the invoice date, due date, tax, and final total
                before completing an invoice.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-emerald-400">✓</span>
              <p className="text-emerald-200">
                Use My Invoices to keep your previously created invoices
                organized.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-20 pt-4">

        <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-700 bg-gradient-to from-emerald-900 to-teal-900 p-10 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to create your first invoice?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-emerald-200">
            Start creating clean, professional invoices in just a few
            minutes.
          </p>

          <Link
            to="/create-invoice"
            className="mt-8 inline-block cursor-pointer rounded-lg bg-emerald-500 px-7 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-emerald-400"
          >
            Create Your Invoice
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;
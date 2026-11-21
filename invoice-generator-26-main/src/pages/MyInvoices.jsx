import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyInvoices() {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    const savedInvoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    setInvoices(savedInvoices);
  }, []);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const usedEmail = loggedInUser.email;
  console.log(usedEmail);
  

  const handleDelete = (id) => {
    const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    const updatedInvoices = invoices.filter((invoice) => invoice.id !== id);
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    setInvoices(updatedInvoices);
  };
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">My Invoices</h1>
        <Link
          to="/create-invoice"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          + New Invoice
        </Link>
      </div>

      {/* {loading && <p className="text-emerald-300">Loading invoices...</p>}
      {error && <p className="text-red-300">{error}</p>} */}

      {invoices.length === 0 && (
        <div className="bg-emerald-900/40 border border-emerald-800 rounded-xl p-10 text-center">
          <p className="text-emerald-200 mb-4">
            You haven't created any invoices yet.
          </p>
          <Link
            to="/create-invoice"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-md font-medium transition-colors"
          >
            Create your first invoice
          </Link>
        </div>
      )}

      {invoices.length > 0 && (
        <div className="bg-emerald-900/40 border border-emerald-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-emerald-400 uppercase text-xs border-b border-emerald-800">
                <th className="px-4 py-3">Invoice #</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Billed To</th>
                <th className="px-4 py-3">Grand Total</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices
                .filter((inv) => inv.usedEmail == usedEmail)
                .map((inv) => (
                  <tr
                    key={inv.id}
                    className="border-b border-emerald-800/60 last:border-0"
                  >
                    <td className="px-4 py-3 text-white font-medium">
                      {inv.invoiceNumber}
                    </td>
                    <td className="px-4 py-3 text-emerald-200">
                      {inv.invoiceDate}
                    </td>
                    <td className="px-4 py-3 text-emerald-200">
                      {inv.toName || "—"}
                    </td>
                    <td className="px-4 py-3 text-emerald-100 font-semibold">
                      {inv.grandTotal?.toFixed
                        ? inv.grandTotal.toFixed(2)
                        : inv.grandTotal}
                    </td>
                    <td className="px-4 py-3 text-right space-x-3">
                      <Link
                        to={`/invoices/${inv.id}`}
                        className="text-emerald-400 hover:text-emerald-300 font-medium"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(inv.id)}
                        // disabled={deletingId === inv.id}
                        className="text-red-400 hover:text-red-300 font-medium disabled:opacity-50"
                      >
                        {/* {deletingId === inv.id ? "Deleting..." : "Delete"} */}
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

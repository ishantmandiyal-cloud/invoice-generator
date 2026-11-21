import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function InvoiceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    const selectedInvoice = invoices.find((item) => item.id === id);
    setInvoice(selectedInvoice || null);
  }, [id]);
  
   const handleDelete = (id) => {
    const invoices = JSON.parse(localStorage.getItem("invoices"))
    const updatedInvoice = invoices.filter((invoice) => invoice.id !==id )
    localStorage.setItem("invoices", JSON.stringify(updatedInvoice));
    alert("This is invoice is Deleted Successfully");
    navigate("/my-invoices");
  }
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-6 print:hidden">
        <Link
          to="/my-invoices"
          className="text-emerald-400 hover:underline text-sm"
        >
          ← Back to My Invoices
        </Link>
        <div className="space-x-3">
          <button
            onClick={() => window.print()}
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Print
          </button>
          <button 
          className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          onClick={() => handleDelete(invoice.id)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Header */}
      {invoice === null ? (
        <h1> No invoices can be read, Return back to the my invoices page NOW ! </h1>
      ) : (
        <div className=" invoice-paper bg-emerald-900/40 border border-emerald-800 rounded-xl p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white">INVOICE</h1>
              <p className="text-emerald-300">{invoice.invoiceNumber}</p>
            </div>
            <div className="text-right text-sm text-emerald-200">
              <p>Invoice Date: {invoice.invoiceDate}</p>
              {invoice.dueDate && <p>Due Date: {invoice.dueDate}</p>}
            </div>
          </div>

          {/* From / To */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-emerald-400 text-xs uppercase font-semibold mb-1">
                From
              </h2>
              <p className="text-white font-medium">{invoice.fromName}</p>
              <p className="text-emerald-200 text-sm">{invoice.fromEmail}</p>
              <p className="text-emerald-200 text-sm whitespace-pre-line">
                {invoice.fromAddress}
              </p>
            </div>
            <div>
              <h2 className="text-emerald-400 text-xs uppercase font-semibold mb-1">
                Bill To
              </h2>
              <p className="text-white font-medium">{invoice.toName}</p>
              <p className="text-emerald-200 text-sm">{invoice.toEmail}</p>
              <p className="text-emerald-200 text-sm whitespace-pre-line">
                {invoice.toAddress}
              </p>
            </div>
          </div>

          {/* Items table */}
          <table className="w-full text-sm mb-6">
            <thead>
              <tr className="text-left text-emerald-400 uppercase text-xs border-b border-emerald-800">
                <th className="py-2">Description</th>
                <th className="py-2 text-right">Qty</th>
                <th className="py-2 text-right">Price</th>
                <th className="py-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={index} className="border-b border-emerald-800/60">
                  <td className="py-2 text-emerald-100">{item.description}</td>
                  <td className="py-2 text-right text-emerald-100">
                    {item.quantity}
                  </td>
                  <td className="py-2 text-right text-emerald-100">
                    {Number(item.price).toFixed(2)}
                  </td>
                  <td className="py-2 text-right text-emerald-100">
                    {(Number(item.quantity) * Number(item.price)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-full sm:w-64 space-y-2 text-sm">
              <div className="flex justify-between text-emerald-200">
                <span>Subtotal</span>
                <span>{invoice.subTotal?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-emerald-200">
                <span>Tax ({invoice.taxPercent}%)</span>
                <span>{invoice.taxAmount?.toFixed(2)}</span>
              </div>
              <div className="border-t border-emerald-700 pt-2 flex justify-between text-white text-lg font-bold">
                <span>Grand Total</span>
                <span>{invoice.grandTotal?.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

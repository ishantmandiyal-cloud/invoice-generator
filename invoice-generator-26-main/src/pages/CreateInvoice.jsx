import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const emptyItem = { description: "", quantity: 1, price: 0 };
const CreateInvoice = () => {
  const navigate = useNavigate();
  function generateInvoiceNumber() {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `INV-${random}`;
  }
  const [invoiceNumber, setInvoiceNumber] = useState(generateInvoiceNumber());
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().slice(0, 10),
  );
  const [dueDate, setDueDate] = useState("");

  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromAddress, setFromAddress] = useState("");

  const [toName, setToName] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [toAddress, setToAddress] = useState("");

  const [items, setItems] = useState([{ ...emptyItem }]);
  const [taxPercent, setTaxPercent] = useState(0);
  const itemAmount = (item) => {
    const qty = Number(item.quantity);
    const price = Number(item.price);
    return qty * price;
  };

  const subTotal = items.reduce((sum, item) => sum + itemAmount(item), 0);
  const taxAmount = (subTotal * (Number(taxPercent) || 0)) / 100;
  const grandTotal = subTotal + taxAmount;

  const updateItem = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };
  const handleAddItems = () => {
    setItems([...items, { ...emptyItem }]);
  };
  const handleRemoveItems = (index) => {
    if (index === 0) {
      return;
    }
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSaveInvoice = (e) => {
    e.preventDefault();
    if (fromName === null) {
      alert("Enter From name to proceed");
    } 
    else if(fromEmail === null) {
      alert("Fill all details to proceed")
    }
    else if(fromAddress === null) {
      alert("Fill all details to proceed")
    }
    else if(toName === null) {
      alert("Fill all details to proceed")
    }
    else if(toEmail === null) {
      alert("Fill all details to proceed")
    }
    else if(toAddress === null) {
      alert("Fill all details to proceed")
    }
    else if(items.description === null) {
      alert("Fill all details to proceed")
    }
    else if(items.quantity === 0) {
      alert("Fill all details to proceed")
    }
    else if(items.price === 0) {
      alert("Fill all details to proceed")
    }
    else if(grandTotal === 0) {
      alert("Fill all details to proceed")
    }else if(dueDate == "") {
      alert("Fill all details to proceed")
    }
    else {
      const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      const usedEmail = loggedInUser.email
      const invoice = {
        id: crypto.randomUUID(),
        invoiceNumber: invoiceNumber.trim(),
        invoiceDate,
        dueDate,
        fromName,
        fromEmail,
        fromAddress,
        toName,
        toEmail,
        toAddress,
        items: items.map((item) => ({
          ...item,
          quantity: Number(item.quantity),
          price: Number(item.price),
        })),
        taxPercent: Number(taxPercent) || 0,
        subTotal,
        taxAmount,
        grandTotal,
        usedEmail,
      };
      localStorage.setItem("invoices", JSON.stringify([...invoices, invoice]));
      alert("Invoice saved successfully!");
      navigate("/my-invoices");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-7 mt-8">
        <h1 className="font-bold text-xl"> Create Invoice </h1>
        {/* Invoice details */}
        <div className="invoice-detals flex justify-around items-center border rounded-xl w-4xl h-23 bg-emerald-900">
          <div className="flex-col">
            {/* <label htmlFor="invoiceNumber"> Invoice number </label> */}
            <h5 className="text-emerald-500"> Invoice Number </h5>
            <input
              type="text"
              name="invoiceNumber"
              value={invoiceNumber}
              placeholder="eg. INV-4401"
              onChange={(e) => setInvoiceNumber(event.target.value)}
              className="w-full bg-emerald-950 border border-emerald-700 rounded-md p-1.5  text-white focus:outline-none focus:border-emerald-300"
            />
          </div>
          <div className="flex-col">
            {/* <label htmlFor="invoiceDate"> invoiceDate </label> */}
            <h5 className="text-emerald-500"> Invoice Date </h5>
            <input
              type="date"
              name="invoiceDate"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(event.target.value)}
              className="w-55 bg-emerald-950 border border-emerald-700 rounded-md p-1.5 text-white"
            />
          </div>
          <div className="flex-col">
            {/* <label htmlFor="dueDate"> dueDate </label> */}
            <h5 className="text-emerald-500"> Due Date </h5>
            <input
              type="date"
              name="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(event.target.value)}
              className="w-55 bg-emerald-950 border border-emerald-700 p-1.5 rounded-md  text-white"
            />
          </div>
        </div>
        {/* Client and your details */}
        <div className="flex h-55 w-4xl gap-4">
          {/* From conatiner */}
          <div className="from-details flex flex-col justify-around p-5 border rounded-xl h-55 w-1/2 bg-emerald-900">
            <h1 className="font-bold text-xl text-emerald-500"> From </h1>
            <input
              type="text"
              placeholder="enter full name"
              name="fromName"
              value={fromName}
              onChange={(e) => setFromName(event.target.value)}
              required
              className="w-50 bg-emerald-950 border border-emerald-700 rounded-md p-1.5 text-white focus:outline-none focus:border-emerald-300"
            />
            <input
              type="email"
              placeholder="enter email"
              name="fromEmail"
              value={fromEmail}
              onChange={(e) => setFromEmail(event.target.value)}
              className="w-50 bg-emerald-950 border border-emerald-700 rounded-md p-1.5 text-white focus:outline-none focus:border-emerald-300"
            />
            <textarea
              name="fromAddress"
              id="fromAddress"
              value={fromAddress}
              className=" w-80 bg-emerald-950 p-1.5 rounded-md"
              placeholder="your address"
              onChange={(e) => setFromAddress(event.target.value)}
            ></textarea>
          </div>
          {/* to container */}
          <div className="to-details flex flex-col justify-around p-5  border rounded-xl h-55 w-1/2 bg-emerald-900">
            <h1 className="font-bold text-xl text-emerald-500"> Bill To </h1>
            <input
              type="text"
              placeholder="client name / bussiness"
              name="toName"
              value={toName}
              onChange={(e) => setToName(event.target.value)}
              className="w-50 bg-emerald-950 border border-emerald-700 rounded-md p-1.5 text-white focus:outline-none focus:border-emerald-300"
            />
            <input
              type="email"
              placeholder="client email"
              name="toEmail"
              value={toEmail}
              onChange={(e) => setToEmail(event.target.value)}
              className="w-50 bg-emerald-950 border border-emerald-700 rounded-md p-1.5 text-white focus:outline-none focus:border-emerald-300"
            />
            <textarea
              name="toAddress"
              id="toAddress"
              onChange={(e) => setToAddress(event.target.value)}
              value={toAddress}
              className=" w-80 bg-emerald-950 p-1.5 rounded-md"
              placeholder="client address"
            ></textarea>
          </div>
        </div>
        {/* Items details */}
        <div className="item-detals flex flex-col justify-evenly border rounded-xl w-4xl  bg-emerald-900">
          <h5 className=" font-bold text-xl text-emerald-200 ml-6 mt-3">
            {" "}
            Items{" "}
          </h5>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-around items-center rounded-xl w-full h-23 bg-emerald-900"
            >
              <div className="flex-col">
                <h5 className="text-emerald-500"> DESCRIPTION </h5>
                <input
                  type="text"
                  name="itemDescription"
                  value={item.description}
                  onChange={(e) =>
                    updateItem(index, "description", e.target.value)
                  }
                  className="w-full bg-emerald-950 border border-emerald-700 rounded-md p-1.5 text-white focus:outline-none focus:border-emerald-300"
                />
              </div>
              <div className="flex-col">
                <h5 className="text-emerald-500"> Quantity </h5>
                <input
                  type="number"
                  name="itemQuantity"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItem(index, "quantity", e.target.value)
                  }
                  className="w-55 bg-emerald-950 border border-emerald-700 rounded-md p-1.5 text-white"
                />
              </div>
              <div className="flex-col">
                <h5 className="text-emerald-500"> Price </h5>
                <input
                  type="number"
                  name="itemPrice"
                  value={item.price}
                  onChange={(e) => updateItem(index, "price", e.target.value)}
                  className="w-55 bg-emerald-950 border border-emerald-700 rounded-md p-1.5 text-white"
                />
              </div>
              <div className="flex-col">
                <h5 className="text-emerald-500">Item Amount</h5>
                <p> {itemAmount(item).toFixed(2)} </p>
              </div>
              <button
                className="text-red-500"
                onClick={() => handleRemoveItems(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            className="text-emerald-500 ml-6 mb-3"
            onClick={handleAddItems}
          >
            {" "}
            + Add Items{" "}
          </button>
        </div>
        {/* Grand total */}
        <div className="bg-emerald-900 border border-emerald-800 rounded-xl p-6">
          <div className="flex justify-end">
            <div className="w-full sm:w-72 space-y-3">
              <div className="flex justify-between items-center text-emerald-200 text-sm">
                <span>Subtotal</span>
                <span> {subTotal.toFixed(2)} </span>
              </div>
              <div className="flex justify-between items-center text-emerald-200 text-sm">
                <span>Tax (%)</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={taxPercent}
                  onChange={(e) => setTaxPercent(e.target.value)}
                  className="w-20 bg-emerald-950 border border-emerald-700 rounded-md px-2 py-1 text-white text-right focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="flex justify-between items-center text-emerald-200 text-sm">
                <span>Tax Amount</span>
                <span> {taxAmount.toFixed(2)} </span>
              </div>
              <div className="border-t border-emerald-700 pt-3 flex justify-between items-center text-white text-lg font-bold">
                <span>Grand Total</span>
                <span> {grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleSaveInvoice}
          type="submit"
          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white px-8 py-3 rounded-md font-medium transition-colors"
        >
          {" "}
          Save Invoice{" "}
        </button>
      </div>
    </div>
  );
};
export default CreateInvoice;

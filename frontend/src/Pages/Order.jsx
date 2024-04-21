import React, { useState } from "react";

const Order = () => {
  const [order, setOrder] = useState({
    coffeeType: "",
    quantity: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the order to the backend or process the payment
    console.log("Order submitted:", order);
    alert(
      `Your order for ${order.quantity} ${order.coffeeType} coffee(s) has been placed.`
    );
    setOrder({ coffeeType: "", quantity: 1 }); // Reset order form
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Order Your Coffee</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-6">
          <label
            htmlFor="coffeeType"
            className="block text-sm font-medium text-gray-700"
          >
            Coffee Type
          </label>
          <select
            id="coffeeType"
            name="coffeeType"
            value={order.coffeeType}
            onChange={handleInputChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select a coffee</option>
            <option value="Espresso">Espresso</option>
            <option value="Latte">Latte</option>
            <option value="Cappuccino">Cappuccino</option>
            <option value="Americano">Americano</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={order.quantity}
            onChange={handleInputChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Order;

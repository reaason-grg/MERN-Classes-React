import React from "react";
import { useSearchParams, Link } from "react-router-dom";

const Success = () => {
  const [search] = useSearchParams();
  const encoded = search.get("data");

  if (!encoded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-xl font-semibold text-red-500">
          Invalid Payment Response
        </h1>
      </div>
    );
  }

  const res = JSON.parse(atob(encoded));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
          <span className="text-4xl text-green-600">✓</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Payment Successful
        </h1>

        <p className="text-gray-500 mb-6">
          Your transaction has been completed successfully.
        </p>

        {/* Details Card */}
        <div className="bg-gray-50 rounded-2xl p-4 text-left space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-500">Transaction Code</span>
            <span className="font-medium">{res.transaction_code}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Amount</span>
            <span className="font-medium">Rs {res.total_amount}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="font-medium text-green-600">{res.status}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Transaction ID</span>
            <span className="font-medium text-xs break-all">
              {res.transaction_uuid}
            </span>
          </div>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="block w-full bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-xl"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
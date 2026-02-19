import React from "react";
import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

const Payment = () => {
  const location = useLocation();
  const totalAmount = location?.state || 0;

  const transaction_uuid = uuidv4();

  const Message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-600">
            eSewa Payment
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Complete your secure payment
          </p>
        </div>

        {/* Amount Display */}
        <div className="bg-green-50 rounded-2xl p-4 mb-6 text-center">
          <p className="text-gray-500 text-sm">Total Amount</p>
          <h2 className="text-3xl font-bold text-green-600">
            Rs {totalAmount}
          </h2>
        </div>

        {/* Payment Form */}
        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
          className="space-y-4"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="amount" value={totalAmount} />
          <input type="hidden" name="tax_amount" value={0} />
          <input type="hidden" name="total_amount" value={totalAmount} />
          <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
          <input type="hidden" name="product_code" value="EPAYTEST" />
          <input type="hidden" name="product_service_charge" value={0} />
          <input type="hidden" name="product_delivery_charge" value={0} />
          <input
            type="hidden"
            name="success_url"
            value="http://localhost:5173/success"
          />
          <input
            type="hidden"
            name="failure_url"
            value="http://localhost:5173/failure"
          />
          <input
            type="hidden"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
          />
          <input type="hidden" name="signature" value={signature} />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-xl"
          >
            Pay with eSewa
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
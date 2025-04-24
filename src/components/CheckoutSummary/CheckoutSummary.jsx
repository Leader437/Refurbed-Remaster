import { FaShieldAlt } from 'react-icons/fa'
import { BiPackage } from 'react-icons/bi'
import { TbRefresh } from 'react-icons/tb'

const CheckoutSummary = ({data}) => {
    let totalItems = data.reduce((acc,item) => acc + item.quantity, 0);
    let totalPrice = data.reduce((acc,item) => acc + item.currentPrice * item.quantity, 0).toFixed(2);

  return (
    <div className="w-full max-h-fit p-4 rounded-xl shadow-lg bg-white text-gray-800">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>

      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex justify-between text-sm font-semibold mb-1">
          <span>{totalItems} Items</span>
          <span>€{totalPrice}</span>
        </div>
        <div className="flex justify-between text-sm text-emerald-700 font-semibold">
          <span>Shipping</span>
          <span>included</span>
        </div>

        <hr className="my-2 border-gray-200" />

        <div className="flex justify-between text-lg font-bold text-emerald-800">
          <span>Total</span>
          <span>€{totalPrice}</span>
        </div>

        <p className="text-sm text-gray-500 mt-1">Price includes VAT.</p>
      </div>

      <div className="mt-4">
        <p className="text-sm underline font-semibold cursor-pointer hover:text-emerald-700">
          Do you have a voucher code?
        </p>
      </div>

      <div className="mt-4 space-y-3 text-sm text-gray-800 font-medium">
        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-emerald-700 text-lg" />
          Min. 12 month warranty
        </div>
        <div className="flex items-center gap-2">
          <BiPackage className="text-emerald-700 text-lg" />
          Free return shipping
        </div>
        <div className="flex items-center gap-2">
          <TbRefresh className="text-emerald-700 text-lg" />
          30 day return policy
        </div>
      </div>

      <button className="mt-6 w-full bg-custom-pri-light text-white font-semibold py-3 rounded-lg hover:bg-custom-pri transition duration-200">
        Continue
      </button>
    </div>
  )
}

export default CheckoutSummary

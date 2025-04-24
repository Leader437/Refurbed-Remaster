import { FaMinus, FaPlus } from "react-icons/fa";
import { setCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartItem({ items }) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);

  const increaseQty = (id) => {
    const updatedCart = cartData.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(setCart(updatedCart));
  };

  const decreaseQty = (id) => {
    const updatedCart = cartData
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    dispatch(setCart(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    dispatch(setCart(updatedCart));
  };

  return (
    <div className="min-w-full w-full md:min-w-fit">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
          <div className="flex-1 md:flex md:flex-col md:items-start md:ml-4 ">
            <h2 className="text-sm md:text-lg font-semibold">{item.name}</h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Color: {item.color}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <button
              className="p-2 border rounded-full hover:bg-gray-100"
              onClick={() => decreaseQty(item.id)}
            >
              <FaMinus />
            </button>
            <span className="text-sm md:text-base font-medium">{item.quantity}</span>
            <button
              className="p-2 border rounded-full hover:bg-gray-100"
              onClick={() => increaseQty(item.id)}
            >
              <FaPlus size={14} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-between sm:ml-4 sm:self-stretch mt-4 sm:mt-0">
            <p className="text-lg font-semibold">€{(item.quantity * item.currentPrice).toFixed(2)}</p>
            <button
              className="text-sm text-green-700 underline hover:text-green-900 mt-2 sm:mt-auto"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

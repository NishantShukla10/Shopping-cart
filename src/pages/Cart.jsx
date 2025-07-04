import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="w-full px-4 md:px-8 py-6">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-12">
          
          {/* Left: Items */}
          <div className="flex flex-col gap-6 flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right: Summary */}
          <div className="flex flex-col gap-12 lg:sticky top-20 h-fit lg:w-[300px] w-full">
            <div>
              <h2 className="text-green-600 font-semibold text-xl">Your Cart</h2>
              <h1 className="text-green-600 font-bold text-3xl">Summary</h1>
              <p className="mt-4">
                <span className="font-semibold">Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>
                Total Amount: <span className="font-bold"> ${totalAmount.toFixed(2)}</span>
              </p>
              <button className="w-full bg-green-600 px-6 py-3 text-white rounded-md border-2 duration-200 border-green-600 hover:bg-white hover:text-black mt-4">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[70vh]">
          <h1 className="text-xl font-semibold">Cart is Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-600 px-10 py-2 text-white rounded-md border-2 duration-200 border-green-600 hover:bg-white mt-3 hover:text-black">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

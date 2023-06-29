import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex justify-between items-center max-w-6xl mx-auto relative">


      <div >
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col gap-72 fixed top-[10rem] right-[15rem]" >

        <div >
          <div className="text-green-600 font-semibold ">Your Cart</div>
          <div className="text-green-600 font-bold text-3xl ">Summary</div>
          <p className="mt-4">
            <span className="font-semibold ">Total Items: {cart.length}</span>
          </p>
        </div>

        <div >
          <p>Total Amount: <span className="font-bold"> ${totalAmount}</span></p>
          <button className="bg-green-600 px-32 py-3 text-white rounded-md border-2 duration-200 border-green-600 hover:bg-white mt-3 hover:text-black">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center h-[89vh] ">
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 px-10 py-2 text-white rounded-md border-2 duration-200 border-green-600 hover:bg-white mt-3 hover:text-black">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;

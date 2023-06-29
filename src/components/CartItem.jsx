
import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="" >

      <div className="flex  gap-3  mt-8">

        <div className="h-[180px] w-[140px]  " >
          <img src={item.image} className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-4 w-[23rem] ml-6">
          <h1 className="font-bold text-lg opacity-80">{item.title} </h1>
          <h1 className="text-sm opacity-75"
          >{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          <div className="flex justify-evenly">
            <p className=" text-green-600 font-semibold items-center w-full mt-5 ">${item.price}</p>
            <div className="bg-red-300 h-[35px] w-[40px]  grid place-content-center rounded-[50%] cursor-pointer mt-3"
            onClick={removeFromCart}>
              <MdDelete/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[1px] bg-black mt-4"></div>

    </div>
  );
};

export default CartItem;

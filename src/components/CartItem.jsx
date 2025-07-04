import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="border-b pb-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image */}
        <div className="h-[180px] w-full md:w-[140px] flex-shrink-0">
          <img src={item.image} className="h-full w-full object-contain" alt={item.title} />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between w-full">
          <div>
            <h1 className="font-bold text-lg opacity-90">{item.title}</h1>
            <p className="text-sm opacity-75 mt-1">
              {item.description.split(" ").slice(0, 15).join(" ") + "..."}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-green-600 font-semibold text-lg">${item.price}</p>
            <button
              className="bg-red-300 p-2 rounded-full hover:bg-red-400"
              onClick={removeFromCart}
              aria-label="Remove Item"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
const CartItem = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, image, price, amount } = item;
  const { removeCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div className="flex flex-col-3 gap-x-4 py-2 lg:px-0 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="flex flex-1 place-content-start">
        <div className="w-full min-h-[150px] overflow-x-hidden flex items-center gap-x-4">
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt="" />
          </Link>
        </div>
      </div>
      <div className=" flex w-full justify-start items-center">
        <div className=" w-full flex flex-col">
          <div className="flex justify-between items-center mb-2 px-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[200px] md:max-w-[180px] text-primary hover:underline transition duration-300"
            >
              {title}
            </Link>
            <div
              onClick={() => removeCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose
                onClick={() => removeCart(id)}
                className="text-gray-500 hover:text-red-500 transition duration-300"
              />
            </div>
          </div>
          <div className=" flex justify-center items-center gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] justify-center items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="flex-1 h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 justify-around items-center">
              $ {price}
            </div>
            <div className="flex flex-1 justify-end text-primary font-medium items-center">
              $ {parseFloat(price * amount)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

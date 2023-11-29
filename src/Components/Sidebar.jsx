import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../Components/CartItem";
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[30vw] xl:max-w-[25vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-2 my-4 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursore-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="uppercase text-sm text-gray-700 tracking-wider">
        Cart Items
      </div>
      <div className="flex flex-col gap-y-2 h-[560px] lg:h-[560px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="grid col-span-3 gap-y-3 py-3">
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold uppercase text-sm tracking-wider text-gray-700">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <Link
            to={"/"}
            className="text-gray-200 bg-slate-800 w-full text-center py-2 uppercase hover:bg-slate-700 transition-all duration-200 cursor-pointer"
          >
            add to cart
          </Link>
          <Link
            to={"/"}
            className=" hover:text-white hover:bg-red-500 w-full text-center py-2 uppercase bg-white  text-primary border border-black transition-all duration-300 cursor-pointer"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

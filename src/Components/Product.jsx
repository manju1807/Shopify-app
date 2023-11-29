import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  const { addCart } = useContext(CartContext);
  // eslint-disable-next-line react/prop-types
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="w-[200px] mx-auto flex items-center justify-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </motion.div>
        {/*buttons*/}
        <div className="absolute top-2 -right-16 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addCart(product, id)}>
            <div className="flex justify-center items-center text-white w-10 h-10 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/products/${id}`}
            className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/*category*/}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <div ref={ref} className="text-sm capitalize text-gray-500 mb-1">
          {category}
        </div>
        <Link to={`/products/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold "> $ {price}</div>
      </motion.div>
    </div>
  );
};

export default Product;

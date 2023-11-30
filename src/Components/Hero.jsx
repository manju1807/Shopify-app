import { Link } from "react-router-dom";
import WomanImg from "../assets/hero.png";
import HeroBg from "../assets/Herobg.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <section className="relative h-[886px] py-24 z-3">
      <div className="absolute hidden md:flex top-0 left-0 min-h-[886px] max-w-[100vw] min-w-full z-2">
        <motion.img
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          src={HeroBg}
          alt=""
          className="h-full w-[100vw]"
        />
      </div>
      <div className="container relative mx-auto flex justify-around h-full px-12 z-3">
        <div className="flex flex-col w-full justify-center md:pl-[6rem] items-start">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="font-semibold flex flex-col justify-center items-start uppercase"
          >
            <div className="flex justify-center items-center">
              <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
              <div ref={ref}>New Trend</div>
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light">
              AUTUMN SALE STYLISH <br />
              <span className="font-semibold">WOMENS</span>
            </h1>
            <Link
              to={"/"}
              className=" boreder border-primary uppercase font-semibold border-b-2 mt-6 hover:text-gray-600 hover:border-red-500  transition duration-300 text-sm"
            >
              Discover More
            </Link>
          </motion.div>
        </div>
        <div className="hidden h-full w-full md:flex md:justify-end md:items-end ">
          <motion.img
            src={WomanImg}
            className="h-[800px]"
            alt=""
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
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

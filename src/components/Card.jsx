import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.06 }}
      dragElastic={0.5}
      dragTransition={{bounceStiffness:30, bounceDamping:30}}
      className="relative w-60 h-72 bg-slate-900/90 rounded-3xl text-white py-10 px-6 overflow-hidden flex-shrink-0"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className=" px-5 py-2 flex items-center justify-between mb-2">
          <h5>{data.filesize}</h5>
          <span className="bg-white text-zinc-900 rounded-full p-1 flex item-center justify-center">
            {data.close ? <IoClose /> : <FiDownload size=".8em" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;

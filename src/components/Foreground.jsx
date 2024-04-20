import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, qui.",
            filesize: "0.9 MB",
            close: false,
            tag: { isOpen: true, tagTitle: "Try Dragging Me", tagColor: "blue"}
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: "0.7 MB",
            close: false,
            tag: { isOpen: true, tagTitle: "Drag me too!!", tagColor: "green"}
        },
        {
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet",
          filesize: "1.2 MB",
          close: false,
          tag: { isOpen: false, tagTitle: "Hey!! Drag me", tagColor: "green"}
      },
      {
        desc: "Lorem ipsum dolor sit . ipsum dolor sit amet",
        filesize: "0.5 MB",
        close: false,
        tag: { isOpen: true, tagTitle: "Drag me again..", tagColor: "blue"}
    }
    ];
  return (
    <>
      <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-5 flex-wrap p-4">
        {data.map((item, index) => (
            <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;

import React from "react";
// import "./index.css"

function Background() {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="w-full top-[5%] py-10 flex justify-center text-zinc-600">
          Documents
        </div>
        <h1 className="absolute text-[20vw] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-zinc-900">
          Docs
        </h1>
      </div>
    </>
  );
}

export default Background;

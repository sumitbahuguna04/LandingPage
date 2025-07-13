import { useState } from "react";

export default function AccordionCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full mx-auto mt-10">
     
      <div className="flex justify-between bg-gray-400 p-2 pr-5">
        <h1>Click to toggle</h1>
      <button onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer">
        <span className={`${isOpen ? "text-blue-500" : "text-green-500"}`}>{`${isOpen ? ' Y' : 'X'}`}</span>
      </button>
      </div>
      <div className={`${isOpen ? "transition-all w-full bg-gray-600 ease-in-out duration-500  overflow-hidden" : "max-h-0 opacity-0"}`}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore distinctio eum tenetur nam officiis corporis voluptatem repellat temporibus in maiores. Ut exercitationem commodi eos dolorum reiciendis repudiandae quia, non molestiae?</p>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

const ChatLabel = ({}) => {
  const [openMenu , setOpenMenu] = useState({ id: 0, open: false });
  return (
    <div className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer">
      <p className="group-hover:max-w-5/6 truncate">Chat Name Here</p>
      <div className="flex items-center group relative justify-center h-6 w-6 rounded-lg aspect-square">
        <Image src={assets.three_dots} alt="" className={`w-4 ${openMenu.open ? '' : 'hidden'} group-hover:block`} />
        <div className={`absolute ${openMenu.open ? 'block' : 'hidden'} -right-36 top-6 bg-gray-700 rounded-xl w-max p-2 `}>
          <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg">
            <Image src={assets.pencil_icon} alt="" className="w-4" />
            <p>Rename</p>
            <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg">
              <Image src={assets.delete_icon} alt="" className="w-4" />
              <p>Delete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLabel;

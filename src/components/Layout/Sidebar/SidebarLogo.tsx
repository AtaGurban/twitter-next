import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { BsTwitter } from "react-icons/bs";
import { MAIN_PAGE } from "@/utils/pathConsts";

const SidebarLogo:FC = () => {
  const router = useRouter();
  return (
    <div onClick={()=> router.push(MAIN_PAGE)} className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition">
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;

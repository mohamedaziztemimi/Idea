"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartModel from "./CartModel"

const NavIcons=()=>{
     const [profile, setProfile] = useState(false);
     const [cartModel,setCartModel] = useState(false);
     //just for the momeent
     const connected=true;
     const router = useRouter();
     const handleProfile=()=>{
        if(connected){
            setProfile((prev)=>!prev);
        }else {
            router.push("/login");

        }

     }
    return(
        <div className="flex items-center gap-3 2xl:gap-6 relative  ">
           
            {profile && 
                <div className="absolute -left-2 top-12 bg-gray-50 p-3  rounded-md text-sm z-20 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.06)] ">
                    <Link  href="/profile"> Profile </Link>
                    <Link href="/logout"> Logout </Link>
                </div>
           }
         
           <Image className="cursor-pointer" height={20} width={20} src="/profile.png" alt="" onClick={()=>handleProfile()}></Image>

           <Image className="cursor-pointer" height={20} width={20} src="/notification.png" alt=""></Image>
           <div className="relative">
                <Image className="cursor-pointer relative" height={20} width={20} src="/cart.png"onClick={()=>setCartModel((prev)=>!prev)} alt="" ></Image>
                <div className="bg-red-400 absolute text-white rounded-full text-xs -top-2 -right-2 w-4 h-4 flex justify-center items-center ">1</div>
           </div>


           {cartModel && <CartModel/>

           }
        </div>
    )
}
export default NavIcons;
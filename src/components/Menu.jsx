"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Linkes from "./Linkes";
const Menu=() =>{
    const [open,setOpen]=useState(false);
    return(
        <div>
                <Image src="/menu.png" width={28} height={28} alt=" " className="cursor-pointer" onClick={()=>setOpen((prev)=>!prev)
                }/>
               
                   {open && (
                     <div className="absolute left-0 top-20 bg-slate-500   w-full  flex flex-col justify-center items-center gap-8 h-[calc(100vh-80px)]  text-white gab-8 text-xl z-10">
                     
                        <Link href="/">Home</Link> 
                        <Link href="/shop">Shop</Link> 
                        <Link href="/deals">Deals</Link> 
                        <Link href="/about">About</Link> 
                        <Link href="/about">Logout</Link> 
                        <Link href="/contact">Contact</Link> 
                        <Link href="/about">Cart(1)</Link> 
                    </div>
                )}
               
                
                
        </div>
       

    );

}
export default Menu;
import Linkes from "./Linkes";
import Link from "next/link";
import Menu from "./Menu.jsx"
import Image from "next/image";
import NavIcons from "./NavIcons";
import Search from "./Search";

const Header = () => {
    return (
        <>
            <div className=" h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gradient-to-t ">
               {/** Mobile */}
               <div className="h-20 flex items-center justify-between md:hidden">
                    
                    <Link  className="flex gap-4 border-none text-2xl" href={"/"}> <Image className=" tracking-wider  "src="/brain.png" width={30} height={30} alt=""/>IDEA</Link>
                    <Menu></Menu >

               </div>
            {/** Bigger screens */}
            <div className="hidden md:flex justify-between items-center gap-8 h-full">
                    <div className="w-1/3 xl:w-1/2 flex gap-8 ">
                        
                        <Link  href={"/"} className="flex justify-center items-center gap-3 h-max">
                           <Image src="/brain.png" width={30} height={30} alt=""/>
                          <div className="text-2xl tracking-wider ">IDEA</div>
                        </Link>
                       
                              <Linkes/>
                       
                    </div>
                      <div className="w-2/3 xl:w-1/2  flex gap-8 h-max justify-between items-center  ">
                            <Search/>
                            <NavIcons/>
                           
                      </div>
            </div>
             
          

         
              
            </div>
        </>
    )
}

export default Header;
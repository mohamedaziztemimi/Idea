import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
   
        <div className=" h-full mt-28 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-100  text-sm  ">
            {/** top section  */}
            <div className="flex flex-col md:flex-row justify-between py-24">
            {/** left side */}
            <div className="w-full  flex flex-col md:w-1/2 lg:w-1/4 gap-8  ">
                <Link  href={"/"} className="flex j gap-3 h-max">
                            <Image src="/brain.png" width={30} height={30} alt=""/>
                            <div className="text-2xl tracking-wider ">IDEA</div>
                </Link>
                <p>12 in der helba meiningen , thuingia , Germany near the street liezinger starsse between macdonalds and kyosk </p>
                <span className="font-semibold">mohamedaziz.temimi@esprit.tn</span>
                <span className="font-semibold">24865222</span>
                <div className="flex gap-4 ">
                            <Link 
                                    href="https://facebook.com" 
                                    target="_blank"
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                    </svg>
                                </Link>

                                {/* Instagram */}
                                <Link 
                                    href="https://instagram.com"
                                    target="_blank"
                                    className="text-gray-600 hover:text-pink-600 transition-colors"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </Link>

                                {/* X (Twitter) */}
                                <Link  href="https://x.com" target="_blank"  className="text-gray-600 hover:text-gray-900 transition-colors" >
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </Link>

                                {/* Pinterest */}
                                <Link 
                                    href="https://pinterest.com"
                                    target="_blank"
                                    className="text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                                    </svg>
                                </Link>

                                {/* YouTube */}
                                <Link 
                                    href="https://youtube.com"
                                    target="_blank"
                                    className="text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                </Link>
                </div>
            </div>
            {/** center  */}
            <div className="hidden lg:flex justify-between w-1/2">
            {/** center left */}
                <div className=" w-full flex flex-col gap-6">
                    <h1 className="font-semibold size-4">  COMPANY </h1>
                    <div className=" flex flex-col gap-4">
                        <Link href="/about" className="font-thin">About Us</Link>
                        <Link href="/carrers" className="font-thin">Carrers</Link>
                        <Link href="/affers" className="font-thin">Affers</Link>
                        <Link href="/blogs" className="font-thin">Blogs</Link>
                        <Link href="/contact" className="font-thin">Contact Us</Link>
                    </div>
                </div>
                 {/** center center */}
                <div className=" w-full flex flex-col gap-6 ">
                    <h1 className="font-semibold size-4">  SHOP </h1>
                    <div className=" flex flex-col gap-4">
                        <Link href="/newareas" className="font-thin">New Areas</Link>
                        <Link href="/accesories" className="font-thin">Accesories</Link>
                        <Link href="/man" className="font-thin">Man</Link>
                        <Link href="/woman" className="font-thin">Woman</Link>
                        <Link href="/store" className="font-thin">All products</Link>
                    </div>
                </div>
                 {/** center roght */}
                <div className=" w-full flex flex-col gap-6 ">
                    <h1 className="font-semibold size-4">  HELP </h1>
                    <div className=" flex flex-col gap-4">
                        <Link href="/" className="font-thin">Custmer service</Link>
                        <Link href="/" className="font-thin">My Account</Link>
                        <Link href="/" className="font-thin">Find a Store</Link>
                        <Link href="/" className="font-thin">Legal & Privacy</Link>
                        <Link href="/" className="font-thin">Gift Card</Link>
                    </div>
                </div>
              
                
            </div>
             {/** right side */}
             <div className="  flex flex-col  w-full  md:w-1/2  lg:w-1/4 gap-8"> 
                <h1 className="font-semibold text-lg">
                    SUBSCRIBE
                </h1>
                <p>Be the first to get lastest new about trend , promotions and much more</p>
                <div className="flex h-10">
                    <input className="w-3/4"  placeholder="Email Adress"/>
                    <button type="button" className="w-1/4 bg-rose-400 text-white tracking-wide">JOIN </button>
                </div>
                <span className="font-semibold">Secure Payments</span>
                 {/** payments icons  */}
                <div className="flex gap-4">
                        <Link 
                        href="https://paypal.com" 
                        target="_blank"
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20.12 6.72c.21.85.35 1.77.35 2.75 0 4.45-3.63 8.08-8.08 8.08h-2.19l-1.67 6.45H4.62L8.37 6.72h11.75m1.44-2H7.19c-.42 0-.78.3-.85.72L2.04 24h4.37c.42 0 .78-.3.85-.72l1.67-6.45h3.46c5.06 0 9.19-4.13 9.19-9.19 0-1.19-.24-2.33-.65-3.38-.21-.53-.71-.88-1.28-.88z"/>
                        </svg>
                    </Link>

                    {/* Visa */}
                    <Link 
                        href="https://visa.com"
                        target="_blank"
                        className="text-gray-600 hover:text-blue-700 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M15.45 2H8.55C4.91 2 2 4.91 2 8.55v6.91C2 19.09 4.91 22 8.55 22h6.91c3.64 0 6.55-2.91 6.55-6.55V8.55C22 4.91 19.09 2 15.45 2zM19 11.91l-2.13 5.95c-.14.4-.52.67-.95.67h-1.75c-.41 0-.77-.25-.92-.63l-3.17-8.07h2.02l2.27 5.84 1.64-5.84h1.89c.37 0 .7.23.83.58L19 11.91z"/>
                        </svg>
                    </Link>

                    {/* Mastercard */}
                    <Link 
                        href="https://mastercard.com"
                        target="_blank"
                        className="text-gray-600 hover:text-orange-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M15 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-6 0c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm3-4c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"/>
                        </svg>
                    </Link>

                    {/* Apple Pay */}
                    <Link 
                        href="https://apple.com/apple-pay"
                        target="_blank"
                        className="text-gray-600 hover:text-black transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M17.72 7.21c.92 0 2.14-.6 2.83-1.53.62-.83.98-1.98.98-3.14 0-.16-.01-.32-.03-.48-.89.04-1.96.62-2.72 1.58-.59.77-1.09 1.91-1.09 3.07 0 .17.02.34.03.5zm1.53 1.42c-1.57 0-2.86.92-3.75.92-.92 0-2.03-.87-3.47-.87-1.77 0-3.69 1.1-4.63 3.11-1.33 2.84-.34 7.06.93 9.35.62 1.13 1.39 2.37 2.42 2.33 1.82-.07 2-.87 3.75-.87 1.73 0 1.86.87 3.68.87 1.04 0 1.86-1.13 2.48-2.27.77-1.33 1.08-2.61 1.09-2.67-.07-.02-2.08-.84-2.08-3.16 0-1.98 1.6-2.88 1.68-2.94-.89-1.39-2.29-1.53-2.79-1.57l-.31-.23z"/>
                        </svg>
                    </Link>

                    {/* Google Pay */}
                    <Link 
                        href="https://pay.google.com"
                        target="_blank"
                        className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-2-7h4v2h-4v-2zm0-3h4v2h-4v-2zm0-3h4v2h-4V7z"/>
                        </svg>
                    </Link>

                  
                    </div>

                </div>
             </div>
             { /** buttom section  */}
             <div className="flex flex-col items-center md:flex-row  md:justify-between  w-full pb-24 text-xs font-semibold gap-8 ">
                    <div className="text-sm ">
                           <span>@ 2025 Idea shop</span> 
                    </div>
                    <div className=" flex flex-col items-center md:flex-row gap-8">
                        <div className="flex gap-2">
                            <span className="text-gray-500">Language </span> 
                            <span> United Stated | English</span> 
                        </div>
                        <div className="flex  gap-2">
                            <span className="text-gray-500">Currency</span> 
                            <span>$ USD</span> 
                        </div>
                    </div>
             </div>
        </div>
    )
}

export default Footer;
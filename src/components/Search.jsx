"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"



const Search=()=>{
    const router = useRouter();
    const handleSearch=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get("search"); 
        if(search){
            router.push(`/list?name=${search}`);
        }
      
    

    }

    return(
        <form className="flex justify-between gap-4 p-2 rounded-lg bg-gray-100 flex-1" onSubmit={handleSearch}>

            <input type="text" name="search" placeholder="search" className="bg-transparent outline-none   flex-1" />
            <button type="button" className="cursor-pointer" >
                <Image src="/search.png" alt=" " width={16} height={16}/>
            </button>
        </form>
    )

}
export default Search;
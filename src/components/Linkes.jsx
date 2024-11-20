import Link from "next/link";
const Links = () => {
    const links = [
        {
            path: "/",
            title:"Home"
        },
        {
            path: "/shop",
            title:"Shop"
        },
        {
            path: "/contact",
            title:"Contact"
        },
        {
            path: "/deals",
            title:"Deals"
        },
        {
            path: "/about",
            title:"About"
        }
      
    ]
    return (
        <div className="hidden xl:flex gap-4 items-center justify-center">
            {
                links.map((link) => (
                    <Link key={link.path} href={link.path} >{link.title}</Link>
                ))
            }
        </div>
    )
}

export default Links;
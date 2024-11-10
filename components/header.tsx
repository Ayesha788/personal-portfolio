import Link from "next/link";
export default function Header(){
    return(
        <div >
        <ul class="navigation-bar">
        <li class="navigation-button"><Link  href="/" >Home</Link></li>
        <li class="navigation-button"><Link href="/portfolio" >Portfolio</Link></li>
        <li class="navigation-button"><Link href="/about">About</Link></li>
        <li class="navigation-button"><Link href="/contact">Contact Us</Link></li>
        </ul>
        </div>
    )
}
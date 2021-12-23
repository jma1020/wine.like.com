import { NextPage } from "next"
import Link from "next/link"


const Wines: NextPage =() =>{

    return(
        <div>
        <Link href="/wines/port">
            <a >port wine</a>
        </Link>
                
                
        <Link href="/wines/dessert">
                <a >port wine</a>
            </Link>

            <Link href="/wines/reds">
                <a >port wine</a>
            </Link>

            <Link href="/wines/rose">
                <a >port wine</a>
            </Link>
        </div>
    )
}

export default Wines
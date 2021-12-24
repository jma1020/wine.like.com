import Link from "next/link"

export const Navigation = () =>{
    return (
        <header>
            <h1>Wine and Beers</h1>
            <nav>
                <ul>
                    <li>
                        <Link href='/beers/'>
                            <a>맥주</a>
                        </Link>
                        <ul>
                            <li>
                                <Link href='/beers/ale'>
                                    <a>에일</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/beers/stouts'>
                                    <a>스타우트</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href='/wines/'>
                            <a>와인</a>
                        </Link>
                        <ul>
                            <li>
                                <Link href='/wines/port'>
                                    <a>포트</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/wines/rose'>
                                    <a>rose</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/wines/reds'>
                                    <a>레드</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/wines/whites'>
                                    <a>화이트</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/wines/dessert'>
                                    <a>디저트</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/wines/sparkling'>
                                    <a>스파클링</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
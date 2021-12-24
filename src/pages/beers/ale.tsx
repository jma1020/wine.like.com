import type { NextPage } from "next";
import { BeerCardList } from "../../components";




const AlePage : NextPage =() => {
    const name = 'ale'


    return (
        <BeerCardList name={name}
        />
    )
}

export default AlePage
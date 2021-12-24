import type { NextPage } from "next";
import { BeerCardList } from "../../components";



const RedalePage : NextPage =() => {
    const name = 'red-ale'

    return (
        <BeerCardList name={name}
        />
    )
}

export default RedalePage
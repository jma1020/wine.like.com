import type { NextPage } from "next";
import { BeerCardList } from "../../components";


const StoutsPage : NextPage =() => {
    const name = 'stouts'


    return (
        <BeerCardList name={name}
        />
    )
}

export default StoutsPage
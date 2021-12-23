import type { NextPage } from "next";
import { WineCardList } from "../../components";


const RedsPage: NextPage = () => {
    const name = 'reds'

    return (
        <div>
            <WineCardList name={name}/>
        </div>
    )
}


export default RedsPage;

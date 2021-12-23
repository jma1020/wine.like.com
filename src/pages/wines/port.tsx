import type { NextPage } from "next";
import { WineCardList } from "../../components";

// const  fetcher = (...args) =>axios.get(...args).then(res=>res.data);

const PortPage: NextPage = () => {
    const name = 'port'

    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}



export default PortPage;

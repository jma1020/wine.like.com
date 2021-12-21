import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine
}
//props 데이터(원하는 props만 가져올 때)
export const WineCard = ({wineData} : WineProps) => {
  const { wine, winery } = wineData;

  return (
    <div>
      <h1>{wine}</h1>
      <p>{winery}</p>
    </div>
  )
}
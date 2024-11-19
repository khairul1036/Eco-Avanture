import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";


const AdventureCards = () => {
    const [dataObj, setDataObj] = useState([]);

    useEffect(() => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => setDataObj(data));
    }, []);
  
    return (
      <div className="grid grid-cols-4 gap-10 py-10">
        {
          dataObj.map(data=> <SingleCard key={data.ID} data={data}></SingleCard>)
        }
      </div>
    );
  };
export default AdventureCards;
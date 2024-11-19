import { Link } from "react-router-dom";

const SingleCard = ({data}) => {
    const { AdventureTitle,Image,EcoFriendlyFeatures} = data;
    return (
      <div>
        <div
          key={data.AdventureTitle}
          className="card card-compact bg-base-100 w-96 shadow-xl"
        >
          <figure>
            <img className="h-72" src={Image} alt={data.AdventureTitle} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">{AdventureTitle}</h2>
            <p className="font-bold text-gray-600">Eco Friendly Features</p>
            <ul className="list-inside list-disc text-gray-600">
              {
                  EcoFriendlyFeatures.map((feature, idx)=> <li key={idx}>{feature}</li>)
              }
            </ul>
            <div className="card-actions ">
              <Link to={`/adventure/${data.ID}`} className="btn bg-green-600 text-white hover:bg-green-700">Explore Now</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SingleCard;
import { useLoaderData } from "react-router-dom";


const CategoryAdventure = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            CategoryAdventure
        </div>
    );
};

export default CategoryAdventure;
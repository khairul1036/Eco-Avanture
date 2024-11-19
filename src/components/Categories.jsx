import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
      fetch("category.json")
        .then((res) => res.json())
        .then((data) => setCategory(data));
    }, []);
    
    return (
      <div>
          <div className="col-span-2">
            <p className="font-bold pb-5">All Category ({categories.length})</p>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <NavLink 
                  to={`/category/${category.category_ID}`}
                  className="btn" key={category.category_ID}>
                  {category.CategoryName}
                </NavLink>
              ))}
            </div>
          </div>
      </div>
    );
};

export default Categories;
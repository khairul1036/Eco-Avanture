import { useContext } from "react";
import AdventureCards from "../components/AdventureCards";
import BannerSection from "../components/BannerSection";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <header className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </header>
      <section>
        <BannerSection></BannerSection>
      </section>
      <section className="w-11/12 mx-auto py-2">
        <h2 className="font-semibold md:text-3xl text-center">
          Adventure Experiences
        </h2>
        {/* <div className="grid grid-cols-12">
          <div className="col-span-2">
            <Categories></Categories>
          </div>
          <div className="col-span-10"></div>
        </div> */}
        <AdventureCards></AdventureCards>
      </section>
    </div>
  );
};

export default HomeLayout;

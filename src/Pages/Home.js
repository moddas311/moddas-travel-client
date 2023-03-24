import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import WhosComing from "../Components/Checkout/WhosComing";
import SearchForm from "../Components/Form/SearchForm";
import Spinner from "../Components/Spinner/Spinner";
const Home = () => {
  const [loading, setloading] = useState(false);
  const [allExp, setAllExp] = useState([]);
  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        setAllExp(data);
      });
  }, []);

  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <div>
        <SearchForm />
      </div>
      <div className="flex-1">
        <div>
          <div className="flex justify-between px-4 mt-6">
            <p className="text-xl font-semibold px-4">Hotels Room</p>
            <Link to={"/coming-soon"}>
              <p>See All</p>
            </Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {[...Array(12)].map((home, i) => (
                <HomeCard key={i} home={home} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between px-4">
            <p className="text-xl font-semibold px-4">Experiences</p>
            <Link to={"/coming-soon"}>
              <p>See All</p>
            </Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {allExp.map((exp, i) => (
                <ExpCard key={i} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

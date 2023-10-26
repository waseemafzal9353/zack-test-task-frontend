import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import { LoaderComponent } from "../../components/Loader";
import "./TopStories.css";
const Card = React.lazy(() => import("../../components/Card/Card"));

const TopStories = () => {
  const location = useLocation();
  const section = location.pathname.split("/")[1];
  const { data, error, isLoading } = useFetch(`${API_URL}/${section}`);

  useEffect(() => {
    if (error) {
      toast.error("Error in fetching data");
      console.log(error.message);
    }
  }, [error]);

  return (
    <div className="card-container">
      {isLoading ? (
        <div className="center-loader">
          <LoaderComponent />
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <React.Suspense fallback={<LoaderComponent />}>
          {data?.results.map((result, i) => (
            <div key={i} className="card-wrapper">
              <Card cardData={result} link={result.url}/>
            </div>
          ))}
        </React.Suspense>
      )}
    </div>
  );
};

export default TopStories;

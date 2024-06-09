import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";
export default function Detail() {
  const [cuisines, setCuisine] = useState([]);

  const { id } = useParams();
  async function fetchCuisine() {
    try {
      const { data } = await axios.get(`https://server.gc1-arifghiffari.online/pub/${id}`);
      console.log(data.cuisines);
      setCuisine(data.cuisines);
    } catch (error) {
      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#EF4C54",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    }
  }

  useEffect(() => {
    fetchCuisine();
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={cuisines.imgUrl} className="img-fluid rounded shadow" alt="Cuisine Image" />
            </div>
            <div className="col-md-6">
              <h1 className="display-4">{cuisines.name}</h1>
              <p className="lead">Price: {cuisines.price}</p>
              <p>{cuisines.description}</p>
            </div>
          </div>
          <br />
          <div className="buttons">
            <Link to="/menu">
              <button className="btn btn btn-success btn-lg">Back</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

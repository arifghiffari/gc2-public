import Card from "../components/Card";
import { useEffect, useState } from "react";
import gearLoad from "../assets/Gear-0.2s-264px.svg";
import axios from "axios";
import Toastify from "toastify-js";
export default function Menu({ url }) {
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  async function fetchCuisine() {
    try {
      const { data } = await axios(`${url}/pub/?page[size]=12&sort=ASC&${search}`);
      // console.log(data.cuisines);
      setCuisines(data.cuisines);
    } catch (error) {
      Toastify({
        text: "not found",
        duration: 2000,
        close: true,
        gravity: "bottom",
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
  }, [search]);

  function searchOnChange(event) {
    let newSearch = event.target.value;
    setSearch(newSearch);
  }

  return (
    <>
      <section id="menu" className="py-5">
        <div className="container">
          <form method="get" className="flex justify-center items-center" role="search">
            <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" onChange={searchOnChange} />
          </form>
          <br />
          <h2 className="text-center mb-5">Our Menu</h2>
          {loading ? (
            <div className="mt-32 flex justify-center items-center">
              <img src={gearLoad} />
            </div>
          ) : (
            <div className="row">
              {cuisines.map((cuisines) => {
                return <Card key={cuisines.id} cuisines={cuisines} url={url} fetchCuisine={fetchCuisine} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

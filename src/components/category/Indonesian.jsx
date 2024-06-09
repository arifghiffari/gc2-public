import Card from "../Card";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Indonesian() {
  const [cuisines, setCuisines] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://server.gc1-arifghiffari.online/pub?filter=1");
        const response = res.data.cuisines;
        console.log(response);
        setCuisines(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="menu" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Menu</h2>
          <div className="row">
            {cuisines.map((cuisines) => {
              return <Card key={cuisines.id} cuisines={cuisines} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

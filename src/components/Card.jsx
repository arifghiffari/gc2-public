import { useNavigate } from "react-router-dom";

export default function Card({ cuisines, fetchCuisine }) {
  const navigate = useNavigate();
  function handleDetail(id) {
    navigate(`/detail/${id}`);
  }
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={cuisines.imgUrl} className="card-img-top" alt="Dish Image" />
          <div className="card-body text-center">
            <h5 className="card-title">{cuisines.name}</h5>
            <p className="card-text">Rp.{cuisines.price},00</p>
            <p className="card-text">{cuisines.description}</p>
            <a onClick={() => handleDetail(cuisines.id)} className="btn btn-success btn-lg">
              Detail
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

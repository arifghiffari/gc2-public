export default function Home() {
  return (
    <>
      <header className="bg-dark text-white text-center py-5" style={{ backgroundImage: 'url("https://i.pinimg.com/474x/f7/c8/76/f7c8768df03d080ffd26828bd36b70df.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <h1 className="display-4">Welcome to Ghif House</h1>
          <p className="lead">Experience the best culinary delights in town</p>
          <a href="menu" className="btn btn-primary btn-lg">
            Explore Our Menu
          </a>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <i className="bi bi-star-fill display-4 text-primary"></i>
                  <h3 className="card-title mt-3">Quality Ingredients</h3>
                  <p className="card-text">We use only the freshest ingredients to create our dishes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <i className="bi bi-heart-fill display-4 text-primary"></i>
                  <h3 className="card-title mt-3">Exceptional Service</h3>
                  <p className="card-text">Our staff is dedicated to providing you with an outstanding dining experience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <i className="bi bi-emoji-smile-fill display-4 text-primary"></i>
                  <h3 className="card-title mt-3">Cozy Atmosphere</h3>
                  <p className="card-text">Enjoy your meal in a warm and inviting environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 text-center text-white bg-secondary">
        <div className="container">
          <h2 className="display-4">Ready to Experience Ghif House?</h2>
          <p className="lead">Make a reservation or explore our menu to start your culinary adventure.</p>

          {/* masih development */}
          <a href="#" className="btn btn-lg btn-light">
            Make a Reservation
          </a>
        </div>
      </section>
    </>
  );
}

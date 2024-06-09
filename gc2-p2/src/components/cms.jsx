export default function Cms() {
  return (
    <>
      <section className="container" id="login-section">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3 mt-5">Login Options</h1>
          </div>
          <div className="col-12 col-lg-8 offset-lg-2 my-5">
            <div className="row">
              <div className="col-12 col-md-6 border-end p-5 text-left">
                <img src="https://i.pinimg.com/474x/5f/d4/d4/5fd4d4ae114fd64be8612674d0a0421a.jpg" width="350px" alt="sofa" />
              </div>
              <div className="col-12 col-md-6 p-5 text-left">
                <div className="form-signin m-auto">
                  <form id="login-form">
                    <h1 className="h3 mb-3 display-1">Log in to your account</h1>
                    <span>Log in on your profile to autocomplete your purchase order with your personal data.</span>
                    <div className="mb-3 mt-3">
                      <div className="d-flex justify-content-between">
                        <label for="login-email">Email</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <input type="email" className="form-control" id="login-email" placeholder="Enter email address ..." autocomplete="off" required />
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between">
                        <label for="login-password">Password</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <input type="password" className="form-control" id="login-password" placeholder="Enter your password ..." autocomplete="off" required />
                    </div>
                    <div className="checkbox mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="login-remember" />
                        <label className="form-check-label" for="login-remember">
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                    </div>
                    <button className="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit">
                      Log In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

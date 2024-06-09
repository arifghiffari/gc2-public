import { Outlet } from "react-router-dom";
import React from "react";
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ghif House
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="menu" className="nav-link">
                  Menu
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                {/* sort by category */}
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a href="indonesian" class="dropdown-item">
                      Indonesian
                    </a>
                  </li>
                  <li>
                    <a href="japanese" class="dropdown-item">
                      Japanese
                    </a>
                  </li>
                  <li>
                    <a href="mexican" class="dropdown-item">
                      Mexican
                    </a>
                  </li>
                  <li>
                    <a href="italian" class="dropdown-item">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a href="thai" class="dropdown-item">
                      Thai
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />

      <Outlet />
    </>
  );
}

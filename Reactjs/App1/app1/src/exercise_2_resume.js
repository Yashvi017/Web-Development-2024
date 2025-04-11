import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
  <>
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 col-md-12 col-lg-3 text-bg-dark pt-3 pb-3">
          <img src="https://picsum.photos/300/300" className="img-fluid img-thumbnail rounded-circle"/>

            <div className="text-start mt-4">
              <p className="fw-bold fs-3">
                <i className="fa-brands fa-think-peaks text-bg-light p-3 rounded-circle"></i>
                Skills
              </p>
              <p className="badge text-bg-light fs-4 mt-2">
                Sales Management
              </p>
              <p className="badge text-bg-light fs-4">
                Revenue Growth
              </p>
              <p className="badge text-bg-light fs-4">
                Customer Service
              </p>
              <p className="badge text-bg-light fs-4">
                Customer Needs
              </p>
            </div>

            <div className="text-start mt-4">
              <p className="fw-bold fs-3">
                <i className="fa-solid fa-user-graduate text-bg-light p-3 rounded-circle"></i>
                Education
              </p>
              <h3>Lorem ipsum dolor sit amet consectetur</h3>
              <h3 className="fw-light">Lorem ipsum dolor sit</h3>


            </div>

            <div className="text-start mt-4">
              <p className="fw-bold fs-3">
                <i className="fa-solid fa-language text-bg-light p-3 rounded-circle"></i>
                Languages
              </p>
              <p className="mt-2 mb-0 fs-4">
                English
              </p>
              <p>
                <i>Native or bilingual proficiency</i>
              </p>
              <p className="mt-2 mb-0 fs-4">
                Spanish
              </p>
              <p>
                <i>Native or bilingual proficiency</i>
              </p>
              <p className="mt-2 mb-0 fs-4">
                French
              </p>
              <p>
                <i>Native or bilingual proficiency</i>
              </p>

            </div>

            <div className="text-start mt-4">
              <p className="fw-bold fs-3">
                <i className="fa-regular fa-chess-knight text-bg-light p-3 rounded-circle"></i>
                Interests
              </p>
              <p className="mt-2 mb-0 fs-4">
                <i className="fa-regular fa-snowflake"></i>
                Blockchain Technologies
              </p>
              <p className="mt-2 mb-0 fs-4">
                <i className="fa-solid fa-sailboat"></i>
                Sailing
              </p>
              <p className="mt-2 mb-0 fs-4">
                <i className="fa-solid fa-code"></i>
                Web 3.0
              </p>
            </div>

        </div>
        <div className="col-12 col-md-12 col-lg-9 pt-3 pb-3">
          <h1>Frank Graham</h1>
          <h3 className="text-primary">Sales Associate</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed et natus neque illo quos mollitia
            nobis, assumenda laudantium in enim temporibus maxime fugiat quo velit deleniti necessitatibus alias
            itaque autem. Ea corporis officiis a, minima voluptas, eveniet dolorem dignissimos earum aliquid
            accusamus rerum debitis iure quod minus reiciendis veniam nobis. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Porro ex, voluptatum aut, eveniet a id ad, sapiente quisquam maxime
            incidunt cupiditate placeat asperiores? Ullam deleniti sint perferendis blanditiis quam accusantium!
          </p>
          <div className="text-bg-dark p-4 rounded-2">
            <div className="row text-center pt-2 pb-2">
              <div className="col-12 col-md-6">
                <i className="fa-solid fa-envelope"></i>
                frank@novoresume.com
              </div>
              <div className="col-12 col-md-6">
                <i className="fa-solid fa-mobile-screen-button"></i>
                +91-9876543210
              </div>
              <div className="col-12 col-md-6">
                <i className="fa-solid fa-envelope"></i>
                frank@novoresume.com
              </div>
              <div className="col-12 col-md-6">
                <i className="fa-solid fa-mobile-screen-button"></i>
                +91-9876543210
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
);
root.render(output);
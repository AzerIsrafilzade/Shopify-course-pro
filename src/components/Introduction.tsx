import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Introduction: React.FC = () => {
  // Modal görünürlüğü idarə edən state
  const [isModalOpen, setModalOpen] = useState(false);

  // Modalı açan funksiya
  const openModal = () => {
    setModalOpen(true);
  };

  // Modalı bağlayan funksiya
  const closeModal = () => {
    setModalOpen(false);
  };

  // SweetAlert-in işlədiyi funksiya
  const handleGetProductsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    Swal.fire({
      title: "Welcome!",
      text: "Are you ready to get started with our Shopify platform?",
      icon: "question",
      confirmButtonText: "Yes, let's go!",
      showCancelButton: true,
      cancelButtonText: "No, thanks",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Great!", "Let's get started!", "success");
      } else {
        Swal.fire("Maybe next time!", "", "info");
      }
    });
  };

  return (
    <section className="introduction py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Sol tərəf */}
          <div className="col-12 col-md-6">
            <div className="intro-left-side text-white">
              <h1>
                If you can dream <br /> it, you can sell it <br /> with Shopify
              </h1>
              <h6>Build your business here. Take it anywhere.</h6>
              <form>
                <div className="email-container">
                  <input type="text" placeholder="Enter your email" />
                  <button
                    className="get-products"
                    id="get-products"
                    onClick={handleGetProductsClick}
                  >
                    Get products
                  </button>
                </div>
              </form>
              <h5>
                Try Shopify free for 3 days, no credit card required. By entering
                your email, you agree to <br /> receive marketing emails from
                Shopify.
              </h5>
            </div>
          </div>

          {/* Sağ tərəf */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="intro-right-side position-relative">
              <img
                src="./assets/images/introduction/intro.svg"
                alt="Introduction Image"
                className="w-100 intro-image"
              />
              <button id="play-icon-btn" onClick={openModal}>
                <img
                  src="/assets/images/introduction/playicon.svg"
                  alt="Play Icon"
                  className="play-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Box */}
      {isModalOpen && (
        <div className="arxasi-solgun-reng">
          <div className="modal-boxes">
            <div className="fa-solid fa-xmark" onClick={closeModal}>
              &#10005;
            </div>
            <div className="modal-body">
              <iframe
                width="100%"
                height="140px"
                src="https://www.youtube.com/embed/kRqHf0qbyPk?si=-bwScpoOD4wpigfV"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Introduction;

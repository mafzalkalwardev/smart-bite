import React from "react";

function AboutUs() {
  return (
    <div className="text-light">

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "60vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">About Smart Bite</h1>
          <p className="lead mt-3">
            Where great taste meets smart technology
          </p>
        </div>
      </section>

      {/* ABOUT DESCRIPTION */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold mb-3">Our Restaurant</h2>
            <p>
              Smart Bite is a modern restaurant built with the vision of
              delivering delicious food with speed, consistency, and quality.
              We believe that great food should be paired with a smooth and
              smart ordering experience.
            </p>
            <p>
              From freshly prepared burgers and pizzas to quick snacks and
              beverages, Smart Bite focuses on customer satisfaction, hygiene,
              and innovation. Our smart ordering and management system allows
              us to maintain efficiency while ensuring every order is handled
              with care.
            </p>
            <p>
              Located at Air University Islamabad, Smart Bite proudly serves
              students, faculty, and visitors with a modern dining experience.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
              alt="Restaurant Interior"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-5" style={{ backgroundColor: "#020617" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Mission</h2>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Our mission is to combine quality food with smart technology.
            We aim to reduce waiting time, improve order accuracy, and
            provide a seamless experience for both customers and restaurant
            management through digital solutions.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-5">Meet the Team</h2>

        <div className="row justify-content-center">
          <div className="col-md-4 text-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdpOqlfJ8ZL2fDC2liM1TIbjpkplPlIi5CA&s"
              alt="Muhammad Afzal"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
            />
            <h5>Muhammad Afzal</h5>
            <p className="text-muted">Founder</p>
            <p className="small">
              Visionary behind Smart Bite, focusing on innovation,
              efficiency, and modern restaurant systems.
            </p>
          </div>

          <div className="col-md-4 text-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62zzwWx8s65akTIRS1e6MbYcy6YxQP0zKNQ&s"
              alt="Muhammad Ahmed"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
            />
            <h5>Muhammad Ahmed</h5>
            <p className="text-muted">Co-Founder</p>
            <p className="small">
              Co-founder of Smart Bite, responsible for operations,
              system design, and customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-5" style={{ backgroundColor: "#020617" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">📍 Our Location</h2>
          <p>
            Smart Bite Restaurant<br />
            Air University Islamabad<br />
            E-9 Campus, Islamabad, Pakistan
          </p>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;

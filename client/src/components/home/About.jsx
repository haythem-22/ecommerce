import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <span />
        <h2>About House Of Notes</h2>
        <span />
      </div>
      <p className="about-text">
        House of Notes is a luxury perfume store dedicated to women and men,
        offering a curated selection of premium fragrances from distinguished
        brands. We bring together elegance, quality, and timeless scents to help you
        discover the perfect fragrance for every style and occasion.
      </p>
      <div className="about-image">
        <img
          src="https://i.pinimg.com/1200x/c4/b8/b3/c4b8b3002ead636825d706db4bdf1489.jpg"
          alt="House of Notes Store"
        />
      </div>
    </section>
  );
};

export default About;
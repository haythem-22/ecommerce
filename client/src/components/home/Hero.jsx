import React from 'react';
const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <img src="/pic2.png" alt="House Of Notes logo" />
        <h2>Perfume is a desire you cannot see only feel</h2>
        <p>Each scent is a quiet signature, a trace of emotion lingering on the skin.</p>
        <a href="#shop" className="btn-primary">Shop Now</a>
      </section>

      <section className="brands-section">
        <div className="brands-title">
          <span></span>
          <h2>Our Brands</h2>
          <span></span>
        </div>
        <div className="brands-logos">
          <img src="https://i.pinimg.com/1200x/da/81/f8/da81f80985c6151055520f488d3af7cb.jpg" alt="Giorgio Armani" />
          <img src="https://i.pinimg.com/736x/6b/9d/4c/6b9d4cca1d1e4d565c184a08eab33c04.jpg" alt="Givenchy" />
          <img src="https://i.pinimg.com/736x/47/b0/4c/47b04c546207ba9b9ad4e1a98ff099c1.jpg" alt="Jean Paul Gaultier" />
          <img src="https://i.pinimg.com/736x/58/ac/22/58ac22828d5cbfc0097822c8585fd05f.jpg" alt="YSL" />
          <img src="https://i.pinimg.com/736x/96/ea/fa/96eafaedc9df66fe69ab833230d8ab46.jpg" alt="Burberry" />
          <img src="https://i.pinimg.com/736x/0b/e8/ba/0be8ba2a4eb923cf00f0917e16680472.jpg" alt="Chanel" />
          <img src="https://i.pinimg.com/1200x/7d/75/3f/7d753f26b35cc1bc3c4f50d9a5e9308f.jpg" alt="Prada" />
          <img src="https://i.pinimg.com/1200x/c7/db/89/c7db894a5b9bc6037b9a760601d2a027.jpg" alt="Lancome" />
          <img src="https://i.pinimg.com/1200x/8e/e4/cc/8ee4ccedbb5fb39bec8c2af6c0bc5e26.jpg" alt="Versace" />
        </div>
      </section>
    </>
  );
};

export default Hero;
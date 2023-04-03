import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <h2>Join Our Newsletter</h2>
      <p>Get 10% off your first purchase</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </section>
  );
};

export default Newsletter;
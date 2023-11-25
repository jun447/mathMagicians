import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="px-2">
      <h2 data-aos="fade-up" className="py-4 text-secondary">Welcome Calculator and Qoute</h2>
      <p data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam id illo nam,
        nemo numquam optio placeat quia veniam veritatis vitae.
      </p>
    </div>
  );
};

export default Home;
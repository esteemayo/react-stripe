import phoneImg from "../images/phone.svg";
import { useGlobalContext } from "./../utils/context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructures for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortunes
            500s-use Stripe's software and APIs to accept payments, and payouts,
            and manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

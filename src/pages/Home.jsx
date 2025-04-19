import React from "react";
import Hero from "../components/hero";
import FeatureItem from "../components/FeatureItem";

import iconChat from "../images/icon-chat.webp";
import iconMoney from "../images/icon-money.webp";
import iconSecurity from "../images/icon-security.webp";

const Home = () => {
  return (
    <>
      <Hero>
        <h2 className="subtitle">No fees.</h2>
        <h2 className="subtitle">No minimum deposit.</h2>
        <h2 className="subtitle">High interest rates.</h2>
        <p className="text">Open a savings account with argentbank today!</p>
      </Hero>

      <section className="features">
        <FeatureItem
          imageSource={iconChat}
          imageAlt="Chat Icon"
          title="You are our #1 priority"
          paragraph="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />

        <FeatureItem
          imageSource={iconMoney}
          imageAlt="Money Icon"
          title="More savings means higher rates"
          paragraph="The more you save with us, the higher your interest rate will be!"
        />

        <FeatureItem
          imageSource={iconSecurity}
          imageAlt="Security Icon"
          title="Security you can trust"
          paragraph="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </>
  );
};

export default Home;

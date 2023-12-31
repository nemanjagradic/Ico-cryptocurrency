import classes from "./HowItWorks.module.scss";

const howItWorksArray = [
  {
    step: "Download App",
    description:
      "Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.",
    image: "/img/how-it-works-1.png",
    connect: "/img/how-it-works-connect.png",
  },
  {
    step: "Register",
    description:
      "Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.",
    image: "/img/how-it-works-2.png",
    connect: "/img/how-it-works-connect.png",
  },
  {
    step: "Connect Wallet",
    description:
      "Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.",
    image: "/img/how-it-works-3.png",
    connect: "/img/how-it-works-connect.png",
  },
  {
    step: "Start trading",
    description:
      "Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app.",
    image: "/img/how-it-works-4.png",
  },
];

const HowItWorks = () => {
  return (
    <div className={classes["works"]} id="How-It-Works">
      <div className="container">
        <h1>How it works</h1>
        <div className={classes["works__items"]}>
          {howItWorksArray.map((item) => {
            return (
              <div className={classes["works-item"]} key={item.step}>
                {item.connect && (
                  <div className={classes["works-item__connect"]}>
                    <img src={item.connect} alt="" />
                  </div>
                )}
                <div className={classes["works-item__img"]}>
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.step}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

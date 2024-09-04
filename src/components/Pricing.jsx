import styles from "./Pricing.module.css";
import carImage from "../assets/car.svg";

function Pricing() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Pricing</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <h2>Car</h2>
            <img src={carImage} alt="" height={"100px"} />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              natus itaque perspiciatis praesentium corporis dolores accusantium
              laborum, reprehenderit sit, nulla mollitia provident nisi earum
              minima voluptates adipisci, numquam dolor tenetur?
            </p>
          </div>
          <div className={styles.item}>
            <h2>Car</h2>
            <img src={carImage} alt="" height={"100px"} />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              natus itaque perspiciatis praesentium corporis dolores accusantium
              laborum, reprehenderit sit, nulla mollitia provident nisi earum
              minima voluptates adipisci, numquam dolor tenetur?
            </p>
          </div>
          <div className={styles.item}>
            <h2>Car</h2>
            <img src={carImage} alt="" height={"100px"} />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              natus itaque perspiciatis praesentium corporis dolores accusantium
              laborum, reprehenderit sit, nulla mollitia provident nisi earum
              minima voluptates adipisci, numquam dolor tenetur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

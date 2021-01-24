import React from "react";
import Layout from "../../components/layout";
import ProductGrid from "../../components/product-grid";
import styles from "./landing.module.css";

const Landing = () => {
  const {
    logo,
    topSection,
    containSection,
    logoContainer,
    teaSection,
    drinkSection,
    productOverview,
    ingredientsImg,
    packagingImg,
    endResultImg,
    mainTitle,
    clear
  } = styles;
  return (
    <Layout
      page="home"
      description="Infuse your soul with these delicious, natural drink blends"
    >
      <div className={topSection}>
        <div className={containSection}>
          <div className={logoContainer}>
            <img className={logo} src="img/logo.svg" alt="Temple Blends Logo" />
            <p>
              your body is a Temple <br />
              treat it like one
            </p>
          </div>
          <div className={productOverview}>
            <p>herbs, spices, fruits and vegetables</p>
            <img
              className={ingredientsImg}
              src="img/ingredients.png"
              alt="Our Ingredients - herbs, spices, fruits and vegetables"
            />
            <p>
              dried and blended into teas,
              <br /> smoothie and juice mixes
            </p>
            <img
              className={packagingImg}
              src="img/packaging.png"
              alt="Packaging that respects the environment"
            />
            <p>
              nutritional drinks at
              <br />
              your conveniece
            </p>
            <img className={endResultImg} src="img/banana-kale-nut.png" alt="" />
          </div>
          <div className={clear}></div>
        </div>
        <div className={mainTitle}>
          <h1>Our Blends</h1>
          <p>craft tea and drink mixes</p>
        </div>
      </div>
      <div className={teaSection}>
        <ProductGrid
          type="tea"
          name="Tea"
          description="relax, vitalize or indulge with these unique tea blends"
        />
        <div className={clear}></div>
      </div>
      <div className={drinkSection}>
        <ProductGrid
          type="drink-mix"
          name="Drink Mixes"
          description="just add water or plant milk for a nutritous flavored drink"
        />
        <div className={clear}></div>
      </div>
      <div id="landing-footer">
        <div id="landing-footer-intro">
          <p>Temple Blends is a rapidly growing company.</p>
          <p>
            Any feedback helps - tell us about your order, give us suggestions
            or just say hi!
          </p>
        </div>
        <img src="img/logo.svg" alt="Temple Blends Logo" />
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="What’s on your mind?"
          ></textarea>
          <input
            type="checkbox"
            id="newsletter-signup"
            name="newsletter-signup"
            checked
          />
          <label for="newsletter-signup">
            Let me know about new products and website features
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default Landing;

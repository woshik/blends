import React from "react";
import Layout from "../../components/layout";
import ProductGrid from "../../components/product-grid";
import styles from "./landing.module.css";

const Landing = () => {
  const {
    logo,
    container,
    topSection,
    topContent,
    logoContainer,
    teaSection,
    drinkSection,
    productOverview,
    ingredientsImg,
    packagingImg,
    endResultImg,
    mainTitle,
    footerContainer,
    footerSection,
    footerContent,
    footerLogo,
    nameField,
    emailField,
    clear
  } = styles;
  return (
    <Layout
      page="home"
      description="Infuse your soul with these delicious, natural drink blends"
      showFooter={false}
    >
      <div className={topSection}>
        <div className={container}>
          <div className={topContent}>
            <div className={logoContainer}>
              <img className={logo} src="img/logo.svg" alt="Temple Blends Logo"/>
              <p>
                your body is a Temple <br/>
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
                <br/> smoothie and juice mixes
              </p>
              <img
                  className={packagingImg}
                  src="img/packaging.png"
                  alt="Packaging that respects the environment"
              />
              <p>
                nutritional drinks at
                <br/>
                your conveniece
              </p>
              <img className={endResultImg} src="img/banana-kale-nut.png" alt=""/>
            </div>
            <div className={clear}></div>
          </div>
          <div className={mainTitle}>
            <h1>Our Blends</h1>
            <p>craft tea and drink mixes</p>
          </div>
        </div>
      </div>
      <div className={teaSection}>
        <ProductGrid
            type="tea"
            name="Tea"
            description="relax, vitalize or indulge with these unique tea blends"

        />
      </div>
      <div className={drinkSection}>
        <ProductGrid
            type="drink-mix"
            name="Drink Mixes"
            description="just add water or plant milk for a nutritous flavored drink"
        />
        <div className={clear}></div>
      </div>
      <div id="landing-footer" className={footerSection}>
        <div className={footerContainer}>
          <div id="landing-footer-intro" className={footerContent}>
          <p>Temple Blends is a rapidly growing company.</p>
          <p>
            Any feedback helps - tell us about your order, give us suggestions
            or just say hi!
          </p>
        </div>
          <img src="img/logo.svg" className={footerLogo} alt="Temple Blends Logo"/>
          <form>
            <input className={nameField} type="text" placeholder="Name"/>
            <input className={emailField} type="text" placeholder="Email"/>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="What’s on your mind?"
            ></textarea>


            <button type="submit">
              <img src="img/send-black-18dp.svg" alt="Send email"/>
            </button>
            <label htmlFor="newsletter-signup">
              <input
                  type="checkbox"
                  id="newsletter-signup"
                  name="newsletter-signup checkbox"
                  checked
              />
              <span>Let me know about new products and website features</span>

            </label>
          </form>
          <div className={clear}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;

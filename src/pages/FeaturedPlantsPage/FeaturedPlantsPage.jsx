import "./FeaturedPlantsPage.scss";

export default function FeaturedPlantsPage() {
  return (
    <main>
      <section className="nearby-plants">
        <h1>Plants near you</h1>

        <div className="nearby-plants__gallery">
          <div className="nearby-plants__photo"></div>
          <div className="nearby-plants__photo"></div>
        </div>
      </section>
      <section className="feature-plant">
        <h2>Learn more about [featured plant]</h2>
        <div className="feature-plant__gallery">
          <div className="feature-plant__photo"></div>
          <div className="feature-plant__info">
            <h3 className="feature-plant__name">lorem ipsum dolor imit</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

import "./CollectionPage.scss";

export default function CollectionPage() {
  return (
    <main>
      <section className="stats">
        <div className="stats__text">
          <h1>Total plants collected 🌱</h1>
          <p className="stats__number">93</p>
        </div>
        <button>VIEW ALL PLANTS</button>
      </section>
      <section className="map"></section>
    </main>
  );
}

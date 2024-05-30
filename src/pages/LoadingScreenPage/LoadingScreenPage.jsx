import "./LoadingScreenPage.scss";
import kongIcon from "../../assets/logos/logo-kong-icon.svg";

export default function LoadingScreenPage() {
  return (
    <section className="loading-screen">
      <h1 className="loading-screen__title">This could take a while...</h1>
      <p>Please hang tight! We're generating your plant illustration 🌿</p>
      <img className="loading-screen__icon" src={kongIcon} />
    </section>
  );
}

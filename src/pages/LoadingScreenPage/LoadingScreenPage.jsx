import "./LoadingScreenPage.scss";
import kongLogo from "../../assets/logos/logo-kong-full-mark.svg";

export default function LoadingScreenPage() {
  return (
    <section className="loading-screen">
      <h1>We're identifying your plant 🌿</h1>
      <img src={kongLogo} />
    </section>
  );
}

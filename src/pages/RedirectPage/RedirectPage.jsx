import "./RedirectPage.scss";
import { Link } from "react-router-dom";

export default function RedirectPage() {
  return (
    <main className="redirect-page">
      <h1>Kong has migrated to <Link to="https://thekong.ca">thekong.ca</Link></h1>
    </main>
  );
}
import { Link } from "react-router-dom";
import "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src="/logo.svg" alt="logo" width="40"/>
        <ul>
          <Link to="/requerimentos">
            <li>Requerimentos</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}

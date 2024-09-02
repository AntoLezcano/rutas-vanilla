import { Header } from "./components/header.js";
import { LoginPage } from "./pages/login.js";
import { Home } from "./pages/home.js";
import { About } from "./pages/about.js";
import "./style.css";
import { registerPage } from "./pages/register.js";
import { contactForm } from "./pages/contact.js";

const pathname = window.location.pathname;
const $app = document.querySelector("#app");

$app.appendChild(Header());

if (pathname === "/") $app.appendChild(Home());
if (pathname === "/login") $app.appendChild(LoginPage());
if (pathname === "/about") $app.appendChild(About());
if (pathname === "/register") $app.appendChild(registerPage());
if (pathname === "/contact") $app.appendChild(contactForm());

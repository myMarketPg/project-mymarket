import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div class="social">
                <a href="#">
                    <i class="icon ion-social-instagram"></i>
                </a>
                <a href="#">
                    <i class="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                    <i class="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                    <i class="icon ion-social-facebook"></i>
                </a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item">
                    <a href="#">Home</a>
                </li>
                <li class="list-inline-item">
                    <a href="#">Services</a>
                </li>
                <li class="list-inline-item">
                    <a href="#">About</a>
                </li>
                <li class="list-inline-item">
                    <a href="#">Terms</a>
                </li>
                <li class="list-inline-item">
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            <p class="copyright">MyMarket © 2022</p>
        </footer>
    );
}

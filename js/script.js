// import images as relative image path won't work with vite/vercel.
import check from "../assets/check.svg";
import star from "../assets/star.svg";
import sushi12 from "../assets/sushi-12.png";
import sushi11 from "../assets/sushi-11.png";
import sushi10 from "../assets/sushi-10.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

const trendingSushis = [
  "Make Sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
  "Inari Sushi",
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

const cards = [
  {
    imgSrc: sushi12,
    alt: "sushi-12",
    title: "Chezu Sushi",
    rating: "4.8",
    price: "$21.00",
  },
  {
    imgSrc: sushi11,
    alt: "sushi-11",
    title: "Originale Sushi",
    rating: "4.8",
    price: "$21.00",
    active: true,
  },
  {
    imgSrc: sushi10,
    alt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.8",
    price: "$21.00",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggleIcon");

  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function () {
    let isActive = mobileMenu.classList.toggle("active");
    document.body.style.overflow = isActive ? "hidden" : "auto";
  });

  const menuLinks = document.querySelectorAll(".mobile-menu__links a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
});

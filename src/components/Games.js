import React from "react";
import { Content } from "./Content";
import { Cards } from "./Cards";
import "../assets/style.css";

export const Games = () => {
  let g1 = [
    {
      img: "https://store-images.s-microsoft.com/image/apps.5795.14471421918435459.3615d8d5-10ca-4c2f-b3e5-e8c97fe18682.a415e3b3-74b6-4e5f-8742-024265840a54?w=100",
      title: "Asphalt 9: Legends",
      type: "Simulation ",
      fund: "Free",
    },
    {
      img: "https://store-images.s-microsoft.com/image/apps.6397.9007199266379485.bb5c8354-1bc8-4bb4-8539-5fc4f3424669.41074328-3e79-4d4f-a9d5-e447f429cc6f?w=100",
      title: "Hill Climb Racing",
      type: "Simulation & adventure",
      fund: "Free",
    },
    {
      img: "https://store-images.s-microsoft.com/image/apps.11067.13510798882606697.efaa0e3a-be90-4565-97e8-abea62f547f1.da87eda1-b8cb-4f1c-9f66-e486d53e8006?w=100",
      title: "Candy crush saga",
      type: "Puzzle & Trivia",
      fund: "Free",
    },
    {
      img: "https://store-images.s-microsoft.com/image/apps.16094.13589262686196899.16e3418a-cbf2-4748-9724-1c9dc9b7a0b9.476dcb12-abc8-433a-ac3c-858a44939d8f?w=100&h=100&q=90&mode=crop",
      title: "Among us",
      type: "Sci-fi & Adventure",
      fund: "$9.99",
    },
  ];

  let g2 = [
    {
      img: "https://store-images.s-microsoft.com/image/apps.55254.13510798885998277.1984630c-a509-40b1-85a1-03419b5ccf57.7744f9e8-1795-47fd-a991-db68b32ffedf?w=100",
      title: "Sniper fury",
      type: "shooter",
      fund: "Free",
    },
    {
      img: "https://store-images.s-microsoft.com/image/apps.25613.13645225533695106.99c3d2f3-8782-4f61-9d2b-f5203f24b762.3ff7a700-5bd0-42bb-9558-7f92ec6953d4?w=100",
      title: "Ninja fight 2",
      type: "Action",
      fund: "Free",
    },
    {
      img: "https://store-images.s-microsoft.com/image/apps.64086.13812021519099434.f068b55c-4d16-4ce2-8262-e9c0664f958e.63be4afc-5a1a-4e65-8bea-e506608b35f8?w=100",
      title: "Gardenscapes",
      type: "Puzzle & trivia",
      fund: "$3.99",
    },
    {
      img: "https://store-images.s-microsoft.com/image/apps.10852.14246621496082502.ca9ee23e-c7ed-4dc0-8589-d55aeff000a7.ff3d3790-5b55-4610-996d-ee5352a75211?w=100",
      title: "Lep's world",
      type: "Action & Adventure",
      fund: "Free",
    },
  ];

  let g3 = [
    {
      img: "https://play-lh.googleusercontent.com/SXaV56IeGN04h6Mu-BwumPczseKuqTKOaV9zI6360ycaA4aS18F9BqSuIoldrxyjvZ4=s64-rw",
      title: "Mini miltia",
      type: "Action",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm=s64-rw",
      title: "Clash of clans",
      type: "Arcade & action",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/go4XqS4mYs-G2tZymiVLF4wJYXIi5QrvwixNRzssk4G_vRBHrAdg4E1ddNwy9c2cZA=s64-rw",
      title: "Temple run",
      type: "Arcade",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/C3y9VL-bjPO7NLc9m8GadZRQ9_-PbdD1OWV-QcEb99ZJ5jxGTqOkOGWHVOHFfMh7-Q=s64-rw",
      title: "Apex Legends",
      type: "Action",
      fund: "Free",
    },
  ];

  let g4 = [
    {
      img: "https://store-images.s-microsoft.com/image/apps.62445.13799013845909804.d667b16a-f72a-44c6-913e-e9ab0a88905b.7dc10c53-9a5d-4f4d-ab40-b1d32a7b8ca5?w=100",
      title: "Minecraft Legends",
      type: "Action & adventure",
      fund: "$49.99",
    },
    {
      img: "https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwR5F69Roir987tgS0Ae5DoHgBxIlN2FJSUmV4vz7WyR6z_ibfCwxEkrOTstZP9gVsXjtzOelQhOfqIMqWpdD6VAQ--&format=source&w=100",
      title: "Grand Theft Auto",
      type: "Other",
      fund: "$4.99",
    },
    {
      img: "https://store-images.s-microsoft.com/image/apps.28464.14168906857029084.1dec8aac-a444-4171-afe3-510e35a0dfa3.4307eb30-534c-4cec-908f-9b70dd88b95a?w=100",
      title: "TANSFORMERS:BATTLEGROUNDS",
      type: "Action & Sci-fi",
      fund: "$15.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/t8VJAWO7ioG9uGhkPOs7q7ZfKjigeMGFBq134VJKLVU_jKDn9VEz9Oqg1iXQ9axI7aE=s64-rw",
      title: "Hitman Sniper",
      type: "Action & shooting",
      fund: "$3.99",
    },
  ];

  let g5 = [
    {
      img: "https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=s64-rw",
      title: "Discord: Talk, Chat & Hang Out",
      type: "Streaming",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/UYxQTBlKWcro8Twz_1hruvssR4N1yVOijjCDA-gj-o9XkBetm-9Uq0QzWlb8WrwIEQ=s64-rw",
      title: "Epal: Play games, Meet friends",
      type: "Social",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/_t4mlqM4sLS35pAB3ZPqrHK9YNgO_-ckF6gB1p9ac8C3sj0uDGw4ZrnB3G0_amGxgg=s64-rw",
      title: "JioGames: Play, Win, Stream",
      type: "Streaming",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/zi6QgTtIiAnGqQMizfoj2LnE85kzHyZlgTruSzJ7Zw_79NAmB3fhxuDegwxby7P0yw=s64-rw",
      title: "Playstation app",
      type: "Streaming",
      fund: "Free",
    },
  ];

  let g6 = [
    {
      img: "https://play-lh.googleusercontent.com/wDBSZuhSkEhpQ869KdJNsDeMHLvbq_f5xLB9avZQwmqjZmv0zd1NTEnwEyUDFVss5Bc=s64-rw",
      title: "Zombie Hunter: Sniper Games",
      type: "Action",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/eBRbBBK4Fz_Ojc3L55BfJfQ21mljcuO5EptADRlDwLHmHT8QaiWwQmVx0ZNM_4Mps8I=s64-rw",
      title: "Hungry Shark World",
      type: "Adventure",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/U1PCnP7MAmFzdOpytamgfU412DPQ79MSrs7-r-r2IIZC9NFXIDXniK_6xuRigfHXrg=s64-rw",
      title: "Plants vs. Zombies",
      type: "Action",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/nDXdk5wKKYXgqyGYAOn-RlL71bFoIEI2PlVKfi1-7A3n5p89FqRGpVXjFWBbDKoP-A=s64-rw",
      title: "Angry Birds",
      type: "Casual",
      fund: "Free",
    },
  ];

  let g7 = [
    {
      img: "https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E=s64-rw",
      title: "Super Mario Run",
      type: "Casual & Arcade",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/1yRPXa0wUlcJLyuGpgbS5kJe1UdNQSanv1OOdtqjI4zRPcvL9MFNUbJ3gE9dlVqAecFW=s64-rw",
      title: "Archery Battle 3D",
      type: "Shooting",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/IONnazh4MccFXHuemCZM-b5ow-qJ5vIhgMQosDCUUk-5gfBNThjYYq835rmIRXjhJb8=s64-rw",
      title: "Iron Blade: Medieval Legends",
      type: "Action",
      fund: "$19.9",
    },
    {
      img: "https://play-lh.googleusercontent.com/vzUaHfG5MpTsKcBmuMeO0agEHKj59YNdXpH29G-uBsZSckxy9Kq---dCcMec92z1mr1x=s64-rw",
      title: "Cricket League",
      type: "Sports",
      fund: "Free",
    },
  ];

  return (
    <div className="container">
      <Content />
      <Cards g1={g1} g2={g2} g3={g3} g4={g4} g5={g5} g6={g6} g7={g7} />
    </div>
  );
};

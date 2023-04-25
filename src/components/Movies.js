import React from "react";
import { Content } from "./Content";
import { Mcards } from "./Mcards";

export const Movies = () => {
  let m1 = [
    {
      img: "https://assets.voxcinemas.com/posters/P_HO00008988.jpg",
      title: "KGF",
      type: "Action,Terror",
      fund: "$19.99",
    },
    {
      img: "https://images.news18.com/ibnlive/uploads/2022/10/asmdnasbd.jpg",
      title: "Kantara",
      type: "Action,Terror,Romance",
      fund: "$14.99",
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/8b3/ac6/ca28ec3072fdc00a5b59a72a75a39ab61b-20-avengers-lede.rsquare.w700.jpg",
      title: "Avengers:Infinity War",
      type: "Action,Sci-fi",
      fund: "$19.99",
    },
    {
      img: "https://i.pinimg.com/originals/91/1a/2d/911a2db55ff3a1faa44a7e766b9a1b3e.jpg",
      title: "Avatar:The way of water",
      type: "Action,Sci-fi,Adventure",
      fund: "$29.99",
    },
  ];

  let m2 = [
    {
      img: "https://play-lh.googleusercontent.com/--3iyCm-zk7p7kbbN9n7tbOpLrxttp56piHkmymAoo4XqFoj-0eOYVhANGYRAWiD348bLqAwRSGiTR3hurM=w88-h132-rw",
      title: "Ant-man and the wasp:Quantumania",
      type: "Sci-fi & fantasy",
      fund: "$$19.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/SF3wh70uc8U1_avbCZ-uUvCzEpVidpymZMlqFc0TVFUP7IYiAx25Ll_P0PKyEUcUR8nYyw-JUKQJN8PjPw=w88-h132-rw",
      title: "John wick 3:Parabellum",
      type: "UA",
      fund: "$9.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/SBjD4QHi8GrUmGiTZbrg4ZswU-3ZyeqIYmHSH_DAsZKu67Dfyz3CFpaBDHBF7tOBqTYNYLPOOdscQ6qkn0Y=w88-h132-rw",
      title: "Shazam:Fury of gods",
      type: "Action & adventure",
      fund: "$15.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/ae77lmHUY67h75bRIGrunNV1rlafUrLbXNW5JTaNzaCNMfU_2w38ERzQvVteTp3VYcZCrxKOpyadtRPDYDg=w88-h132-rw",
      title: "A man called otto",
      type: "Comedy",
      fund: "5.99",
    },
  ];

  let m3 = [
    {
      img: "https://play-lh.googleusercontent.com/9bq3zYSps8kGVfeSvF7Px23CdvalN6QzMSjhYu2yYBLqBBrQPWayerx1r-SMhRt1grBnnA=s256-rw",
      title: "The Jungle book",
      type: "Adventure",
      fund: "$16.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/FVxjH_4dUj895i4Dggqmuyjb8e8nKsc3zJxvHE88N9UDseGMGQv4gqdAnKKq2ZsKD1ERefDY6ElhZATxQJ8=s256-rw",
      title: "Godzilla vs kong",
      type: "Action",
      fund: "$16.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/SfhqrdmXoIKL2iZb__03bW3JqGH8TslBGbGrW3Q6PRVXpnhbAess6qbWiUlblgfgJzdpGO--5_mHXtdOlQ=s256-rw",
      title: "The suicide squad",
      type: "Action & thriller",
      fund: "$9.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/onvu4xQu2yejovHGDeRkXdFc5qR_1dKkewbSiRCYa84AlWouRvb0gRYAzo7h9GPitu5s=s256-rw",
      title: "The spider man",
      type: "Action & fantasy",
      fund: "$12.99",
    },
  ];

  let m4 = [
    {
      img: "https://play-lh.googleusercontent.com/1o0A5GbWCCnXPexI4Rkz4qqfCWJ-2sjwBDX0X7INA3MPgOiayTkMqiNptUCe_P643enz=s256-rw",
      title: "The boss baby",
      type: "Comedy",
      fund: "$5.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/QNJcWaArp784wtqZjjwfmfQqhIpRhjP0EpB4Wcj_wUZElj2Ie4H-nUeUsepmAV_Mibjb7QnhuNxZcaxoTGc=s256-rw",
      title: "The Batman",
      type: "Action ",
      fund: "$19.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/MyOOqCQkjXkrmBeLvO0BNqmgmlhz31bge5zAP4aJ9B1DbZE1TICmznoQ-9-b_KMBM_Q3cGERFiwSTPPdllY=s256-rw",
      title: "Chennai Express",
      type: "Comedy & romance",
      fund: "$12.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/rj07Jk53ihfyseBC0thMDJkCr3smmLCn5U7NFoNfJxxBXhfFifbFjTb0Qub_QUq3JTOl=s256-rw",
      title: "Commando",
      type: "Action",
      fund: "$9.99",
    },
  ];

  let m5 = [
    {
      img: "https://play-lh.googleusercontent.com/FSueOVoYp5o2_zrxVVB0G3GspJuFs74Qw2NbWSlA8VALpaiRh_IztyIXaR8d9BHUUNa6NDwVJXDnkV-_WLR4=s256-rw",
      title: "Rocketry:the nambi effect",
      type: "Science",
      fund: "$9.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/PnDUWgBHbWOLip-DQ5DBYP0uCAreCH4-O8AcL_fIgiIYS0y8I6ninHQE-WKLTsOxor87ow=s256-rw",
      title: "Gladiator",
      type: "Action",
      fund: "$11.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/d2xjeOC64wDGuLdxYjr6uuQfkHuhXy0iquoBp4lVOFQUIajRpg9fxQg5LqkEQFY-xtBH=s256-rw",
      title: "Big hero 6",
      type: "Action & sci-fi",
      fund: "$4.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/PZ3lB0FHXfD_MQTOo0C6AeLjEx5kxo9O4XUt0x6l1sGOd7FxZ8asJWEJ_DawDL0WIPj82Sm3QlEbccFT_lQ=s256-rw",
      title: "Deadpool",
      type: "Comedy & action",
      fund: "$9.99",
    },
  ];
  return (
    <div className="container">
      <Content />
      <Mcards m1={m1} m2={m2} m3={m3} m4={m4} m5={m5} />
    </div>
  );
};

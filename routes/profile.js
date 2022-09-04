"use strict";

const express = require("express");
const router = express.Router();

const profiles = [
  {
    id: 1,
    name: "Elon Musk",
    description:
      "Elon Reeve Musk FRS (/'i?l?n/; born June 28, 1971) is technology entrepreneur, investor, and engineer. He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, CTO and lead designer of SpaceX; co-founder, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder and CEO of Neuralink; and co-founder and  co-chairman of OpenAI; and co-founder of Paypal. As of February 2021, Musk's net worth stands at $184 billion, making him the 2nd richest person in the world.",
    mbti: "INTP",
    enneagram: "5w6",
    variant: "so/sp",
    tritype: 513,
    socionics: "ILE",
    sloan: "RCOEI",
    psyche: "VLFE",
    temperaments: "Phlegmatic [Dominant]]",
    image:
      "https://www.pinkvilla.com/files/styles/gallery-preview/public/elon_musk.jpg?itok=yYKSvOjc",
  },
];
const commentData = [
  {
    comment:
      "He thinks about future, Ni. He is productive too, Te. That makes him INTJA.Imao ok guys sure.\n Let me make it easy for you guys:\n The Arguments - Ti vs Te & Ne vs Ni.\n 1 - Ti vs Te:\n• Ti: Elon wants to create new things that don't exists, no one imagines. He tends to assume that the information he has is trve to co conclusion.\n• Te: Te is mostly based on facts & evidence ie the things which have been working for so long, on the ways everyo Elon Musk is an obvious Ti user.      2 - Ne vs Ni: Ne: His ideas are divergent; He does not stick to one idea, he is constantly thinking about other possible outcomes. • Ni: The individual who uses Ni has a clear  about his idea & decides to follon it right away. ~ Also, some other arguments I have: - INTJs are serious people, INTPs are more flexible i.e Elon Musk is an easy come, easy go type of person, His Fe is so cbrious takes jokes or anything personally. - Elon Musk is just a productive INTP who gets things done, that's why people think of him as an INTJ.",
    enneagram: "8w9",
    mbti: "INTP",
    createdOn: new Date(),
    profile:
      "http://esq.h-cdn.co/assets/17/10/1280x1280/square-1488906206-daniel-craig.jpg",
    title: "He's definitely an INTP",
    name: "James Bond",
    zodiac: "Cancer",
    likes: 79,
  },
  {
    comment:
      "I want Elon Musk to be an INTJ more than anyone, but he lan't.People think that Elon has Ni because of his long-term vision for humanity becoming a multi planetary apecies, but the way he got to this conclusion is through TiNe - by envisioning all the possibilities and choosing the Ti path the makes the most sense Elon's mannerisms, jokes, are very based on Ne. He hat so much Ne that I even considered ENTP. but INTP is the most likely choice: watch the video if you're still not convinced ",
    enneagram: "",
    mbti: "INTP",
    createdOn: new Date(),
    profile:
      "http://esq.h-cdn.co/assets/17/10/1280x1280/square-1488906206-daniel-craig.jpg",
    title: "Just not an INTJ",
    name: "Daniel Craig",
    zodiac: "",
    likes: 20,
  },
];
const updateCommentData = (data) => {
  commentData.push(data);
};
module.exports = function () {
  router.get("/", function (req, res, next) {
    let data = commentData;
    let button = "all";
    let sort = "best";
    if (req.query.sorting) {
      switch (req.query.sorting) {
        case "best":
          data = commentData.sort((a, b) => b.likes - a.likes);
          sort = "best";
          break;
        case "recent":
          data = commentData.sort((a, b) => b.createdOn - a.createdOn);
          console.log(data);
          sort = "recent";
          break;
      }
    }
    if (req.query.filter) {
      switch (req.query.filter) {
        case "all":
          data = commentData;
          button = "all";
          break;
        case "Enneagram":
          data = data.filter((item) => item.enneagram);
          button = "Enneagram";
          break;
        case "zodiac":
          data = data.filter((item) => item.zodiac);
          button = "zodiac";
          break;
        case "mbti":
          data = data.filter((item) => item.mbti);
          button = "mbti";
          break;
        default:
          data = commentData;
          button = "all";
          break;
      }
    }
    res.render("profile_template", {
      profile: profiles[0],
      commentData: data,
      button: button,
      sort: sort,
    });
  });

  router.post("/post", function (req, res, next) {
    let data = {
      comment: req.body.comment,
      enneagram: req.body.Enneagram,
      createdOn: new Date(),
      mbti: req.body.mbti,
      profile:
        "http://esq.h-cdn.co/assets/17/10/1280x1280/square-1488906206-daniel-craig.jpg",
      title: req.body.title,
      name: "Daniel Craig",
      zodiac: req.body.Zodiac,
      likes: 30,
    };
    updateCommentData(data);
    //delay of 1 second
    setTimeout(() => {
      res.redirect("back");
    }, 1000);
  });

  return router;
};

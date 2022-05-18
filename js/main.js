var app = new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: 1,
        title: "Autumn King",
        short_text:
          "Is one of the best main crop varieties available with a consistent deep red colour and conical roots.",
        image: "img/Autumn_King.jpg",
        desc: "Full desc",
      },
      {
        id: 1,
        title: "Purple Dragon",
        short_text:
          "Gorgeous reddish-purple exterior is smooth and very attractive—an unusually refined appearance. ",
        image: "img/dragon.jpg",
        desc: "Full desc",
      },
      {
        id: 1,
        title: "Chantenay",
        short_text:
          "Great-tasting, sweet and crunchy Chantenay carrot with fat, husky, tapering triangular roots.",
        image: "img/Chantenay.jpg",
        desc: "Full desc",
      },
      {
        id: 1,
        title: "Yellowstone",
        short_text: "This yellow carrot is one of the most versatile carrots you can grow.",
        image: "img/Yellowstone.jpg",
        desc: "Full desc",
      },
      {
        id: 1,
        title: "Romeo",
        short_text:
          "These petite, ball-shaped beauties are extra-tasty morsels to enjoy in just a few bites.",
        image: "img/romeo.jpg",
        desc: "Full desc",
      },
    ],
  },
  mounted: function () {
    console.log(window.localStorage.getItem("prod"));
  },
  methods: {
    addItem: function (id) {
      window.localStorage.setItem("prod", id);
    },
  },
});

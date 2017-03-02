new Vue({
  el: "#exercise",
  data: {
    name: "Manish Giri",
    age: 27,
    //googleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSaoTcU7EiRBKlB26__J_YhAXK5WUjffGO9lQZ5bHgJs5Boybzg"
    image: "https://camo.githubusercontent.com/224f79940611c6c12fb649128eca1cae31086d23/68747470733a2f2f7261776769742e636f6d2f7675656a732f617765736f6d652d7675652f6d61737465722f6c6f676f2e706e67"
  },
  methods: {
    generateRandomNumber: function () {
      return Math.floor(Math.random() * 100);
    }
  }
});

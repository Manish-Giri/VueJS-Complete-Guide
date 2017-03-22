new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://www.google.com",
    finishedLink: '<a href="http://google.com" target="_blank">Google</a>'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
    // sayHello: function() {
    //   this.title = "Hello!";
    //   return this.title;
    // }
  }
});

new Vue({
    el: "#event",
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increment: function (step) {
            this.counter += step;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});

new new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://www.google.com",
    finishedLink: '<a href="http://google.com" target="_blank">Google</a>'
  },
  methods: {
    changeTitle: function(e) {
      this.title = e.target.value;
    },
    sayHello: function() {
      this.title = "Hello!";
      return this.title;
    }
  }
})

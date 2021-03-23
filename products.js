/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      toggleIndex: false,
      products: [],
      singleProduct: "",
      input: "",
      name: "",
      description: "",
      price: "",
      image_url: "",
    };
  },
  methods: {
    index: function () {
      axios.get( "http://localhost:3000/api/products").then(response => {
        console.log(response.data);
        this.products = response.data;
        this.toggleIndex = !this.toggleIndex;
      });
    },
    show: function () {
      console.log(parseInt(this.input));
      axios.get( "http://localhost:3000/api/products/" + this.input).then(response => {
        this.singleProduct = response.data;
      });
    },
    createProduct: function() {
      axios.post("http://localhost:3000/api/products", {name: this.name, price: this.price, description: this.description, image_url: this.image_url}).then(response => {
        console.log(response.data);
      })
    }
  }
});


var app = new Vue({
  el: '#app',
  data: {
  product: 'Socks',
  image:'./assets/socks-green.jpeg',
  inStock: true,
  details: ["80% cotton", "20% polyester", "Gender Neutral"],
  variants: [
    {
      variantId: 2234,
      variantColor: "green"
    },
    {
      variantId: 2235,
      variantColor: "blue"
    }
  ],
  cart:0
  }
})
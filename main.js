var app = new Vue({
  el: '#app',
  product: 'Socks',
  image:'./assets/socks-green.jpeg',
  altText:'A pair of socks',
  description: 'A pair of warm, fuzzy socks',
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
  ]
})
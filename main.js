var app = new Vue({
  el: '#app',
  data: {
    brand:'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender Neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/socks-green.jpeg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/socks-blue.jpeg"
      }
    ],
  cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    }
  }
})
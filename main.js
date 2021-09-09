Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  `
    <div class="product">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>Shipping: {{ shipping  }}</p>

      <ul>
        <li v-for="detail in details">{{ detail }} </li>
      </ul>
    

    <div v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{ backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)">
    </div>

    <button v-on:click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }">
              Add to Cart
            </button>

  </div>

  <product-review></product-review>

  </div>
  `,
  data() {
    return {
      brand:'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      inStock: true,
      details: ["80% cotton", "20% polyester", "Gender Neutral"],
      variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/socks-green.jpeg",
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/socks-blue.jpeg",
        variantQuantity: 0
      }
    ]
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index) {
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 3.99
    }
  }
})

Vue.component('product-review', {
  template:`
  <form class="review-form" @submit.prevent="onSubmit">
  <p>
    <label for="name">Name:</label>
    <input id="name" v-model="name" placeholder="name">
  </p>
  
  <p>
    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>
  </p>
  
  <p>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
  </p>
      
  <p>
    <input type="submit" value="Submit">  
  </p>    

</form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id){
      this.cart.push(id)
    }
  },
})
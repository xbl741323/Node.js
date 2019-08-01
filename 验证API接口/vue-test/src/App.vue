<template>
  <div>
    <h1>这是App组件</h1>
    <h1>这是App组件</h1>
    <ul>
      <li v-for="item in products" :key="item.id">
        <span>{{ item.pname }}</span>
        <span>{{ item.price }}</span>
      </li>
      <li>{{ theproduct.pname}}</li>
      <li>{{ theproduct.price}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theproduct: [],
      products: [],
      name: "苹果",
      id: "2"
    };
  },
  created() {
    this.getProduct();
    this.getProductById();
  },
  methods: {
    getProduct() {
      this.$http.get("http://localhost:3300/getProduct").then(result => {
        if (result.body.status === 0) {
          this.products = result.body.message;
        } else {
          alert("获取列表失败！");
        }
      });
    },
    getProductById() {
      this.$http
        .get("http://localhost:3300/getProductById", {
          params: { id: this.id }
        })
        .then(result => {
          if (result.body.status === 0) {
            this.theproduct = result.body.message;
          } else {
            alert("获取列表失败！");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
 

<template>

    <Panel title="登录" :collapsible="false" :bodyStyle="{padding:'20px'}" style="margin:0px auto; width:295px; height:200px">
    <Form ref="form" :model="user" :rules="rules" @validate="errors=$event">
      <div style="margin-bottom:10px">
        <Label for="name" align="left">用户名:</Label>
        <TextBox inputId="name" name="name" placeholder="请输入用户名" v-model="user.name" v-Tooltip="getTipOpts('name')"></TextBox>
      </div>
      <div style="margin-bottom:10px">
        <Label for="password" align="left">密码:</Label>
        <PasswordBox inputId="password" name="password" placeholder="请输入密码" v-model="user.password" v-Tooltip="getTipOpts('password')"></PasswordBox>
      </div>
      <div>
        <LinkButton :disabled="false" @click="submitForm()">Submit</LinkButton>
        <router-link to="HelloWorld">跳转</router-link>
        <router-link to="Main">跳转</router-link>
        
      </div>
    </Form>
    </Panel>

</template>

<script>
export default {
  name:'Login',
  data() {
    return {
      user: {
        name: null,
        password: null
      },
      rules: {
        name: ["required", "length[5,10]"],
        password: ["required"]
      },
      errors: {}
    };
  },
  methods: {
    getError(name) {
      return this.errors[name] && this.errors[name].length
        ? this.errors[name][0]
        : null;
    },
    hasError(name) {
      return this.getError(name) != null;
    },
    getTipOpts(name) {
      return {
        content: this.getError(name),
        closed: !this.hasError(name),
        position: "top"
      };
    },
    submitForm() {
      this.$refs.form.validate(valid => {
        Vue.axios
          .get("https://api.coindesk.com/v1/bpi/currentprice.json")
          .then(response => {
            console.log(response.data);
          });
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10%;
}
.error {
  color: red;
  font-size: 12px;
  margin: 4px 0;
}
</style>
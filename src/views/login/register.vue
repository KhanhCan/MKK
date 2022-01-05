<template>
  <div id="body" class="tc">
    <div id="card">
      <input
        v-model="username"
        class="text-center mb-4"
        type="text"
        placeholder="create username"
      /><br />
      <input
        v-model="email"
        class="text-center mb-4"
        type="email"
        placeholder="email"
      /><br />
      <input
        v-model="password"
        class="text-center mb-4"
        type="password"
        placeholder="password"
      />
      <br />
      <input
        v-model="confirmpassword"
        class="text-center mb-4"
        type="password"
        placeholder="confirmpassword"
      /><br />
      <button
        @click="createUser"
        class="dim ba grow ph3 pv1 nb2 mt4 dib dark-green"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script >
import { Auth } from "../../firebaseDb";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
  },
  methods: {
    createUser() {
      if (this.password != this.confirmpassword) {
        alert("password khong dung");
      } else {
        Auth.createUserWithEmailAndPassword(this.email, this.password).then(
          () => {
            alert("user created");
          }
        );
      }
    },
  },
};
</script>

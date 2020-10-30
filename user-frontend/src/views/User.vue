<template>
    <div>
        <input v-model="username" placeholder="username">
        <button @click="getUserInfoByUsername()">搜索</button>

        <pre>{{ userInfo }}</pre>
    </div>
</template>

<script>
import { getByUsername } from "../api/userService";

export default {
    name: "User",
    data () {
        return {
            username: "",
            userInfo: {}
        }
    },
    methods: {
        getUserInfoByUsername() {
            const _this = this
            const param = {
                username: _this.username
            }
            getByUsername(param).then(res => {
                _this.userInfo = res.data
            })
        }
    }
}
</script>

<style scoped>

</style>

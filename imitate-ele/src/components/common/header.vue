<template>
    <div class="header">
        <span>ele.me</span>
        <span class="right">登录</span>
        <span class="right">|</span>
        <span class="right">注册</span>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang='scss' scoped>
    .header{
        width: 100%;
        height: 45px;
        background-color: #3190e8;
        color: white;
        span{
            line-height:45px;
            margin: 0 10px;
        }
        .right{
            float: right;
        }
        .left{
            float: left;
        }
    }
    .right{
        float: right;
    }
    .left{
        float: left;
    }
</style>

<template>
    <div class="footContainer">
        <ul class="foot">
            <li class="shop active">
                <a @click="goToShop">
                    <span class="glyphicon glyphicon-glass icon"></span>
                    <span class="text">外卖</span>
                </a>
            </li>
            <li class="search">
                <a @click="goToSearch">
                    <span class="glyphicon glyphicon-zoom-in icon"></span>
                    <span class="text">搜索</span>
                </a>
            </li>
            <li class="order">
                <a @click="goToOrder">
                    <span class="glyphicon glyphicon-list-alt icon"></span>
                    <span class="text">订单</span>
                </a>
            </li>
            <li class="person">
                <a @click="goToPerson">
                    <span class="glyphicon glyphicon-user icon"></span>
                    <span class="text">我的</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // todo:  点击链接 图标变色
    data(){
        return {}
    },
    methods:{
        goToShop(){
            let geohash = this.$store.state.exactAddress
            this.$router.push({name: 'index', query: { geohash : geohash}})
        },
        goToSearch(){
            this.$router.push({name: 'search' })
        },
        goToOrder(){
            this.$router.push({name: 'order' })
        },
        goToPerson(){
            this.$router.push({name: 'person' })
        }
    }
}
</script>

<style lang="scss" scoped>
    .footContainer{
        background-color: #fff;
        position: fixed;
        bottom: 0;
        height: 45px;
        width: 100%;
        border: 1px solid #ddd;
        .foot{
            display: flex;
            list-style: none;
            a{
                text-decoration: none;
            }
            li{
                display: block;
                padding: 5px;
                flex: 1;
                text-align: center;
            }
            span{
                display: block;
                font-size: 16px;
                color: #666;
            }
            .text{
                font-size: 14px;
            }
            a:visited{
                color:#119fff;
            }
        }
    }
</style>
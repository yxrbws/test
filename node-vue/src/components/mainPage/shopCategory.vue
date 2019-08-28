<template>
    <div class="categoryContainer">
        <div>
            <ul>
                <li>分类</li>
                <li>排序</li>
                <li>筛选</li>
            </ul>
        </div>
        <div class="shopList">
            <ul>
                <li class="clear list" v-for="item in shopList" :key="item.id" @click="goToShopInfo()">
                    <div class="img">
                        <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">
                    </div>
                    <div class="describe">
                        <div class="shopDesHead">
                            <h4 class="shopTitle ellipsis">{{item.name}}</h4>
                            <ul class="shopSupports">
                                <li v-for="data in item.supports" :key="data.id">{{data.icon_name}}</li>                      
                            </ul>
                        </div>
                        <div class="shopDesCent">
                            <div class="left">
                                <span class="star">★</span>
                                <span class="rate">{{item.rating}}</span>
                                <span>月售{{item.recent_order_num}}单</span>
                            </div>
                            <div class="right">
                                <span class="fenniao">{{item.delivery_mode.text}}</span>
                                <span class="zhunshi" style="color:#57A9FF">准时达</span>
                            </div>
                        </div>
                        <div class="shopDesFeet">
                            <div class="left">
                                <p>￥{{item.float_minimum_order_amount}}起送 / 配送费约{{item.float_delivery_fee}}</p>
                            </div>
                            <div class="right">
                                <p>{{item.distance}} / {{item.order_lead_time}}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            shopList: []
        }
    }
}
</script>

<style lang='scss' scoped>
    .categoryContainer{

        .shopList{
            border-top: 1px solid #ddd;
            background-color: #fff;
            margin-top: 5px;
            ul{
                list-style: none;
                width: 100%;
                .list{
                    height: 105px;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                    .img{
                        float: left;
                        top: 10px;
                        left: 5px;
                        width: 20%;
                        height: auto;
                        margin-right: 10px;
                        img{
                            width: 100%;
                            height: auto;
                        }
                    }
                    .describe{
                        .shopDesHead{
                             display: flex;
                            .shopTitle{
                                font-size: 14px;
                                flex: 7;
                            }
                            .shopTitle:before{
                                content: "\54C1\724C";
                                font-size: 12px;
                                background-color: #ffd930;
                                color: #333;
                                margin-right: 2px;
                                padding: 0 2px;
                                border-radius: 2px;
                            }
                            .shopSupports{
                                flex: 3;
                                list-style: none;
                                margin-right: 10px;
                                li{
                                    // display: inline;
                                    float: right;
                                    font-size: 12px;
                                    color: #999;
                                    margin: 0 1px;
                                }
                            }
                        }
                        .shopDesCent{
                            margin-top: 5px;
                            display: flex;
                            .left{
                                flex: 5;
                                .star{
                                    color: #ff9a0d;
                                    font-size: 16px;
                                    margin: 0;
                                }
                                .rate{
                                    color:#ff9a0d;
                                    font-size: 12px
                                }
                                span{
                                    font-size: 10px;
                                    margin: 0 2px;
                                    color: #999;
                                } 
                            }
                            .right{
                                margin-right: 10px;
                                // flex: 5;
                                .fenniao{
                                    font-size: 12px;
                                    background-color: #57A9FF;
                                    color: #fff;
                                    padding: 0 1px;
                                    border-radius: 2px;
                                }
                                .zhunshi{
                                    font-size: 12px;
                                    background-color: #fff;
                                    color: #57A9FF;
                                    border-radius: 2px;
                                    padding: 0 1px;
                                    border: 1px solid #57A9FF;
                                }
                            }
                        }
                        .shopDesFeet{
                            display: flex;
                            margin-top: 5px;
                            .left{
                                flex: 7;
                                p{
                                    transform: scale(.9);
                                    font-size: .5rem;
                                    color: #666;
                                }
                            }
                            .right{
                                flex: 8;
                                p{
                                    float: right;
                                    transform: scale(.8);
                                    font-size: .5rem;
                                    color: #666;
                                }
                            }
                        }
                        .ellipsis{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                }
                .clear{
                    clear: both;
                }
            }
        }
    }
</style>

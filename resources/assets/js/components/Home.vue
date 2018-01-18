<template>
    <div style="margin-top: 58px;">
        <navbar :select="select"></navbar>
        <div class="vc-card">
            <div class="vc-card-image">
                <img width="100%" height="100%" src="http://www.jyzs.pw/uploads/01.jpg">
            </div>
            <div class="vc-card-content">
                <div class="vc-card-content-inner">
                    “杨畈小学教育之声” 创建于2018年01月18日，是陈小龙先生研发的以同学服务为核心的公益文化+公益+社交+电商平台，增进彼此之间的沟通与交流，聚势待发 谋远共赢。
                </div>
            </div>
        </div>

        <div class="vc-card">
            <div class="vc-card-header">
                <div class="vc-card-title"> 精彩活动 </div>
            </div> <div class="vc-card-content">
            <div class="vc-card-content-inner">
                <div class="vc-list">
                    <a href="javascript:;" class="vc-item">
                        <div class="vc-item-media">
                            <img src="http://www.jyzs.pw/uploads/01.jpg">
                        </div>
                        <div class="vc-item-content">
                            <div class="vc-item-title-row"> <div class="vc-item-title"> 杨畈小学教育之声 </div>
                                <div class="vc-item-title-after"> 2018-01-18 </div>
                            </div>
                            <div class="vc-item-text">  创建于2018年01月18日，是陈小龙先生研发的以同学服务为核心的公益文化+公益+社交+电商平台，增进彼此之间的沟通与交流，聚势待发 谋远共赢  </div>
                        </div>
                    </a>
                    <a href="javascript:;" class="vc-item">
                        <div class="vc-item-media">
                            <img src="http://www.jyzs.pw/uploads/01.jpg">
                        </div>
                        <div class="vc-item-content">
                            <div class="vc-item-title-row">
                                <div class="vc-item-title"> 杨畈小学教育之声 </div>
                                <div class="vc-item-title-after"> 2018-01-18 </div>
                            </div>
                            <div class="vc-item-text">  创建于2018年01月18日，是陈小龙先生研发的以同学服务为核心的公益文化+公益+社交+电商平台，增进彼此之间的沟通与交流，聚势待发 谋远共赢  </div>
                        </div>
                    </a>

                    <a href="javascript:;" class="vc-item">
                        <div class="vc-item-media">
                            <img src="http://www.jyzs.pw/uploads/01.jpg">
                        </div>
                        <div class="vc-item-content">
                            <div class="vc-item-title-row">
                                <div class="vc-item-title"> 杨畈小学教育之声 </div>
                                <div class="vc-item-title-after"> 2018-01-18 </div>
                            </div>
                            <div class="vc-item-text">  创建于2018年01月18日，是陈小龙先生研发的以同学服务为核心的公益文化+公益+社交+电商平台，增进彼此之间的沟通与交流，聚势待发 谋远共赢  </div>
                        </div>
                    </a>
                    <a href="javascript:;" class="vc-item">
                        <div class="vc-item-media">
                            <img src="http://www.jyzs.pw/uploads/01.jpg">
                        </div>
                        <div class="vc-item-content">
                            <div class="vc-item-title-row">
                                <div class="vc-item-title"> 杨畈小学教育之声 </div>
                                <div class="vc-item-title-after"> 2018-01-18 </div>
                            </div>
                            <div class="vc-item-text">  创建于2018年01月18日，是陈小龙先生研发的以同学服务为核心的公益文化+公益+社交+电商平台，增进彼此之间的沟通与交流，聚势待发 谋远共赢  </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    </div>

</template>

<script>
    import Navbar from './common/Navbar'
    export default {
        data() {
            return {
                select:"1"
            }
        },
        methods: {
            go(path) {
                return this.$router.push({path:path});
            }
        },
        components:{
            Navbar
        }
    }
</script>

<style scoped>
a {
    color: #000000;
}
</style>

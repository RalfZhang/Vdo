<template>
    <div>
        <mu-appbar title="关于">
            <mu-icon-button icon='arrow_back' slot="left" @click="back"/>
        </mu-appbar>
        <div>
        
            <div class="title">
            <div>微豆 Vdo</div>
            				<div class="description" style="font-size: 16px;">一个移动端豆瓣 Web 应用</div>
</div>
                <mu-divider />
                <mu-list>
                    <mu-sub-header>访问项目在 GitHub 上的源码</mu-sub-header>

                    <mu-paper>
                        <mu-list-item title="GitHub" href="https://github.com/RalfZhang/Vdo">
                        <mu-icon slot="left" value="link"/>
                        </mu-list-item>
                    </mu-paper>
                        <mu-sub-header>联系我</mu-sub-header>
                    <mu-paper>

                        <mu-list-item title="ralfz.zhang@gmail.com">
                            <mu-icon slot="left" value="email"/>
                        </mu-list-item>
                        <mu-list-item title="@SBZKang" href="http://telegram.me/SBZKang">
                            <mu-icon class="icon-telegram" value=' ' slot="left">
                            </mu-icon>
                        </mu-list-item>
                    </mu-paper>
                </mu-list>
        </div>
    </div>
</template>
<script>
    export default{
      methods: {
        back() {
          this.$router.go(-1);
        },
      },
    };
</script>
<style lang="css" scoped>
    .title{
        color: #474a4f;
        font-size: 48px;
        text-align: center;
        margin: 72px 0;
    }
</style>

<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'LayoutDemo',
  });
</script>

<template>
  <main class="Body_main__q3LJq">
    <div>
      <div>
        <div class="AboutUs_about__inner__15i2d">
          <div class="AboutUs_about__left__2ZHjw">
            <div class="HomeSectionTitle_title__3cfwW">
              <span class="HomeSectionTitle_title__cn__2Nxc8" style="color: rgb(80, 65, 240)">关于我们</span>
              <span class="HomeSectionTitle_title__en__2vuqi" style="color: rgb(80, 65, 240)">/ About Us</span>
            </div>
            <div class="AboutUs_about__title__3CXn5">artmart.</div>
            <div class="AboutUs_description__pEykJ AboutUs_about__company__3XIhH">上海绘脉文化科技有限公司旗下</div>
            <div class="AboutUs_description__pEykJ AboutUs_about__description-1__2KKi2"
              >融汇艺术资讯及生活方式的<em class="AboutUs_description__em__2z0wF AboutUs_description__em--margin-left__lAR5n">国际艺术品交易平台</em>
            </div>
            <div class="AboutUs_description__pEykJ AboutUs_about__description-2__32-g9">以多重方式呈现<em class="AboutUs_description__em__2z0wF">「新潮酷」的艺术新体验</em></div>
            <button class="AboutUs_about__button__35Nrl">立即体验</button>
          </div>
          <div class="AboutUs_about__right__203m1"
            ><img alt="artmart app" class="AboutUs_about__image__39Zfv" src="	https://artmart.cn/static/media/about-us-phone-model-2x.7cb37f41.png" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .Body_main__q3LJq {
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
  }

  .AboutUs_about__inner__15i2d {
    align-items: flex-start;
    box-sizing: border-box;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding-left: 100px;
    padding-top: 80px;
    width: 1200px;
  }

  .AboutUs_about__left__2ZHjw {
    color: #5041f0;
    font-family: Ping fang Sc, Microsoft Yahei, sans-serif;
    width: 632px;
  }

  .AboutUs_about__right__203m1 {
    margin-left: 52px;
  }

  .HomeSectionTitle_title__3cfwW {
    font-family: 'source-han-serif-sc', serif;
    font-weight: 700;
  }

  .AboutUs_about__title__3CXn5 {
    font-family: 'source-han-serif-sc', serif;
    font-weight: 900;
    font-size: 60px;
    line-height: 86px;
    margin-top: 68px;
  }

  .AboutUs_description__pEykJ {
    font-size: 24px;
    line-height: 34px;
  }

  .AboutUs_description__pEykJ {
    font-size: 24px;
    line-height: 34px;
  }

  .AboutUs_about__description-1__2KKi2 {
    margin-top: 20px;
  }

  .HomeSectionTitle_title__cn__2Nxc8 {
    font-size: 36px;
    line-height: 52px;
  }

  .HomeSectionTitle_title__en__2vuqi {
    font-size: 20px;
    line-height: 29px;
    margin-left: 16px;
  }

  .AboutUs_description__em--margin-left__lAR5n {
    margin-left: 7px;
  }

  .AboutUs_description__em__2z0wF {
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 50px;
  }

  .AboutUs_description__pEykJ {
    font-size: 24px;
    line-height: 34px;
  }

  .AboutUs_about__description-2__32-g9 {
    margin-top: 16px;
  }

  .AboutUs_about__button__35Nrl {
    background-color: #fff;
    border: 4px solid #5041f0;
    color: #5041f0;
    cursor: pointer;
    font-size: 28px;
    font-weight: 600;
    line-height: 39px;
    margin-top: 63px;
    padding: 16px 64px 17px;
  }

  .AboutUs_about__right__203m1 {
    margin-left: 52px;
  }

  .AboutUs_about__image__39Zfv {
    width: 360px;
    vertical-align: bottom;
  }

  .wrapper {
    display: flex;
    flex-flow: row nowrap;

    > .left {
      width: 618px;
      flex: 0 1;
      img {
        height: 370px;
        object-fit: cover;
        object-position: center;
        vertical-align: bottom;
        width: 618px;
      }
    }

    > .right {
      width: 309px;
      margin-left: 73px;
      flex: 0 1;
      .up {
        img {
          height: 185px;
          object-fit: cover;
          object-position: center;
          width: 309px;
          vertical-align: bottom;
        }
      }
      .down {
        img {
          height: 185px;
          object-fit: cover;
          object-position: center;
          width: 309px;
          vertical-align: bottom;
        }
      }
    }
  }
</style>

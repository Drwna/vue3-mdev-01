<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'TodayArtwork',
  });
</script>

<template>
  <div class="today-artwork">
    <h2>今日艺术品</h2>
    <img class="image" src="@/assets/images/artmart/art1.png" alt="artwork" />
    <div class="meta">
      <van-row class="row_1" justify="space-between" align="center">
        <van-col>
          <div class="inner_1">
            <img class="avatar" src="@/assets/images/artmart/avatar.png" alt="avatar" />
            <div class="author">吉娜·帕尔 <span>Gina Parr</span></div>
          </div>
        </van-col>
        <van-col>
          <van-icon size="24" name="like-o" />
        </van-col>
      </van-row>
      <van-row class="row_2" justify="space-between" align="center">
        <van-col>
          <div class="name">心与骨（Hearts and bones）</div>
        </van-col>
        <van-col>
          <div class="amount">USD <span>8,610</span></div>
        </van-col>
      </van-row>
      <van-row class="row_3" justify="space-between" align="center">
        <van-col>
          <div class="inner_3">
            <span class="wishlist">18次心愿单</span>
            <span class="view">148次浏览</span>
          </div>
        </van-col>
        <van-col>
          <span class="location">英国·英国伦敦</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .today-artwork {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h2 {
      font-size: 32px;
    }

    > .image {
      max-width: 100%;
      max-height: 400px;
      object-fit: contain;
    }

    > .meta {
      display: flex;
      flex-direction: column;
      gap: 28px;

      .row_1 {
        .inner_1 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .avatar {
          width: 32px;
          object-fit: contain;
        }

        .author {
          font-size: 16px;
          line-height: 16px;
          color: #000;

          span {
            font-size: 14px;
            line-height: 14px;
            color: #999;
          }
        }
      }

      .row_2 {
        .name {
          font-size: 16px;
          line-height: 16px;
          color: #000;
        }

        .amount {
          font-size: 14px;
          line-height: 14px;
          color: #000;

          span {
            font-size: 16px;
            line-height: 16px;
            color: #000;
          }
        }
      }

      .row_3 {
        .inner_3 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .wishlist {
          font-size: 16px;
          line-height: 16px;
          color: #999;
        }

        .view {
          font-size: 14px;
          line-height: 14px;
          color: #999;
        }

        .location {
          font-size: 14px;
          line-height: 14px;
          color: #999;
        }
      }
    }
  }
</style>

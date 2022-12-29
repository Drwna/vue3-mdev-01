<script lang="ts" setup>
  import { defineComponent } from 'vue';

  defineComponent({
    name: 'ArtistRecom',
  });
</script>

<template>
  <div class="artist">
    <h2>艺术家推荐</h2>
    <div class="wrapper">
      <ul>
        <li>
          <div class="info">
            <img class="avatar" src="@/assets/images/artmart/avatar.png" alt="avatar" />
            <span class="author">许鸿飞</span>
            <span class="nationality">中国艺术家，1963</span>
            <div class="follow">
              <button type="button">
                <van-icon name="manager" />
              </button>
            </div>
          </div>
          <div class="images">
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
          </div>
        </li>

        <li>
          <div class="info">
            <img class="avatar" src="@/assets/images/artmart/avatar.png" alt="avatar" />
            <span class="author">许鸿飞</span>
            <span class="nationality">中国艺术家，1963</span>
            <div class="follow">
              <button type="button">
                <van-icon name="manager" />
              </button>
            </div>
          </div>
          <div class="images">
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
          </div>
        </li>

        <li>
          <div class="info">
            <img class="avatar" src="@/assets/images/artmart/avatar.png" alt="avatar" />
            <span class="author">许鸿飞</span>
            <span class="nationality">中国艺术家，1963</span>
            <div class="follow">
              <button type="button">
                <van-icon name="manager" />
              </button>
            </div>
          </div>
          <div class="images">
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
            <img src="@/assets/images/artmart/img1.png" alt="artwork1" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .artist {
    width: 100%;
    padding: 36px 0 20px 0;

    h2 {
      padding-left: 20px;
      font-size: 32px;
    }

    .wrapper {
      padding-top: 30px;

      ul {
        width: 100%;
        padding: 4px 0 4px 20px;
        overflow-x: auto;
        display: flex;
        gap: 12px;

        li {
          padding: 24px;
          width: 584px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

          .info {
            width: 100%;
            display: grid;
            grid-template-columns: 38px auto 56px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-areas:
              'avatar author follow'
              'avatar nationality follow';
            column-gap: 14px;
            row-gap: 8px;
            font-size: 16px;

            .avatar {
              grid-area: avatar;
              width: 36px;
              height: 36px;
              place-self: center center;
            }

            .author {
              font-size: 14px;
              grid-area: author;
            }

            .nationality {
              font-size: 12px;
              color: rgba(0, 0, 0, 0.8);
              grid-area: nationality;
            }

            .follow {
              grid-area: follow;
              color: #fff;
              place-self: center center;

              button {
                width: 50px;
                padding: 8px 14px;
                border-radius: 24px;
                border: none;
                outline: none;
                background-color: #4243e8;
              }
            }
          }

          .images {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
</style>

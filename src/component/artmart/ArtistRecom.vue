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
    margin-top: 36px;
    padding: 36px 0;

    h2 {
      padding-left: 36px;
      font-size: 46px;
    }

    .wrapper {
      padding-top: 48px;

      ul {
        width: 100%;
        padding: 4px 0 0 36px;
        overflow-x: auto;
        display: flex;
        gap: 24px;

        li {
          padding: 24px;
          width: 584px;
          display: flex;
          flex-direction: column;
          gap: 34px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

          .info {
            width: 100%;
            display: grid;
            grid-template-columns: 90px auto 120px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-areas:
              'avatar author follow'
              'avatar nationality follow';
            column-gap: 24px;
            row-gap: 16px;

            .avatar {
              grid-area: avatar;
              width: 78px;
              height: 78px;
            }

            .author {
              grid-area: author;
            }

            .nationality {
              grid-area: nationality;
            }

            .follow {
              grid-area: follow;
              align-self: center;
              color: #fff;
              place-self: center center;

              button {
                width: 100px;
                padding: 20px 24px;
                border-radius: 38px;
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

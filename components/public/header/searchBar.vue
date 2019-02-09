<template>
  <div class="search-bar">
    <el-row class="m-header-search">
      <el-col
        :span="3"
        class="left"
      >
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col
        :span="15"
        class="center"
      >
        <div class="wrapper">
          <el-input
            v-model="search"
            @focus="focus"
            @blur="blur"
            placeholder="搜索商家或地点"
          />

          <el-button
            type="primary"
            icon="el-icon-search"
          >搜索</el-button>
          <dl
            class="hotPlace"
            v-if="isHotPlace"
          >
            <dt>热门搜索</dt>
            <dd
              v-for="(item,index) in hotPlace"
              :key="index"
            >{{item}}</dd>

          </dl>
          <dl
            class="searchList"
            v-if="isSearchList"
          >
            <dd
              v-for="(item,index) in searchList"
              :key="index"
            >{{item}}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link
              to="/"
              class="takeout"
            >美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="movie"
            >猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="hotel"
            >美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="apartment"
            >民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="business"
            >商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right"
      >
        <ul class="security">
          <li><i class="refund" />
            <p class="txt">随时退</p>
          </li>
          <li><i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li><i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {

    return {
      search: '',
      isFocus: false,
      hotPlace: ['火锅', '麻辣烫'],
      searchList: ['海族馆']
    }
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.search
    },
    isSearchList: function () {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus: function () {
      this.isFocus = true
    },
    blur: function () {
      let self = this;
      setTimeout(function () {
        self.isFocus = false
      }, 200)

    }
  }
}
</script>
<style lang="scss">
.search-bar {
  background-color: #fff;
  .m-header-search {
    width: 1190px;
    margin: 0 auto;
    height: 157px;
    padding: 20px 20px;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  .left {
    width: 280px;
    padding-top: 15px;
    img {
      width: 126px;
      height: 46px;
    }
  }
  .center {
    flex: 1;
    width: auto;
    .wrapper {
      border: 1px solid #13d1be;
      border-radius: 4px;
      width: 552px;
      box-sizing: border-box;
      position: relative;
      white-space: nowrap;
      .el-input {
        width: 462px;
      }
      input {
        border: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .el-button {
        width: 88px;
        border: none;
        background: #13d1be;
        font-size: 16px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        vertical-align: -1px;
        i {
          font-weight: bold;
        }
      }
      .hotPlace,
      .searchList {
        position: absolute;
        top: 41px;
        left: 0;
        background: #fff;
        padding: 10px;
        font-size: 12px;
        width: 462px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        border-top: none;
        z-index: 999;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        dt {
          color: #999;
          font-weight: bold;
        }

        dd {
          display: inline-block;
          color: #666;
          margin-right: 10px;
          margin-bottom: 3px;
          margin-top: 5px;
          cursor: pointer;

          &:hover {
            background: #f8f8f8;
            color: #31bbac;
          }
        }

        &.searchList {
          padding: 0;
          margin: 0;
          dd {
            margin: 0;
            padding: 3px 10px;
            display: block;
            line-height: 1.6;
          }
        }
      }
    }
    .nav {
      list-style: none;
      display: flex;
      margin-top: 25px;

      li {
        font-weight: 700;
        font-size: 16px;
        margin: 0 20px;
        cursor: pointer;
        position: relative;

        a {
          color: #222;

          &:hover {
            color: #f04d4e;
          }

          &.takeout:hover {
            color: #fbc700;
          }

          &.apartment:hover {
            color: #fdc411;
          }

          &.business:hover {
            color: #31bbac;
          }
        }
      }
    }

    .suggest {
      width: 552px;
      overflow: hidden;
      padding-left: 16px;
      line-height: 1;
      margin-top: 8px;
      height: 14px;

      a {
        color: #999;
        margin-right: 10px;
        margin-bottom: 3px;
        display: inline-block;
        font-size: 12px;

        &:hover {
          color: #31bbac;
        }
      }
    }
  }
  .right {
    text-align: right;
    padding-top: 15px;

    .security {
      li {
        display: inline-block;
        text-align: center;
        padding: 0 5px;
      }

      i {
        font-style: normal;

        &:after {
          font-family: iconfont;
          font-size: 36px;
          color: #13d1be;
        }
      }

      .refund {
        &:after {
          content: "\e65f";
        }
      }

      .single {
        &:after {
          content: "\e652";
        }
      }

      .overdue {
        &:after {
          content: "\e65e";
        }
      }

      .txt {
        color: #999;
        font-size: 12px;
        line-height: 1;
        margin: 0;
        text-align: center;
      }
    }
  }
}
</style>
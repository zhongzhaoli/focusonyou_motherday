<template>
  <div class="w-100 h-100">
    <div
      class="bg w-100 h-100 pl-bg-test d-flex align-items-center flex-column position-relative justify-content-center"
    >
      <div class="text-center loading_bg" v-if="loading">
        <img class="w-100" src="../../assets/images/loading.gif" alt>
      </div>
      <h3 class="mt-focus" id="title">来自星星的短信</h3>
      <div id="page1" class="d-flex-test w-100 flex-column">
        <span class="text-center mt-1 type-text-color small">类型选择</span>
        <div class="choose_div w-100 d-flex justify-content-center flex-column align-items-center">
          <div id="1" @click="choose_div($event.currentTarget)">早安问候</div>
          <div id="2" @click="choose_div($event.currentTarget)">晚安陪伴</div>
          <div id="3" @click="choose_div($event.currentTarget)">触及真心</div>
        </div>
      </div>
      <div id="page2" class="hide d-flex-test w-100 flex-column align-items-center">
        <span class="text-center mt-1 type-text-color small">完善信息</span>
        <div class="form-group mt-3 w-75">
          <input
            type="text"
            class="form-control small_text_all"
            v-model="request.nickname"
            placeholder="怎么称呼你妈妈呢？如：某妈妈、饲养员等"
          >
        </div>
        <div class="form-group mt-2 w-75">
          <input
            type="text"
            class="form-control small_text_all"
            v-model="request.phone"
            placeholder="你妈妈常用手机号码"
          >
        </div>
        <div class="form-group mt-2 w-75">
          <input
            type="text"
            class="form-control small_text_all"
            v-model="request.remark"
            placeholder="你有什么单独想说的话吗？(选填)"
          >
        </div>
        <button class="btn btn-primary w-75 mt-3 small_text_all" @click="last_btn">下一步</button>
      </div>
      <div id="page3" class="hide w-100">
        <div class="mt-4 text-center">
          <img src="../../assets/images/success.png" class="success_img" alt>
          <h4 class="mt-4 mb-0">恭喜你成功订制了特别短信</h4>
          <div class="mt-5">下面，生成你的母亲节“小小事承诺书”吧</div>
          <button class="btn btn-primary mt-5 w-50" @click="to_url('poster')">点击生成</button>
        </div>
      </div>
      <img class="focus_logo" src="../../assets/images/focus.png" alt>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import { axios } from "axios";
export default {
  data() {
    return {
      page: 1,
      loading: true,
      can_post: true,
      request: {
        type: "",
        nickname: "",
        phone: "",
        remark: ""
      }
    };
  },
  created() {
    $("input,select").blur(function() {
      setTimeout(function() {
        var scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
      }, 100);
    });
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    choose_div(a) {
      $(".active").removeClass("active");
      $(a).addClass("active");
      this.page = 2;
      this.request.type = a.id;
      setTimeout(() => {
        $("#page1").hide();
        $("#page2").removeClass("hide");
      }, 300);
    },
    last_btn() {
      let that = this;
      this.page = 3;
      // 发送一个 POST 请求
      this.loading = true;
      if (!this.can_post) {
        return;
      }
      this.can_post = false;
      this.$post("/mother/message", this.request).then(
        mes => {
          that.loading = false;
          this.can_post = true;
          $(".pl-bg-test").removeClass("justify-content-center");
          $("#page2").hide();
          $("#title").hide();
          $("#page3").show("fast");
        },
        mes => {
          this.can_post = true;
          this.loading = false;
          var al_ = true;
          for (var i in mes.data) {
            if (al_) {
              alert(mes.data[i][0]);
              al_ = false;
            }
          }
        }
      );
    },
    back_btn() {
      this.page = 1;
      $("#page2").addClass("hide");
      $("#page1").show("fast");
    },
    to_url(a) {
      this.$router.push({ name: a });
    }
  }
};
</script>
<style>
@import "./index.less";
</style>


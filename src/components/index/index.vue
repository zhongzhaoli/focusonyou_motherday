<template>
  <div class="w-100 h-100">
    <div class="bg w-100 h-100 pl-bg-test d-flex align-items-center flex-column position-relative">
      <h3 class="mt-5" id="title">来自星星的短信</h3>
      <div id="page1" class="d-flex-test w-100 flex-column">
        <span class="text-center mt-1 type-text-color small">类型选择</span>
        <div class="choose_div w-100 d-flex justify-content-center flex-column align-items-center">
          <div id="12sd" data-id="1" @click="choose_div($event.currentTarget)">早安问候</div>
          <div data-id="2" @click="choose_div($event.currentTarget)">晚安陪伴</div>
          <div data-id="3" @click="choose_div($event.currentTarget)">触及真心</div>
        </div>
      </div>
      <div id="page2" class="hide d-flex-test w-100 flex-column align-items-center">
        <span class="text-center mt-1 type-text-color small">完善信息</span>
        <div class="form-group mt-3 w-75">
          <input type="text" class="form-control" placeholder="称呼">
        </div>
        <div class="form-group mt-3 w-75">
          <input type="text" class="form-control" placeholder="手机号">
        </div>
        <div class="form-group mt-3 w-75">
          <input type="text" class="form-control" placeholder="想说的话">
        </div>
        <button class="btn btn-primary w-75 mt-3" @click="last_btn">下一步</button>
        <button class="btn btn-primary w-75 mt-3" @click="back_btn">上一步</button>
      </div>
      <div id="page3" class="hide w-100">
        <div class="mt-5 text-center">
          <img src="../../assets/images/success.png" class="success_img" alt>
          <h4 class="mt-4 mb-0">恭喜你成功订制了特别短信</h4>
          <div class="mt-5">下面，生成你的母亲节“小小事承诺书”吧</div>
          <button class="btn btn-primary mt-5 w-50">点击生成</button>
        </div>
      </div>
      <img class="focus_logo" src="../../assets/images/focus.png" alt>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  created() {},
  methods: {
    choose_div(a) {
      var options = {};
      $(".active").removeClass("active");
      $(a).addClass("active");
      setTimeout(() => {
        $("#page1").hide("fast");
        $("#page2").removeClass("hide", 300);
      }, 300);
    },
    last_btn() {
      setTimeout(() => {
        $("#page2").hide("fast", () => {
          $("#title").hide();
          $("#page3").show("fast");
        });
      }, 300);
    },
    back_btn() {
      $("#page2").addClass("hide");
      $("#page1").show("fast");
    }
  }
};
</script>
<style>
@import "./index.less";
</style>


<template>
  <div class="w-100 h-100">
    <div
      class="bg w-100 h-100 pl-bg-test d-flex align-items-center flex-column position-relative justify-content-center"
    >
      <h3 class="mt-focus" id="title">小小事承诺书</h3>
      <div
        id="page2"
        class="w-100 d-flex-test align-items-center flex-column position-relative justify-content-center hide"
      >
        <span class="text-center mt-1 type-text-color small">选择一件要承诺的事</span>
        <div class="content_div mt-4 w-80">
          <div
            class="w-100 d-flex align-items-center justify-content-between border-bottom pb-2 pt-2"
            @click="cn_choose($event.currentTarget)"
          >
            <div class="flex-1 cn_text">
              <span class="cn_text_span">{{ cn[cn_num] }}</span>
            </div>
            <div class="check_div text-center">
              <i class="fa fa-check hide"></i>
            </div>
          </div>
          <div
            class="w-100 d-flex align-items-center justify-content-between border-bottom pb-2 pt-2"
            @click="cn_choose($event.currentTarget)"
          >
            <div class="flex-1 cn_text">
              <span class="cn_text_span">{{ cn[cn_num + 1] }}</span>
            </div>
            <div class="check_div text-center">
              <i class="fa fa-check hide"></i>
            </div>
          </div>
          <div
            class="w-100 d-flex align-items-center justify-content-between border-bottom pb-2 pt-2"
            @click="cn_choose($event.currentTarget)"
          >
            <div class="flex-1 cn_text">
              <span class="cn_text_span">{{ cn[cn_num + 2] }}</span>
            </div>
            <div class="check_div text-center">
              <i class="fa fa-check hide"></i>
            </div>
          </div>
          <div
            class="w-100 d-flex align-items-center justify-content-between border-bottom pb-2 pt-2"
            @click="cn_choose($event.currentTarget)"
          >
            <div class="flex-1 cn_text">
              <span class="cn_text_span">{{ cn[cn_num + 3] }}</span>
            </div>
            <div class="check_div text-center">
              <i class="fa fa-check hide"></i>
            </div>
          </div>
          <div
            class="w-100 d-flex align-items-center justify-content-between border-bottom pb-2 pt-2"
            @click="cn_choose($event.currentTarget)"
          >
            <div class="flex-1 cn_text">
              <span class="cn_text_span">{{ cn[cn_num + 4] }}</span>
            </div>
            <div class="check_div text-center">
              <i class="fa fa-check hide"></i>
            </div>
          </div>
        </div>
        <div class="text-center text-dark mt-3 refresh" @click="refresh">
          <i class="fa fa-refresh"></i>
          <span>换一批</span>
        </div>
        <button class="btn btn-primary w-80 mt-3" @click="to_url('poster_success?name=123')">生成承诺书</button>
      </div>

      <div
        id="page1"
        class="w-100 d-flex-test align-items-center flex-column position-relative justify-content-center"
      >
        <span class="text-center mt-1 type-text-color">填写承诺人</span>
        <input type="text" class="form-control w-80 mt-4 small_text_all" v-model="name" placeholder="承诺人">
        <button class="btn btn-primary w-80 mt-3 small_text_all" @click="first_click">下一步</button>
      </div>
      <img class="focus_logo" src="../../assets/images/focus.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cn_num: 0,
      cn_text: "",
      name: "",
      cn: [
        "跟妈妈一起去做美甲",
        "跟妈妈撒一次娇",
        "陪妈妈做一道点心",
        "跟妈妈一起做一次手工",
        "陪妈妈一起养好一盆花",
        "跟妈妈一起精心布置一下家里",
        "和妈妈一起去晨跑",
        "跟妈妈打一次羽毛球",
        "为妈妈亲手做一份礼物",
        "陪妈妈睡觉",
        "陪妈妈打麻将",
        "陪妈妈一起吐槽爸爸",
        "陪妈妈一起煲剧",
        "陪妈妈一起去ktv唱k",
        "陪妈妈一起回忆过去",
        "陪妈妈去美容院做个spa",
        "陪妈妈一起去理发店做个美美的头发",
        "陪妈妈一起去拍生活写真",
        "给妈妈买一张很舒服的靠椅",
        "陪妈妈去野餐",
        "亲手烤蛋糕，饼干祝福妈妈",
        "给妈妈洗脚",
        "陪妈妈看一场妈妈喜欢的男星演唱会",
        "陪妈妈一起分享在校园生活有趣的事",
        "和妈妈分享一个自己的小秘密",
        "陪妈妈去做瑜伽",
        "陪妈妈去听一次话剧",
        "陪妈妈再拍一次婚纱照",
        "陪妈妈一起织毛衣和围巾",
        "陪妈妈一起吃饭",
        "陪妈妈一起逛街",
        "陪妈妈一起看电影",
        "给妈妈做一顿饭",
        "帮妈妈做家务",
        "给妈妈买一束花",
        "给妈妈挑一件礼物",
        "陪妈妈一起运动",
        "陪妈妈一起散步",
        "陪妈妈一起敷面膜",
        "跟妈妈一起自拍",
        "陪妈妈一起买菜",
        "陪妈妈一起旅行",
        "给妈妈写一封信",
        "对妈妈说一句“我爱你”",
        "偷偷给妈妈买她喜欢又不舍得的东西",
        "给妈妈画个妆",
        "陪妈妈跳广场舞",
        "帮妈妈吹头发",
        "帮妈妈“马杀鸡",
        "给妈妈打个电话"
      ]
    };
  },
  created() {},
  methods: {
    cn_choose(a) {
      $(".content_div > div")
        .find("i")
        .addClass("hide");
      $(a)
        .find("i")
        .removeClass("hide");
      this.cn_text = $(a)
        .find(".cn_text_span")
        .html();
    },
    first_click() {
      if (!this.name == "") {
        $("#page1").hide();
        $("#page2").removeClass("hide");
      } else {
        alert("承诺人不能为空哦");
      }
    },
    refresh() {
      $(".content_div > div")
        .find("i")
        .addClass("hide");
      this.cn_text = "";
      if (this.cn_num / 5 >= 9) {
        this.cn_num = 0;
      } else {
        this.cn_num = this.cn_num + 5;
      }
    },
    to_url(a) {
      this.$router.push({
        path: a,
        query: {
          name: this.name,
          text: this.cn_text
        }
      });
    }
  }
};
</script>
<style>
@import "./poster.less";
</style>


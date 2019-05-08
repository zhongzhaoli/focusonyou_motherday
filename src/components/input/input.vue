<template>
  <div class="w-100 h-100">
    <div class="bg w-100 h-100 pl-bg-test d-flex align-items-center flex-column position-relative">
      <h3 class="mt-5">来自星星的短信</h3>
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
      <button class="btn btn-primary w-75 mt-3">下一步</button>
      <img class="focus_logo" src="../../assets/images/focus.png" alt="">
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
@import "./input.less";
</style>
<!-- 空视图组件 -->
<template>
  <div :class="['ele-empty',customClass]">
    <div class="ele-empty-icon">
      <slot name="icon">
        <svg class="ele-empty-icon-default" width="64" height="41" viewBox="0 0 64 41"
             xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
            <ellipse class="ele-empty-icon-default-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
            <g class="ele-empty-icon-default-g" fill-rule="nonzero">
              <path
                  d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
              <path
                  d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                  class="ele-empty-icon-default-path"></path>
            </g>
          </g>
        </svg>
      </slot>
    </div>
    <div class="ele-empty-text">{{ text }}</div>
    <div class="ele-empty-actions">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "EleEmpty",
  props: {
    text: {
      type: String,
      default: '暂无数据'
    },
    customClass: [String, Object]
  }
}
</script>

<style>
.ele-empty {
  color: #CCC;
  padding: 35px 0;
  text-align: center;
  position: relative;
  line-height: 1;
}

.ele-empty-icon {
  color: hsla(0, 0%, 60%, .25);
  font-size: 58px;
}

.ele-empty-text {
  padding: 6px 0;
}

.ele-empty-icon-default-ellipse {
  fill: #f5f5f5;
}

.ele-empty-icon-default-g {
  stroke: #d9d9d9;
}

.ele-empty-icon-default-path {
  fill: #fafafa;
}
</style>
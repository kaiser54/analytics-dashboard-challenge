<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: center;
  /* align-items: center; */
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--bg);
}
</style>

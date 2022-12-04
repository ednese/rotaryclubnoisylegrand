<template>
  <div class="Input" :class="classes">
    <textarea
      class="Input__input"
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
      @change="emit('change', $event)"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
      @input="emit('input', $event)"
      v-if="textarea"
    />
    <input
      v-else
      class="Input__input"
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
      @change="emit('change', $event)"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
      @input="emit('input', $event)"
    />
  </div>
</template>

<style lang="stylus">
.Input--error
  .Input__input
    &,
    &:hover,
    &:focus
      box-shadow 0 0 0 2px var(--input--error-color)
      caret-color var(--input--error-color)

.Input__input
  width 100%
  height rem(48)
  font-family 'Open Sans'
  font-size rem(16)
  user-select none
  padding rem(12)
  border none
  outline none
  border solid 1px
  border-color none
  background-color rgba(0,0,0,.05)
  border-color rgba(0,0,0,0)
  transition border-color 200ms

  &:hover
    background-color rgba(0,0,0,.08)

  &::placeholder
    color var(--color-text-secondary)

  &:focus
    border-color var(--color-text)
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { useVModel } from '@vueuse/core';

export interface InputProps {
  modelValue: string;
  placeholder?: string;
  type?: HTMLInputElement['type'];
  isError?: boolean;
  textarea?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: '',
  isError: false,
  textarea: false,
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
  (name: 'input', value: Event): void;
}>();

const modelValue = useVModel(props, 'modelValue', emit);

const classes = computed(() => ({
  'Input--error': props.isError,
}));
</script>

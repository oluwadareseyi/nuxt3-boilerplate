<script lang="ts" setup>
type ButtonType = "primary" | "icon";
type ButtonColor = "outline" | "black" | "dark";
const Link = resolveComponent("NuxtLink");

const props = defineProps({
    buttonType: {
        type: String as PropType<ButtonType>,
        default: "primary",
    },
    color: {
        type: String as PropType<ButtonColor>,
        default: "outline",
    },
    loading: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: "",
    },
    href: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    reversed: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{
    (event: "click"): void;
}>();

const classNames = computed((): (string | boolean)[] => [
    "c-button",
    props.buttonType && `c-button--${props.buttonType}`,
    props.color && `c-button--${props.color}`,
    props.buttonType !== "icon" && props.icon && "c-button--withicon",
    props.buttonType !== "icon" && props.icon && props.reversed && "c-button--reversed",
    props.disabled && "c-button--disabled",
]);

const click = () => {
    emit("click");
};
</script>

<template>
    <component :is="href ? Link : 'button'" :to="href" :class="classNames" :target="href && !href.startsWith('/') ? '_blank' : ''" :disabled="loading || disabled" @click="click">
        <span v-if="icon" class="c-button__icon"> </span>
        <span v-if="buttonType !== 'icon'" class="c-button__text" data-button-text>
            <slot />
        </span>
    </component>
</template>

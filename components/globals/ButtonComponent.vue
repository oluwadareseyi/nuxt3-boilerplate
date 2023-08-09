<script lang="ts" setup>
type ButtonType = "primary" | "secondary" | "icon";
type ButtonColor = "solid" | "outline" | "white";
type ButtonSize = "small" | "medium" | "large";

const props = defineProps({
    buttonType: {
        type: String as PropType<ButtonType>,
        default: "primary",
    },
    color: {
        type: String as PropType<ButtonColor>,
        default: "outline",
    },
    size: {
        type: String as PropType<ButtonSize>,
        default: "medium",
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
    props.size && `c-button--${props.size}`,
    props.buttonType !== "icon" && props.icon && "c-button--withicon",
    props.buttonType !== "icon" && props.icon && props.reversed && "c-button--reversed",
    props.disabled && "c-button--disabled",
]);

const click = () => {
    emit("click");
};
</script>

<template>
    <component
        :is="href ? 'nuxt-link' : 'button'"
        :href="href"
        :to="href && href.startsWith('/') ? href : ''"
        :class="classNames"
        :target="href && !href.startsWith('/') && '_blank'"
        :disabled="loading || disabled"
        @click="click"
    >
        <span v-if="icon && reversed" class="c-button__icon">
            <component :is="icon" />
        </span>
        <span v-if="buttonType !== 'icon'" class="c-button__text" data-button-text>
            <slot />
        </span>
        <span v-if="icon && !reversed" class="c-button__icon">
            <component :is="icon" />
        </span>
    </component>
</template>

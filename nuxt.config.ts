// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Nuxt Starter",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "format-detection", content: "telephone=no" },
                {
                    hid: "description",
                    name: "description",
                    content: "This is a starter Nuxt project",
                },
                {
                    property: "og:image",
                    hid: "og:image",
                    content: "",
                },
                {
                    property: "twitter:card",
                    hid: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    property: "twitter:url",
                    hid: "twitter:url",
                    content: "https://pithafrica.com/",
                },
                {
                    property: "twitter:title",
                    hid: "twitter:title",
                    content: "Nuxt Starter",
                },
                {
                    property: "twitter:description",
                    hid: "twitter:description",
                    content: "This is a starter Nuxt project",
                },
                {
                    property: "twitter:image",
                    hid: "twitter:image",
                    content: "",
                },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },
    components: ["~/components/globals", "~/components"],
    css: ["@/styles/index.scss"],
    modules: ["@pinia/nuxt"],
});

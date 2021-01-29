module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: true,
        content: [
            "./components/**/*.js",
            "./components/*.js",
            "./pages/**/*.js",
            "./pages/*.js",
            "./utils/*.js",
        ],
        options: {
            whitelist: [],
        },
    },
    theme: {
        extend: {
            backgroundSize: {
                full: "100%",
            },
        },
    },
    variants: [
        "responsive",
        "group-hover",
        "focus-within",
        "first",
        "last",
        "odd",
        "even",
        "hover",
        "focus",
        "active",
        "visited",
        "disabled",
    ],
    plugins: [],
};

// https://github.com/gatsbyjs/gatsby/issues/21548
const getBrowserLanguage = () => {
    if (typeof navigator === `undefined`) {
        return "en";
    }

    const lang = navigator && navigator.language && navigator.language.split("-")[0];
    if (!lang) return "en";

    switch (lang) {
        case "ja":
            return "ja";
        case "zh":
            return "zh";
        default:
            return "en";
    }
};

export default getBrowserLanguage

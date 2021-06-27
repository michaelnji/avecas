function formatTags(val) {
    try {
        let formatted = val.split("@");
        let result = [];
        for (let index = 0; index < formatted.length; index++) {
            const tag = formatted[index].trim();
            let newTag = {};
            switch (tag) {
                case "important":
                    newTag = {
                        text: tag,
                        type: "error",
                    };
                    break;
                case "bad":
                    newTag = {
                        text: tag,
                        type: "error",
                    };
                    break;
                case "happy":
                    newTag = {
                        text: tag,
                        type: "success",
                    };
                    break;
                case "feeling loved":
                    newTag = {
                        text: tag,
                        type: "success",
                    };
                    break;
                case "sad":
                    newTag = {
                        text: tag,
                        type: "warning",
                    };
                    break;

                default:
                    newTag = {
                        text: tag,
                        type: "info",
                    };
                    break;
            }
            result.push(newTag);
        }
        return result;
    } catch (err) {
        return [];
    }
    // result.reverse().pop();
}
function arrayToString(val) {
    try {
        let results = "";
        val = val.reverse();
        val.pop();
        val = val.reverse();
        val.forEach((el) => {
            results = results + "@" + el.text + " ";
        });
        return results;
    } catch (err) {
        return "";
    }
}
export default {
    formatTags,
    arrayToString,
};

let db = localStorage;
function getOrSetItem(key, value = "") {
    if (db.getItem(key) == null) {
        db.setItem(key, JSON.stringify(value));
    } else {
        return JSON.parse(db.getItem(key));
    }
    return value;
}
function getItemValue(key) {
    if (db.getItem(key) !== null) {
        return JSON.parse(db.getItem(key));
    } else return null;
}

function setItemValue(key, value = "") {
    if (key !== null) {
        db.setItem(key, JSON.stringify(value));
        return value;
    } else return null;
}
function clearDB() {
    db.clear();
}

export default {
    getItemValue,
    getOrSetItem,
    setItemValue,
    clearDB,
};

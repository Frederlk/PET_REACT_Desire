export const findNested = (obj, key, value) => {
    // Base case
    if (obj[key] === value) {
        return obj;
    } else {
        let keys = Object.keys(obj); // add this line to iterate over the keys

        for (let i = 0, len = keys.length; i < len; i++) {
            let k = keys[i]; // use this key for iteration, instead of index "i"

            // add "obj[k] &&" to ignore null values
            if (obj[k] && typeof obj[k] == "object") {
                let found = findNested(obj[k], key, value);
                if (found) {
                    // If the object was found in the recursive call, bubble it up.
                    return found;
                }
            }
        }
    }
};

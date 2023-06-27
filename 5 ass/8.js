function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }
    const counts = new Map();
    const original = [];
    for (const num of changed) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    for (const num of changed) {
        if (counts.get(num) > 0) {
            if (counts.has(num * 2) && counts.get(num * 2) > 0) {
                original.push(num);
                counts.set(num, counts.get(num) - 1);
                counts.set(num * 2, counts.get(num * 2) - 1);
            } else {
                return [];
            }
        }
    }
    return original;
}
const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result); // Output : [1, 3, 4]

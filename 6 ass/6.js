function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }
    
    changed.sort((a, b) => a - b);
    const original = [];
    
    for (let i = 0; i < changed.length; i++) {
        const half = changed[i] / 2;
        const halfIndex = changed.indexOf(half);
        
        if (changed[i] % 2 === 0 && halfIndex !== -1) {
            original.push(half);
            changed.splice(halfIndex, 1);
        } else {
            return [];
        }
    }
    
    return original;
}
const changed = [1, 3, 4, 2, 6, 8];
console.log(findOriginalArray(changed));  // Output: [1, 3, 4]

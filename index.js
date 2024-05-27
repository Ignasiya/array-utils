/**
 * Функция для удаления дубликатов из массива
 * @param {*} arr 
 * @returns 
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

/**
 * Функция для перемешивания элементов массива
 * @param {*} arr 
 * @returns 
 */
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

/**
 * Функция для группировки элементов массива по заданному критерию
 * @param {*} arr 
 * @param {*} key 
 * @returns 
 */
function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        const groupKey = typeof key === 'function' ? key(item) : item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
}

/**
 * Функция для фильтрации элементов массива по заданному критерию
 * @param {*} arr 
 * @param {*} criteria 
 * @returns 
 */
function filterBy(arr, criteria) {
    return arr.filter(item => {
        return Object.keys(criteria).every(key => {
            return item[key] === criteria[key];
        });
    });
}

module.exports = {
    removeDuplicates,
    shuffleArray,
    groupBy,
    filterBy
};
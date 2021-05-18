/**
 * 交换两个数据
 * @param {Array} arr 目标数组 
 * @param {Number} i
 * @param {Number} j 
 */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * 获取一个随机整数
 * @param {Number} min 随机整数的最小值
 * @param {Number} max 随机整数的最大值
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 生成一个随机数的数据
 * @param {Number} length 要生成的数据的数组长度
 * @param {Number} min 每一项的最小值
 * @param {Number} max 每一项的最大值
 */
function generateRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(getRandomInt(min, max));
    }
    return arr;
}

/**
 * 检验排序算法是否正确
 * @param {Function} sortFun 排序算法
 */
function checkSortFun(sortFun) {
    const arr = generateRandomArray(1000, 1, 1000);
    const arr2 = [...arr];
    arr2.sort((a, b) => a - b);
    sortFun(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            console.error("排序算法错误，和数组默认的升序排序结果不一致，排序的数据为：" + arr);
        }
    }
}

module.exports = {
    swap,
    getRandomInt,
    generateRandomArray,
    checkSortFun
}
const utils = require('./utils');

/**
 * 选择排序
 * @param {Array} arr 需要排序的数组
 */
function selectionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("所给的参数，不满足数组的排序规则，参数为：" + arr)
    }
    let arrLength = arr.length;
    for (let i = 0; i < arrLength - 1; i++) {
        let minPos = i;
        for (let j = i + 1; j < arrLength; j++) {
            minPos = arr[minPos] > arr[j] ? j : minPos;
        }
        utils.swap(arr, i, minPos);
    }
}


module.exports = {
    selectionSort: function () {
        try {
            selectionSort(null);
        } catch (e) {
            console.log("校验异常情况:", e.message);
        }

        try {
            selectionSort(undefined);
        } catch (e) {
            console.log("校验异常情况:", e.message);
        }

        try {
            selectionSort([]);
        } catch (e) {
            console.log("校验异常情况", e.message);
        }

        try {
            selectionSort([1]);
        } catch (e) {
            console.log("校验异常情况", e.message);
        }

        for (let i = 0; i < 1000; i++) {
            utils.checkSortFun(selectionSort);
        }
        console.log("选择排序实现方式，满足算法规则");
    }
}
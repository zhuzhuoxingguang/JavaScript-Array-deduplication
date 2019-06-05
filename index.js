// 数组去重的方法很多，我也只能将我自己能够想到的列举出来，也没有什么顺序可言，都是脑袋里面蹦跶出来哪个，就先写哪个
/**
 * 方法一：ES6的数据结构Set
 * ES6当中的数据结构Set天然不带重复的
 * 这可能是代码量最少的数组去重的方法了
 */

function deduplication1 (arr) {
  return [...new Set(arr)]
}

/**
 * 方法二：ES6的数据结构Map
 * 既然利用了一次Set，没道理不用一次Map，是不是?
 * 至于最后返回的是map.keys，还是map.values也就是你的个人喜好了
 */
function deduplication2 (arr) {
  let map = new Map();
  arr.forEach(function (item) {
    map.set(item, item)
  })
  return [...map.keys()]
}

/**
 * 方法三：最原始的方法，进行两次循环比较
 * 这个方法采用的方法是拿第一次循环出来的每一个数据跟后面剩余的所有数据一个个比较，如果后面的数据当中没有与当前数据相同的数据，则存入新数组当中，最后返回新数组
 * 这就导致，每一次存放的都是当前数组当中所有相同元素当中的最后一位
 */
function deduplication3 (arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    var flag = true;　　　　　　// 定义一个标签
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) newArr.push(arr[i])
  }
  return newArr
}

/**
 * 方法四：有前一个方法引申出来的，利用数组的indexOf方法
 */
function deduplication4 (arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

/**
 *  方法五：这可能是大多数人都知道，也能够写出来的一个方法了
 *  需要注意的是，在做hash值赋值的时候，一定要赋一个truthy值，千万不能把元素本身的值赋值过去，原因在于hash[arr[i]]这个条件判断
 */
function deduplication5 (arr) {
  var newArr = []
  var hash = {}
  for (var i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 'abc'
      newArr.push(arr[i])
    }
  }
  return newArr
}

/**
 * 方法六：利用数组的过滤方法filter
 * 理解arr.indexOf(item) === index即可，是说只有第一次查找到的元素才会被过滤出来
 */
function deduplication6 (arr) {
  var newArr = arr.filter(function (item, index) {
    return arr.indexOf(item) === index
  })
  return newArr
}


/**
 * 方法七：利用数组方法reduce
 */
function deduplication7 (arr) {
  var newArr = []
  arr.reduce(function (acc, item, index) {
    if (acc.indexOf(item) === -1) acc.push(item)
    return acc
  }, newArr)
  return newArr
}



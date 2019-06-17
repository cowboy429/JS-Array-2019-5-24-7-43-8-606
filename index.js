    // 阅读推荐的链接，复习JavaScript中数组的相关方法
    // 写程序判断下列变量是不是数组类型。
    var a = '[a, b, c, d]';
    console.log(typeof a)
    var b = [1, 2, 3, 4];
    console.log(typeof b)
    //TODO

    // 编写程序，将下面数组中的每一项都乘以2。
    var a = [1, 2, 3, 4, 5];
    var result = [];
    for (var i=0;i<a.length;i++){
        result.push(a[i]*2);
    }
    console.log(result)
    // TODO should output [2,4,6,8,10]

    // 编写程序，按下面的要求输出结果。
    var colors = ["Red", "Green", "White", "Black"];
    console.log(colors.join(" ")); ;
    console.log(colors.join("+"));;
    console.log(colors.join(","));;
    //TODO case 1 output: 'Red Green White Black'
    // case 2 output: 'Red+Green+White+Black'
    // case 3 output: 'Red,Green,White,Black'

    // 编写程序，将下面数组中的数字按从大到小的顺序排序。
    var a = [5, 1, 8, 10, 4];
    console.log(a.sort((sortNumber)))
    function sortNumber(a,b)
    {
        return b - a;
    }
    //TODO should output: [10,8,5,4,1]

    // 编程程序，找出下列数组中出现频率最高的元素。
    var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    //TODO should output: 'a'
    function findMost(arr) {
        var maxEle;
        var maxNum = 1;
        var obj = arr.reduce(function (p,k) {
            p[k]?p[k]++:p[k]=1;
            if (p[k]>maxNum){
                maxEle = k;
                maxNum++;
            }
            return p;
        },{});
        return maxEle;
    }
    console.log(findMost(a));

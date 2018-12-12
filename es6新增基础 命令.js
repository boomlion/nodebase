//console    ，alert  等命令是浏览器的命令 ，可以直接用


//node就是 在js运行环境下的后台语言


//可以使用settimeout  setInterver等仍然保留



//es6的新语法：let  和 const，，变量 不提升，所以 更多的是使用这两个


let con=6532;
//变量不提升 
//无法重复声明


const iii=2;
//变量无法提升
//无法重复 声明
//不可可以再次赋值


//对于数组的方法
let arr=[653,846532,65];


let arr1=arr.map(function(v,i,arr){
//他会创建一个空数组，吧你的数组存在里面，然后进行返回
return v*2
})



arr.forEach((v,i,arr)=>{
//简单的遍历
console.log(v)
})


arr.filter((v)=>{
  //返回符合条件的数组成员
  return v>6532
})

arr.find(v=>{
  //返回 符合条件的第一个
  return v>65230
})


arr.findIndex(v=>{
  //返回条件的第一个下标
  return v>6532
})

arr.some(v=>{
  //判断数中是否 含有符合条件的，返回值boolean
  return v>6523
})


arr.every(v=>{

  //判断数组是否全部符合条件
  return v>4653
})
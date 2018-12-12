//很多的包都需要进行进入  比如读取文件的fs  
//路径的path
//node的服务器的http和server等 

//首先是引包过程
const fs=require('fs');
//文件读取
const http=require('http');
//服务器搭建
const path=require('path');
//用于路径
const server=http.createServer();
//服务器的 响应等的基础搭建

//读取文件
fs.readFile('./node的基础命令.js','utf-8',(err,data)=>{
  if(err){
      console.log('第一个参数为路径，第二个为可选的编译语言,第三个为回调 函数');
      return;
  }
  console.log(data);
})
//重写文件，就只直接写，不问里面的什么内容
fs.writeFile('./node的基础命令.js','第一个为路径 ，第二个为书写的内容，第三个为可选，第四个为回调函数','utf-8',err=>{
  if(err){
      console.log('可能出错了');
      return;
  }
  console.log('成功了')
})


//追加内容
fs.appendFile('./node的基础命令.js','第一个为路径 ，第二个追加的内容，第三个为可选，第四个为回调函数','utf-8',err=>{
  if(err){
      console.log('可能出错了u');
      return;
  }
  console.log('成功了');  
})

//更改名字
fs.rename('目录','新名字 ',err=>{
  if(err){
    console.log('失败了')
    return;
  }
})
//删除文件
fs.unlink('路径名',err=>{
  if(err){
  console.log('失败了')  ;
  return;
  }
})

//全局的方法
__dirname;
//文件的路径
__filename;
//包括自身的路径


path.join('就是对路径进行规范正反斜杠');
let str='//http:/index.html?nkml=kl&nkml=,;'
path.basename('返回文件的最后一部分**.html');
path.dirname('返回目录的路径  //5123//***//**/等');
path.extname('后缀名  .html');



//服务器的搭建
server.on('request',(req,res)=>{
//req为请求名令，可以进行获取内容
req.url//获取请求地址 
req.method//获取请求方式
req.header//获取请求头


//res为设置响应头
res.statusCode=200//响应状态码
res.statusMessage='bhnjkml'//设置响应
 //请求行 
res.writeHead('状态码','写内容',{
  'content-type':'text/html;charset=utf-8'//编译语言
})

//内容内容
res.write();

res.end();


});

server.listen(9999,()=>{
  console.log('已开启9999端口，')
});




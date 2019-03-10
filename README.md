# Source-location
用于定位源码位置的cli

## 什么是source-location
由于生产环境代码是编译后代码，搜集到报错信息的行和列无法在源码中对应，source-location是用来定位到源码位置的命令行小工具，帮助快速定位源码位置，提升效率。

## 使用方法
首先在本地打包找到和生产环境相同版本的源码，编译生产一份带map文件的代码，然后找到报错文件对应的map文件

## 全局安装
```bash
npm i source-location -g
```

## 命令
```bash
sl <mapFilePath> <line> <column>
```
参数含义如下：
* mapFilePath 对应的map文件地址
* line 报错代码行号
* column 报错代码列数

示例:
```bash
sl dist/1.f47efcb58028826c7c05.js.map 1 34 
```

结果：  
<img src="https://github.com/front-end-yu/source-location/blob/master/lib/img/res.png" width="850" height="200"><br />



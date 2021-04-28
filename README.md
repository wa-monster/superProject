# superProject

我们的超级大项目

### update 20210428 更新服务端接口

* ./node-server 服务端 原生node.js 数据库 mysql

    | 地址   | 类型  |  参数(*为必填) | 说明 |
    | :----- |  :-----  | :----- |  :----- | :----- |
    | /api/blog/list | GET | author,keyword | 获取博客列表|
    | /api/blog/detail | GET |id*  |获取博客详情|
    | /api/blog/new | POST |title* ,content* , author*|创建新博客|
    | /api/blog/update |POST | title*, content*, id* |更新博客|
    | /api/blog/delete | POST| id*, author*|删除博客|
    | /api/user/login |POST | username*, password* |登录|

### update 20210408 项目启动

#### 1. 项目简介 

​	博客网站

​	包含前台，后台管理 ，后台

   

#### 2. 技术

| 类型   | 东西                |
| ------ | ------------------- |
| 框架   | vue3                |
| ui库   | element-ui plus     |
| 强化js | ts                  |
| 后台   | node.js  => egg     |
| 数据库 | mongodb => mongoose |

#### 3. 项目详细

前台：

| 页面     | 简述           |
| -------- | -------------- |
| 首页     | 整点花的好看点 |
| 文章列表 | 弄一排列表     |
| 文章详细 | 显示就行       |
| 写文章   | 编辑器         |

#### 4. 参考页面

前端   https://raindays.cn/  

后台管理 https://vvbin.cn/next/#/dashboard/analysis

后台管理：

后台：

兼容移动，pc

小程序（以后再说）

#### 4. 人员分工 （简单）

### 第二阶段 重构

#### 1. 第一阶段有啥不够的

#### 2. 做东西哪里不行

### 第三阶段 强化

#### 1. 往里面塞其他东西

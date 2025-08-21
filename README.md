# 医院管理系统

## 项目概述
这是一个基于Web的医院管理系统，提供患者端和医院端两个入口，实现了医疗服务的在线管理和预约功能。

## 目录结构

```
hospital-system/
├── assets/              # 静态资源文件
│   ├── css/             # 样式文件
│   ├── images/          # 图片资源
│   └── js/              # JavaScript脚本
├── hospital-side/       # 医院端页面
│   ├── admin/           # 管理员相关页面
│   ├── doctor-appointments.html   # 医生预约管理
│   ├── doctor-dashboard.html      # 医生仪表盘
│   ├── doctor-medical-images.html # 医生影像管理
│   ├── doctor-patient-records.html # 患者记录管理
│   ├── doctor-profile.html        # 医生资料
│   ├── login.html                 # 医院端登录
│   └── register.html              # 医院端注册
├── index.html           # 系统首页
└── user-side/           # 患者端页面
    ├── appointments.html         # 预约管理
    ├── dashboard.html            # 患者仪表盘
    ├── image-requests.html       # 影像申请
    ├── login.html                # 患者端登录
    ├── medical-records.html      # 医疗记录
    ├── profile.html              # 患者资料
    └── register.html             # 患者注册
```

## 功能特点

### 患者端功能
- 用户注册与登录
- 个人资料管理
- 预约医生门诊
- 查看医疗记录
- 申请医学影像检查

### 医院端功能
- 医生登录与认证
- 患者预约管理
- 查看和管理患者记录
- 医学影像管理
- 医生个人资料设置
- 管理员功能

## 技术栈
- HTML5
- CSS3
- JavaScript
- 响应式设计
- 本地存储(LocalStorage)用于用户会话管理

## 快速开始

### 运行项目
1. 使用HTTP服务器运行项目： 使用HTTP服务器运行项目：

```bash
# 在项目根目录下运行
npx http-server -p 8080
```

2. 打开浏览器访问：
   - 系统首页：http://localhost:8080
   - 患者登录：http://localhost:8080/user-side/login.html
   - 医院登录：http://localhost:8080/hospital-side/login.html

### 开发说明
- 修改HTML文件更新页面结构
- 修改CSS文件自定义样式
- 修改JavaScript文件实现交互逻辑
- 图片和其他静态资源放在assets目录

## 用户指南

### 患者端使用流程
1. 访问患者登录页面，注册新账号或使用已有账号登录
2. 登录后进入患者仪表盘，可查看个人信息
3. 点击"预约管理"可选择医生进行门诊预约
4. 通过"医疗记录"查看历史就诊信息 通过"医疗记录"查看历史就诊信息
5. 使用"影像申请"提交医学影像检查需求 使用"影像申请"提交医学影像检查需求

### 医院端使用流程
1. 访问医院端登录页面，使用分配的账号登录
2. 登录后进入医生仪表盘，查看今日预约 登录后进入医生仪表盘，查看今日预约
3. 通过"患者记录"管理和更新患者的诊疗信息 通过"患者记录"管理和更新患者的诊疗信息 通过"患者记录"管理和更新患者的诊疗信息 通过"患者记录"管理和更新患者的诊疗信息
4. 使用"影像管理"查看和分析患者的医学影像

## 注意事项
- 本系统使用LocalStorage存储用户信息，请确保浏览器支持此功能
- 系统为演示版本，部分功能可能仅为前端模拟实现
- 为获得最佳体验，请使用Chrome、Firefox、Safari等现代浏览器

## 更新日志

### 近期更新
- 优化全局CSS样式，提升视觉体验
- 修复登录页面的JavaScript模块化导入问题
- 解决患者类型选择未显示勾选状态的问题
- 实现响应式布局，支持多种屏幕尺寸
- 添加返回按钮，防止用户误操作

## 开发团队
医院管理系统开发小组

## 许可证
MIT License

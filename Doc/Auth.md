# 用户权限验证

## 访问登录页（登录）

- 前端向后端 [POST](./login.md) 登录数据:
- 后端检查用户合法性
- 登录成功时设置 Session，储存登录状态 ( Auth Token )，


## 访问登录页之外的页面

- 前端检查所请求的 url 是否需要登录
- if 需要登录:
  - 前端是否储存有 Auth Token
  - if 检查到 Auth Token:
    - 向后端发起附带 Auth Token 的请求
    - 后端检查请求中的 Auth Token 和 Session 中的 Auth Token 是否匹配
    - if 匹配成功:
      - 返回所请求的 url 希望获取的信息
    - else 匹配失败:
      - 删除 Session 与 token
      - 向前端发送重定向至登录界面的信号
  - else 未检查到 Auth Token:
    - 重定向至登录界面
- else 不需要登录:
  - 正常访问所请求的 url
# 登录 request

url：`user/login`

payload：格式: Json

```json
{
  username: ${用户名},
  password: ${密码}
}
```

Expect Response:

```bash
if 用户名不存在或与密码不匹配:
  return 0 # 数字 0
elif 用户名与密码匹配成功:
  设置 AuthToken Cookie
  设置 Session
```
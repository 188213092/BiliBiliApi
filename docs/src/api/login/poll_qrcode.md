# 扫码状态

**必选参数** : `key` : 上个接口返回的`qrcode_key`

**接口地址** : `/login/qrcode`

**可选参数** : `无`

**调用例子** : `/login/qrcode`

**说明** : 返回的`code`说明，可以一直轮询二维码，直到登录成功

0：扫码登录成功

86038：二维码已失效

86090：二维码已扫码未确认

86101：未扫码

> 完成登录后 , 会在浏览器保存一个 Cookies 用作登录凭证 , 大部分 API 都需要用到这个 Cookies

> 目前仅支持扫码登录，后续将支持`短信登录`及`密码登录`

**响应说明** :

根对象：

| 字段      | 类型  | 内容   | 备注   |
|---------|-----|------|------|
| code    | num | 返回值  | 0：成功 |
| message | str | 错误信息 |      |
| data    | obj | 信息本体 |      |

`data` 对象：

| 字段            | 类型  | 内容                                                             | 备注                     |
|---------------|-----|----------------------------------------------------------------|------------------------|
| url           | str | 游戏分站跨域登录 url                                                   | 未登录为空                  |
| refresh_token | str | 刷新`refresh_token`                                              | 未登录为空                  |
| timestamp     | num | 登录时间                                                           | 未登录为`0`<br />时间戳 单位为毫秒 |
| code          | num | 0：扫码登录成功<br />86038：二维码已失效<br />86090：二维码已扫码未确认<br />86101：未扫码 |                        |
| message       | str | 扫码状态信息                                                         |                        |
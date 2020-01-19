
## session 实现

koa  提供了 cookie 的操作 但是没有提供session 的操作 , session 就只能 自己实现 或通过 第三方 中间件实现。
在koa2 中 实现 session 的方案 有以下几种


+ 如果 session 数据量很小  可以直接 放在内存中

+ 如果  如果数据量很大  则需要储存介质放在 session 数据
## `fetch post` 请求中的 `body` 参数问题

使用 `fetch` 发 `POST` 请求，不指定任何 `header`，在 `chrome dev tools` 中可以看到 `body` 部分在 `request payload`
中，这样在服务器端使用 `req.body.xx` 取不到这些内容。

[AJAX POST请求中参数以form data和request payload形式在servlet中的获取方式](http://blog.csdn.net/mhmyqn/article/details/25561535)


## 跨域访问，有 request method 为 options 的一个请求，然后才是正常的请求

> Preflighted requests

> Unlike simple requests (discussed above), "preflighted" requests first send an HTTP OPTIONS request header 
> to the resource on the other domain, in order to determine whether the actual request is safe to send. 
> Cross-site requests are preflighted like this since they may have implications to user data. In particular, a request is preflighted if:

> It uses methods other than GET or POST. 
> Also, if POST is used to send request data with a Content-Type other than application/x-www-form-urlencoded, multipart/form-data, or text/plain, 
> e.g. if the POST request sends an XML payload to the server using application/xml or text/xml, then the request is preflighted.
> It sets custom headers in the request (e.g. the request uses a header such as X-PINGOTHER)
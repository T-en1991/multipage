##vue cli多页面打包初步总结

文件结构可以如项目，或者按项目需求再做优化，可提出共同部分等
打包后，部署Nginx时，需要对访问路径进行配置，如下

```
location /example
{
index  example.html;
try_files $uri $uri/ /example.html;
}
location /example1
{
index  example1.html;
try_files $uri $uri/ /example1.html;
}
location /login {
index  login.html;
try_files $uri $uri/ /login.html;
}
```




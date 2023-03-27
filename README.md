# Nuxt3-LearningSchool
一个使用Nuxt3框架的考试网站
计划用一个月的时间，做完。大概18章，从0开始到部署上线
## 计划
 每天都会敲一点，有自己的进度
 ### 1. 2023/03/27 搭建项目，引入必要的依赖包
 
 **NaviteUI**  
  有按需引入的机制，回头看看Elementui是不是也提供了这样的机制，  
  有loadingBar这样的加载条，好用
  
 **windiCss**  
  `@apply` 直接可以把原子的属性拷贝到class中，很方便  
  想要使用绝对 px 单位可以`mt-[80px]`就可以
  
**Nuxt**  
  可以抛出异常，throw CreateError，然后会直接跳转到error.vue页面  
  hook钩子函数在NuxtApp上可以用，主要是`page:start`,`page:finish`,`app:mounted`，`app:error`这四个用到了，后续如果还会用，继续关注
  
**yarn**  
  比npm强的点在1，会自动缓存本地下好的包，有的话就不需要从服务器下了，会检索依赖包的完整性  
  yarn 或者是yarn install 会直接安装依赖  
  yarn dev -o 加-o会自动打开浏览器  
  yarn add 依赖包 -D 安装包用add  
 

# 什么是微前端
微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。简单来说就是为多团队开发服务的，团队可以相互独立使用的不同的技术栈。各个团队的web的项目,独立开发、独立部署 子应用仓库独立，最终可以体现融合在一个地方。原理介绍推荐[可能是你见过最完善的微前端解决方案](https://zhuanlan.zhihu.com/p/78362028)这篇文章
- 更多关于微前端的相关介绍，推荐大家可以去看这几篇文章：
* [Micro Frontends](https://micro-frontends.org/)
* [Micro Frontends from martinfowler.com](https://martinfowler.com/articles/micro-frontends.html)
* [可能是你见过最完善的微前端解决方案](https://zhuanlan.zhihu.com/p/78362028)
* [微前端的核心价值](https://zhuanlan.zhihu.com/p/95085796)
基于微前端面临的各种问题， 一套完整的微前端解决方案 __qiankun__ 由之而来
# qiankun
## 核心设计理念
  *  简单 
  由于主应用微应用都能做到技术栈无关，qiankun 对于用户而言只是一个类似 jQuery 的库，你需要调用几个 qiankun 的 API 即可完成应用的微前端改造。同时由于 qiankun 的 HTML entry 及沙箱的设计，使得微应用的接入像使用 iframe 一样简单。
  *  解耦/技术栈无关 
  微前端的核心目标是将巨石应用拆解成若干可以自治的松耦合微应用，而 qiankun 的诸多设计均是秉持这一原则，如 HTML entry、沙箱、应用间通信等。这样才能确保微应用真正具备 独立开发、独立运行 的能力。
## [使用文档](https://qiankun.umijs.org/zh/api)
 * 多看下文档中的QA

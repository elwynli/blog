---
layout: ../layouts/AboutLayout.astro
title: "关于"
---


## 自我介绍

> The best way to predict the future is to invent it.

我是李昆，英文名 Eric Li。自小我除了爱看动画片，也爱看探索频道（Discovery Channel）。

我毕业于计算机软件专业，对计算机编程语言、操作系统和软件感兴趣。

在职业生涯早期，做**软件研发**，随后从事**项目管理**、**需求分析**、**技术咨询**工作。

如果您有任何软件有关的问题，可以联系我；

如果您有IT管理和软件项目方面的需求，也请联系我，我为您提供项目研发和相关咨询服务。


## 保持联系

* 邮件：<span class="email"></span>
* 电话：<span class="mobile"></span><span class="text-gray-400">（如未显示号码，请先发邮件）</span>


<script is:inline>
Array.prototype.slice.call(document.querySelectorAll('.email'), 0).forEach(el => {
    el.innerText = ['likun', 'msn.cn'].join('@');
});

Array.prototype.slice.call(document.querySelectorAll('.mobile'), 0).forEach(el => {
    el.innerText = ['MTM2O', 'DY4NT', 'I3NjA', '='].join('');
});
</script>

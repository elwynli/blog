---
author: 李昆
pubDatetime: 2024-06-25T12:40:00Z
title: 给 Astro Paper 增加 margin note 特性
slug: add-margin-note-feature-to-astro-paper-theme
featured: false
draft: false
tags:
  - Margin Note
  - Astro
description:
  在最新博客技术中，侧注 Margin Note 被很多明星博主实现，我在此提供 Astro 实现的方法。
---


## Margin Note

<span class="marginnote">比如脂砚斋批注的《红楼梦》；李渔批注《三国志》。</span>

侧注，Margin Note。小时候看到很多名人，都习惯在书籍侧面的留白处用钢笔写上阅读心得和感悟，其实还有许多家喻户晓更早的点评。

当电子屏阅读逐渐取代纸质阅读的时代，同样的模式，被很多知名博客带到了电子阅读上。即实现，在正文某段落的侧面，增加一些额外的文本内容，这些内容可能是博主的额外说明，也可能是对正文内容的二次补充。

还有一部分将 HTML 文章模式中的脚注提升到引出点侧面，显示在正文外的水平位置，这给阅读主线提供了一个小信息。

这个功能是对正文表达的干扰或者增强，则是一个智者见智的问题。最正常的用法，莫过于与本文主线无关，但作者想额外表达的线索。

一方面，如果信息是一个梗、一句吐槽，一句精辟的批注，则会给文章增色；另一方面，如果网站是一个数字花园，侧注中带有内部链接，这也许是花园维护者的某种设计，以带领客人游览数字花园，一种隐藏的向导和留下的线索，而如果信息中带有外部链接，则会增加文章搜索引擎跳出率，也许不利于搜索引擎优化，当然，如果不在意外部搜索的 SEO，那又是另外一个故事。

总的来说，一个侧注，是一种阅读的分支，想内容水系的一个支流入口，像是一种跳出的元神，给文章增加某种哲思，仿佛与之对话的是一个多灵元神，我很喜欢这点。

## 实现方式

实现方式，我采用了最简单的 CSS Calc 方式。

只需要在在 PostDetails.astro 文件中 `</style>` 后，增加如下代码，即实现了大屏，和宽度小于 600 的小屏都能恰当显示侧注了。

``` html
<style is:inline>
  .marginnote {
    font-size: 0.75rem;
    width: 24rem;
    right: calc((100% - 48rem) / 2 + 48rem);
    margin: 0;
    padding: 10px;
    position: absolute;
    text-align: right;
  }
  .marginnote:hover {
    border: groove 1px #ccc;
    padding: 9px;
  }
  @media screen and (max-width: 1025px) {
    .marginnote {
      position: initial;
      border:  groove 1px #ccc;
    }
  }
</style>
```

<span class="marginnote">Stay Calm. 这里是侧注的内容。</span>

然后在，写作内容时，用 `<span class="marginnote"></span>` 括住侧注的内容。

``` html
<span class="marginnote">Stay Calm. 这里是侧注的内容。</span>
```

如果你的 TOC 在左边，你希望将侧注放在右侧，而你又不太懂怎么实现，可以邮件联系我，或者了解 CSS Calc 后自行修改 `right:` 那行。
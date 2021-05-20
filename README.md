# tablist
web components for Tab element.

### usage

你可以这样用
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>tablist</title>
    <style>
      h3 {
        margin: 0;
      }
      .section-top {
        height: 240px;
      }
    </style>
  </head>
  <body>
    <main id="main">
      <tab-list class="section-top">
        <h3 slot="nav">茶卡盐湖</h3>
        <div slot="content">
          <p>走自己的路，其他的交给天空</p>
        </div>
        <h3 slot="nav">胡里山环岛路</h3>
        <div slot="content">
          <p>跟着心不会迷路</p>
          <p>长的是磨难</p>
          <p>短的是人生</p>
        </div>
        <h3 slot="nav">靖西</h3>
        <div slot="content">
          <p>星汉流珠落九天 江眠狮子壮山川<p>
          <p>鹅泉跃鲤三层浪 伏石牛鸣吹月旋<p>
          <p>紫璧樵歌赏荫雨 虎寨腾烟四野绵<p>
          <p>凤凰展翅呈奇瑞 龙潭随饮马投钱<p>
        </div>
      </tab-list>
    </main>
    <!-- <script type="module" src="https://unpkg.com/blue-tablist@1/dist/tablist.esm.js"></script> -->
    <script src="https://unpkg.com/blue-tablist@1/dist/tablist.umd.js"></script>
  </body>
</html>
```

同时，组件还提供了Chrome Tab页签的自定样式，通过`href`指定CSS，像这样使用
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>tablist</title>
    <style>
      h3 {
        margin: 0;
      }
      .sectionn-bottom {
        height: 400px;
      }
    </style>
  </head>
  <body>
    <main id="main">
      <tab-list class="sectionn-bottom" href="https://unpkg.com/blue-tablist@1/lib/tab-chrome.css"> 
        <div slot="nav" class="chrome-tab">文件</div>
        <div slot="content">
          <p>新标签页</p>
        </div>
        <div slot="nav" class="chrome-tab">编辑</div>
        <div slot="content">
          <p>剪切</p>
          <p>复制</p>
        </div>
        <div slot="nav" class="chrome-tab">❤历史记录❤</div>
        <div slot="content">
          <p>Home</p>
        </div>
      </tab-list>
    </main>
    <script src="https://unpkg.com/blue-tablist@1/dist/tablist.umd.js"></script>
  </body>
</html>
```

### Specifying tablist versions
Note that in both of the examples below, tablist URLs will need to be manually updated when a new major version of tablist is released (e.g. v1.x.x => v2.x.x). Check the tablist website periodically to see if a new major version has been released.

Specifying a major version in the URL (@1) will allow your site will receive non-breaking enhancements (i.e. "minor" updates) and bug fixes (i.e. "patch" updates) automatically. This is the recommended way to load tablist resources.

If you prefer to lock tablist to a specific version, specify the full version after the @ symbol in the URL. This is the safest way to ensure your site will look and behave the same way regardless of any changes made to future versions of tablist.

```
<script src="https://unpkg.com/blue-tablist@1.0.0/dist/tablist.umd.js"></script>
```
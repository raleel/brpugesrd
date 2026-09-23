# 先决条件

1. 对 [Markdown 语言](https://www.markdownguide.org/basic-syntax/) 有基本的了解。

2. 如果你还没有 [GitHub](https://github.com/) 账号，你需要创建一个免费账户。建议你使用你的 RPG 名称作为用户名，因为这会成为人们访问你的 SRD 时所用 URL 的一部分。

3. 你可以在不了解 Git 的情况下通过浏览器完成整个流程。不过，学习使用 GitHub Desktop 可以让你在将更改发布到线上供全世界查看之前，先在本地测试所有更改。

> 如果你注册了域名，可以通过此流程将其用于创建 SRD，就像我这样：https://srd.7thextinctionrpg.com

# 流程

## 在 GitHub 上创建仓库

1. 登录 GitHub

2. 导航至公开模板 https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. 点击 “Use this template”（使用此模板）

![Step3](/_media/Step3.png)

4. 选择 “Create a new repository”（创建新仓库）

5. 输入仓库名称

![Step5](/_media/Step5.png)

6. 选择 “Private”（私有）

7. 选择 “Create repository”（创建仓库）

复制模板需要 5-30 秒，之后你就会拥有自己的副本。

8. 确保你拥有 “.nojekyll” 文件，这是一个在 GitHub 上托管网站时所需的空文件，否则 SRD 将无法正常显示。（告诉 GitHub Pages 不要通过 Jekyll 处理发布的文件）。


## 添加你的内容

### *.md 文件

.md 文件是 Markdown 文件。Markdown 是一种轻量级标记语言，可用于为纯文本文件添加格式元素。根据内容的大小，你可以将所有游戏信息放在单个 *.md 文件中，或者像我在 [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) 那样，为每一章创建单独的文件。“sample.md” 提供了一些格式示例。

Markdown 语言非常容易学习，请使用上述“先决条件”第 2 点中提供的链接获取完整的语法列表。

### _Sidebar.md

这是你的菜单，即网站左侧的导航栏。将 Markdown 文件添加到仓库后，你需要将其添加到此处，以便包含其内容。请遵循现有的格式。


## 启用 GitHub Pages 将仓库转换为网站

1. 在你的仓库中点击 “Settings”（设置）

![Website-Step1](/_media/Website-Step1.png)

2. 选择左侧菜单中的 “Pages”（页面）

![Website-Step2](/_media/Website-Step2.png)

3. 如果你还没有将仓库设为 “public”（公开），你有两个选择：
    a. 将仓库设为公开，这将允许你使用 GitHub Pages 免费托管你的 SRD 网站。
    b. 升级你的 GitHub 账户（在撰写本文时，费用为每月 4 美元或每年 48 美元）。

4. 在 “Branch”（分支）下选择 “main” 并点击保存

5. 等待 10-20 秒，然后刷新页面

6. 你现在将看到你的 URL，例如 https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## 更改字体

1. 编辑 /_assets/style.css 文件

2. 在 “body section”（正文部分）下，你会找到 siteFont 和 headingFont

3. 将其更改为你想要使用的字体


## 使用 Fontawesome 和/或 Material Icons 插件在你的 SRD 中显示免费图标

### Fontawesome

使用 Fontawesome 获取免费图标和动态图标。订阅用户可以使用 Pro 图标。

1. 在 [Fontawesome](https://fontawesome.com/icons) 上找到图标
2. 选择该图标
3. 在弹出窗口的 HTML 选项卡下，复制引号 “ ” 之间的所有内容

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. 将复制的文本放置在 `:` 之间，不要有空格

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

使用 Material Icons 获取更多免费图标

1. 在 [Material Icons](https://fonts.google.com/icons) 上找到图标
2. 复制并将 web span 链接直接插入到你的 markdown 文件中

```markup
<span class="material-icons">face</span>
```
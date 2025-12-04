# Challenge 2026 Page Template

这是一个基于 RoCo Challenge 2026 设计的网页模板，您可以根据自己的需求进行定制。

## 文件结构

```
Challenge_2026_page/
├── index.html      # 主页面文件
├── styles.css      # 样式文件
└── README.md       # 说明文档
```

## 使用方法

1. **直接打开**: 在浏览器中打开 `index.html` 文件即可查看页面效果

2. **本地服务器**: 为了更好的开发体验，建议使用本地服务器：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (需要安装 http-server)
   npx http-server
   ```

3. **部署**: 将文件上传到您的 Web 服务器或 GitHub Pages

## 自定义内容

### 修改基本信息

在 `index.html` 中修改以下内容：

- **页面标题**: 修改 `<title>` 标签
- **导航栏品牌名**: 修改 `.nav-brand .brand-text` 中的文本
- **主标题**: 修改 `.hero-title` 中的文本
- **副标题**: 修改 `.hero-subtitle` 中的文本
- **挑战描述**: 修改 `.content-wrapper` 中的段落内容
- **时间线**: 修改 `.timeline` 中的列表项
- **团队成员**: 在 `.team-grid` 中添加或修改团队成员
- **联系方式**: 修改 `.contact-section` 中的邮箱和链接
- **赞助商**: 修改 `.sponsors-grid` 中的赞助商信息

### 修改样式

在 `styles.css` 中修改：

- **主题颜色**: 修改 `:root` 中的 CSS 变量
- **字体**: 修改 `body` 中的 `font-family`
- **布局**: 调整各个部分的 `padding`、`margin` 等

### 添加图片

1. 创建 `images` 文件夹
2. 将图片放入文件夹
3. 在 HTML 中引用：
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### 添加团队成员头像

修改 `.member-avatar` 为实际图片：
```html
<div class="member-avatar">
    <img src="images/member.jpg" alt="Member Name">
</div>
```

并在 CSS 中添加：
```css
.member-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 现代化的 UI 设计
- ✅ 平滑的过渡动画
- ✅ 易于定制和扩展
- ✅ 清晰的代码结构

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

根据您的需求选择合适的许可证。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题，请通过以下方式联系：
- Email: challenge@example.com
- Discord: [您的 Discord 链接]

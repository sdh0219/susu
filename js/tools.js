const tools = [
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    desc: "OpenAI 出品的 AI 对话助手，支持问答、写作、编程、翻译等多种任务，免费版即可使用。",
    icon: "🤖",
    category: "ai",
    tags: ["AI对话", "写作", "编程"]
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    desc: "Anthropic 出品的 AI 助手，擅长长文本分析、代码编写和创意写作，免费版功能强大。",
    icon: "🧠",
    category: "ai",
    tags: ["AI对话", "分析", "写作"]
  },
  {
    name: "Google Gemini",
    url: "https://gemini.google.com",
    desc: "Google 的 AI 助手，支持多模态输入，可处理文本、图片和代码，免费使用。",
    icon: "💎",
    category: "ai",
    tags: ["AI对话", "多模态", "搜索"]
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    desc: "AI 驱动的搜索引擎，自动总结搜索结果并附上来源引用，研究利器。",
    icon: "🔎",
    category: "ai",
    tags: ["AI搜索", "研究", "引用"]
  },
  {
    name: "Gamma",
    url: "https://gamma.app",
    desc: "AI 一键生成精美 PPT 和文档，输入主题即可自动排版，免费版可生成多份。",
    icon: "📊",
    category: "ai",
    tags: ["PPT", "文档", "AI生成"]
  },
  {
    name: "Remove.bg",
    url: "https://www.remove.bg",
    desc: "AI 自动抠图工具，5秒内去除图片背景，免费使用，支持批量处理。",
    icon: "✂️",
    category: "ai",
    tags: ["抠图", "AI", "图片处理"]
  },
  {
    name: "VS Code",
    url: "https://code.visualstudio.com",
    desc: "微软出品的免费代码编辑器，插件生态丰富，支持几乎所有编程语言和开发场景。",
    icon: "💻",
    category: "dev",
    tags: ["编辑器", "编程", "插件"]
  },
  {
    name: "GitHub",
    url: "https://github.com",
    desc: "全球最大的代码托管平台，免费仓库无限私有，Copilot 免费版可用。",
    icon: "🐙",
    category: "dev",
    tags: ["代码托管", "开源", "协作"]
  },
  {
    name: "CodePen",
    url: "https://codepen.io",
    desc: "在线前端代码编辑器，实时预览 HTML/CSS/JS 效果，适合快速原型和分享代码。",
    icon: "✏️",
    category: "dev",
    tags: ["前端", "在线编辑", "原型"]
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    desc: "前端部署平台，一键部署网站，免费 HTTPS，支持 Next.js 等框架，个人项目免费。",
    icon: "▲",
    category: "dev",
    tags: ["部署", "托管", "Serverless"]
  },
  {
    name: "Netlify",
    url: "https://www.netlify.com",
    desc: "静态网站部署平台，拖拽即部署，免费 SSL 和 CDN，支持表单和函数。",
    icon: "🌐",
    category: "dev",
    tags: ["部署", "静态站", "CDN"]
  },
  {
    name: "StackBlitz",
    url: "https://stackblitz.com",
    desc: "浏览器中的全栈开发环境，无需安装，打开即用，支持 Node.js 项目。",
    icon: "⚡",
    category: "dev",
    tags: ["在线IDE", "全栈", "Node.js"]
  },
  {
    name: "Figma",
    url: "https://www.figma.com",
    desc: "在线协作设计工具，免费版支持3个项目，UI/UX 设计行业标准，实时协作。",
    icon: "🎨",
    category: "design",
    tags: ["UI设计", "协作", "原型"]
  },
  {
    name: "Canva",
    url: "https://www.canva.com",
    desc: "在线平面设计工具，海量模板，拖拽式操作，免费版功能丰富，适合非设计师。",
    icon: "🖼️",
    category: "design",
    tags: ["平面设计", "模板", "海报"]
  },
  {
    name: "Excalidraw",
    url: "https://excalidraw.com",
    desc: "手绘风格白板工具，免费开源，适合画架构图、流程图和头脑风暴，支持协作。",
    icon: "📝",
    category: "design",
    tags: ["白板", "手绘", "协作"]
  },
  {
    name: "Coolors",
    url: "https://coolors.co",
    desc: "配色方案生成器，一键生成和谐配色，支持锁定、微调和导出，设计师必备。",
    icon: "🌈",
    category: "design",
    tags: ["配色", "设计", "调色板"]
  },
  {
    name: "Penpot",
    url: "https://penpot.app",
    desc: "开源的 UI 设计与原型工具，Figma 的免费替代品，支持自部署。",
    icon: "🖊️",
    category: "design",
    tags: ["UI设计", "开源", "原型"]
  },
  {
    name: "Notion",
    url: "https://www.notion.so",
    desc: "一体化工作空间，笔记、文档、数据库、看板全都有，免费版足够个人使用。",
    icon: "📋",
    category: "efficiency",
    tags: ["笔记", "知识库", "协作"]
  },
  {
    name: "Obsidian",
    url: "https://obsidian.md",
    desc: "本地优先的双链笔记工具，Markdown 原生支持，插件生态丰富，完全免费。",
    icon: "💎",
    category: "efficiency",
    tags: ["笔记", "双链", "本地"]
  },
  {
    name: "Trello",
    url: "https://trello.com",
    desc: "看板式项目管理工具，直观的拖拽操作，免费版支持10个看板，个人项目管理首选。",
    icon: "📌",
    category: "efficiency",
    tags: ["项目管理", "看板", "协作"]
  },
  {
    name: "Raycast",
    url: "https://www.raycast.com",
    desc: "Mac 效率启动器，替代 Spotlight，内置剪贴板历史、窗口管理等，免费版功能强大。",
    icon: "🚀",
    category: "efficiency",
    tags: ["启动器", "Mac", "效率"]
  },
  {
    name: "Everything",
    url: "https://www.voidtools.com",
    desc: "Windows 文件搜索神器，秒搜全盘文件，体积小巧完全免费，远超系统自带搜索。",
    icon: "📁",
    category: "efficiency",
    tags: ["文件搜索", "Windows", "极速"]
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com",
    desc: "高质量免费图片库，超过300万张照片可免费商用，设计师和创作者的图片宝库。",
    icon: "📷",
    category: "resource",
    tags: ["图片", "免费商用", "高清"]
  },
  {
    name: "Pexels",
    url: "https://www.pexels.com",
    desc: "免费图片和视频素材库，无需注册即可下载，支持商用，质量极高。",
    icon: "🎬",
    category: "resource",
    tags: ["图片", "视频", "免费商用"]
  },
  {
    name: "DevDocs",
    url: "https://devdocs.io",
    desc: "聚合式 API 文档浏览器，一个页面查阅所有技术文档，离线可用，开发者必备。",
    icon: "📖",
    category: "resource",
    tags: ["文档", "API", "开发"]
  },
  {
    name: "Roadmap.sh",
    url: "https://roadmap.sh",
    desc: "技术学习路线图网站，涵盖前端、后端、DevOps 等方向，免费查看全部路线图。",
    icon: "🗺️",
    category: "resource",
    tags: ["学习路线", "技术", "规划"]
  },
  {
    name: "Iconify",
    url: "https://iconify.design",
    desc: "统一图标框架，集合15万+开源图标，支持按需加载，免费使用。",
    icon: "🔣",
    category: "resource",
    tags: ["图标", "开源", "设计资源"]
  },
  {
    name: "DaVinci Resolve",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    desc: "专业级视频剪辑软件，免费版功能已媲美付费软件，调色、剪辑、特效一体化。",
    icon: "🎥",
    category: "media",
    tags: ["视频剪辑", "调色", "专业"]
  },
  {
    name: "CapCut",
    url: "https://www.capcut.com",
    desc: "字节跳动出品的视频剪辑工具，免费版功能丰富，模板多，适合短视频创作。",
    icon: "✂️",
    category: "media",
    tags: ["视频剪辑", "短视频", "模板"]
  },
  {
    name: "Audacity",
    url: "https://www.audacityteam.org",
    desc: "免费开源的音频编辑软件，支持多轨录音和编辑，播客和音乐制作入门首选。",
    icon: "🎵",
    category: "media",
    tags: ["音频编辑", "开源", "录音"]
  },
  {
    name: "OBS Studio",
    url: "https://obsproject.com",
    desc: "免费开源的直播和录屏软件，功能专业，支持多场景切换，直播录制必备。",
    icon: "📺",
    category: "media",
    tags: ["直播", "录屏", "开源"]
  },
  {
    name: "HandBrake",
    url: "https://handbrake.fr",
    desc: "免费开源的视频转码工具，支持几乎所有格式转换，压缩视频体积利器。",
    icon: "🔄",
    category: "media",
    tags: ["视频转码", "压缩", "开源"]
  },
  {
    name: "Squoosh",
    url: "https://squoosh.app",
    desc: "Google 出品的在线图片压缩工具，支持多种格式，实时对比压缩效果，完全免费。",
    icon: "🖼️",
    category: "media",
    tags: ["图片压缩", "在线", "Google"]
  }
];

function renderTools(filteredTools) {
  const grid = document.getElementById('toolGrid');
  const noResults = document.getElementById('noResults');

  if (filteredTools.length === 0) {
    grid.innerHTML = '';
    noResults.classList.add('show');
    return;
  }

  noResults.classList.remove('show');

  grid.innerHTML = filteredTools.map((tool, index) => `
    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-card cat-${tool.category} fade-in" style="transition-delay: ${index * 0.03}s">
      <div class="tool-card-header">
        <div class="tool-icon">${tool.icon}</div>
        <div class="tool-card-info">
          <h3>${tool.name} <span class="free-badge">FREE</span></h3>
          <div class="tool-url">${tool.url.replace('https://', '')}</div>
        </div>
      </div>
      <p>${tool.desc}</p>
      <div class="tool-card-footer">
        <div class="tool-tags">
          ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
        </div>
        <div class="tool-arrow">→</div>
      </div>
    </a>
  `).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  });
}

function filterTools(category, keyword) {
  let filtered = tools;

  if (category && category !== 'all') {
    filtered = filtered.filter(t => t.category === category);
  }

  if (keyword) {
    const kw = keyword.toLowerCase();
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(kw) ||
      t.desc.toLowerCase().includes(kw) ||
      t.tags.some(tag => tag.toLowerCase().includes(kw))
    );
  }

  renderTools(filtered);
}

let currentCategory = 'all';
let currentKeyword = '';

document.addEventListener('DOMContentLoaded', () => {
  renderTools(tools);

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      filterTools(currentCategory, currentKeyword);
    });
  });

  const searchInput = document.getElementById('toolSearch');
  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentKeyword = e.target.value.trim();
      filterTools(currentCategory, currentKeyword);
    }, 200);
  });
});

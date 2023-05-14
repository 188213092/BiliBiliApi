import{_ as t,o as d,c as e,O as r}from"./chunks/framework.9be35eee.js";const g=JSON.parse('{"title":"获取用户关系状态数","description":"","frontmatter":{},"headers":[],"relativePath":"api/get_relation_stat.md","filePath":"api/get_relation_stat.md"}'),o={name:"api/get_relation_stat.md"},a=r('<h1 id="获取用户关系状态数" tabindex="-1">获取用户关系状态数 <a class="header-anchor" href="#获取用户关系状态数" aria-label="Permalink to &quot;获取用户关系状态数&quot;">​</a></h1><p><strong>必选参数</strong> : <code>mid</code> : 用户mid</p><p><strong>接口地址</strong> : <code>/get/relation/stat</code></p><p><strong>可选参数</strong> : <code>无</code></p><p><strong>调用例子</strong> : <code>/get/relation/stat</code></p><p><strong>说明</strong> : 无</p><p><strong>响应说明</strong> :</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>目标用户mid</td><td></td></tr><tr><td>following</td><td>num</td><td>关注数</td><td></td></tr><tr><td>whisper</td><td>num</td><td>悄悄关注数</td><td>需要登录(Cookie或APP) <br>未登录或非自己恒为0</td></tr><tr><td>black</td><td>num</td><td>黑名单数</td><td>需要登录(Cookie或APP) <br>未登录或非自己恒为0</td></tr><tr><td>follower</td><td>num</td><td>粉丝数</td><td></td></tr></tbody></table>',11),n=[a];function s(_,i,c,h,p,l){return d(),e("div",null,n)}const b=t(o,[["render",s]]);export{g as __pageData,b as default};

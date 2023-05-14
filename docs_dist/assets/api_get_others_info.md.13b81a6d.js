import{_ as t,o as d,c as r,O as e}from"./chunks/framework.9be35eee.js";const p=JSON.parse('{"title":"获取其他用户详细信息","description":"","frontmatter":{},"headers":[],"relativePath":"api/get_others_info.md","filePath":"api/get_others_info.md"}'),o={name:"api/get_others_info.md"},a=e('<h1 id="获取其他用户详细信息" tabindex="-1">获取其他用户详细信息 <a class="header-anchor" href="#获取其他用户详细信息" aria-label="Permalink to &quot;获取其他用户详细信息&quot;">​</a></h1><p><strong>必选参数</strong> : <code>mid</code> : 用户mid</p><p><strong>接口地址</strong> : <code>/get/others/info</code></p><p><strong>可选参数</strong> : <code>无</code></p><p><strong>调用例子</strong> : <code>/get/others/info</code></p><p><strong>说明</strong> : 无</p><p><strong>响应说明</strong> :</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>mid</td><td></td></tr><tr><td>name</td><td>str</td><td>昵称</td><td></td></tr><tr><td>sex</td><td>str</td><td>性别</td><td>男/女/保密</td></tr><tr><td>face</td><td>str</td><td>头像链接</td><td></td></tr><tr><td>face_nft</td><td>num</td><td>是否为 nft 头像</td><td><code>0</code>不是nft头像<br><code>1</code>是 nft 头像</td></tr><tr><td>face_nft_type</td><td>num</td><td></td><td>0,1</td></tr><tr><td>sign</td><td>str</td><td>签名</td><td></td></tr><tr><td>rank</td><td>num</td><td>用户权限等级</td><td>目前应该无任何作用<br>5000：0级未答题<br>10000：普通会员<br>20000：字幕君<br>25000：VIP<br>30000：真·职人<br>32000：管理员</td></tr><tr><td>level</td><td>num</td><td>当前等级</td><td>0-6级</td></tr><tr><td>jointime</td><td>num</td><td>注册时间</td><td>此接口返回恒为<code>0</code></td></tr><tr><td>moral</td><td>num</td><td>节操值</td><td>此接口返回恒为<code>0</code></td></tr><tr><td>silence</td><td>num</td><td>封禁状态</td><td>0：正常<br>1：被封</td></tr><tr><td>coins</td><td>num</td><td>硬币数</td><td>需要登录(Cookie) <br>只能查看自己的<br>默认为0</td></tr><tr><td>fans_badge</td><td>bool</td><td>是否具有粉丝勋章</td><td>false：无<br>true：有</td></tr><tr><td>fans_medal</td><td>obj</td><td>粉丝勋章信息</td><td></td></tr><tr><td>official</td><td>obj</td><td>认证信息</td><td></td></tr><tr><td>vip</td><td>obj</td><td>会员信息</td><td></td></tr><tr><td>pendant</td><td>obj</td><td>头像框信息</td><td></td></tr><tr><td>nameplate</td><td>obj</td><td>勋章信息</td><td></td></tr><tr><td>user_honour_info</td><td>obj</td><td></td><td></td></tr><tr><td>is_followed</td><td>bool</td><td>是否关注此用户</td><td>true：已关注<br>false：未关注<br>需要登录(Cookie) <br>未登录恒为false</td></tr><tr><td>top_photo</td><td>str</td><td>主页头图链接</td><td></td></tr><tr><td>theme</td><td>obj</td><td>空</td><td><strong>作用尚不明确</strong></td></tr><tr><td>sys_notice</td><td>obj</td><td>系统通知</td><td>无内容则为空对象<br>主要用于展示如用户争议、纪念账号等等</td></tr><tr><td>live_room</td><td>obj</td><td>直播间信息</td><td></td></tr><tr><td>birthday</td><td>str</td><td>生日</td><td>MM-DD<br>如设置隐私为空</td></tr><tr><td>school</td><td>obj</td><td>学校</td><td></td></tr><tr><td>profession</td><td>obj</td><td>专业资质信息</td><td></td></tr><tr><td>tags</td><td>null</td><td>个人标签</td><td></td></tr><tr><td>series</td><td>obj</td><td></td><td></td></tr><tr><td>is_senior_member</td><td>num</td><td>是否为硬核会员</td><td>0：否<br>1：是</td></tr><tr><td>mcn_info</td><td>null</td><td></td><td></td></tr><tr><td>gaia_res_type</td><td>num</td><td></td><td></td></tr><tr><td>gaia_data</td><td>null</td><td></td><td></td></tr><tr><td>is_risk</td><td>bool</td><td></td><td></td></tr><tr><td>elec</td><td>obj</td><td>充电信息</td><td></td></tr><tr><td>contract</td><td>obj</td><td>是否显示老粉计划</td><td></td></tr></tbody></table><p><code>rank</code> 示例</p><table><thead><tr><th>UID</th><th>rank</th></tr></thead><tbody><tr><td>2</td><td>20000</td></tr><tr><td>16765</td><td>20000</td></tr><tr><td>15773384</td><td>20000</td></tr><tr><td>124416</td><td>20000</td></tr><tr><td>429736362</td><td>25000</td></tr><tr><td>424261768</td><td>25000</td></tr><tr><td>41273726</td><td>25000</td></tr><tr><td>15080107</td><td>25000</td></tr><tr><td>9847497</td><td>25000</td></tr><tr><td>4856007</td><td>25000</td></tr><tr><td>928123</td><td>25000</td></tr><tr><td>132704</td><td>25000</td></tr><tr><td>70093</td><td>25000</td></tr><tr><td>47291</td><td>25000</td></tr><tr><td>27380</td><td>25000</td></tr><tr><td>22445</td><td>25000</td></tr><tr><td>3351</td><td>25000</td></tr><tr><td>1101</td><td>25000</td></tr><tr><td>93066</td><td>30000</td></tr><tr><td>2443068</td><td>30000</td></tr><tr><td>46368</td><td>30000</td></tr><tr><td>11167</td><td>30000</td></tr></tbody></table><p><code>profession</code> 示例</p><table><thead><tr><th>UID</th></tr></thead><tbody><tr><td>654391</td></tr><tr><td>1440295</td></tr><tr><td>1785155</td></tr><tr><td>2990100</td></tr><tr><td>3875803</td></tr></tbody></table><p><code>data</code> 中的 <code>official</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>role</td><td>num</td><td>认证类型</td><td>0：无<br>1 2 7 9：个人认证<br>3 4 5 6：机构认证</td></tr><tr><td>title</td><td>str</td><td>认证信息</td><td>无为空</td></tr><tr><td>desc</td><td>str</td><td>认证备注</td><td>无为空</td></tr><tr><td>type</td><td>num</td><td>是否认证</td><td>-1：无<br>0：个人认证<br>1：机构认证</td></tr></tbody></table><p><code>data</code> 中的 <code>vip</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>会员类型</td><td>0：无<br>1：月大会员<br>2：年度及以上大会员</td></tr><tr><td>status</td><td>num</td><td>会员状态</td><td>0：无<br>1：有</td></tr><tr><td>due_date</td><td>num</td><td>会员过期时间</td><td>Unix时间戳(毫秒)</td></tr><tr><td>vip_pay_type</td><td>num</td><td>支付类型</td><td>0：未支付（常见于官方账号）<br>1：已支付（以正常渠道获取的大会员均为此值）</td></tr><tr><td>theme_type</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>label</td><td>obj</td><td>会员标签</td><td></td></tr><tr><td>avatar_subscript</td><td>num</td><td>是否显示会员图标</td><td>0：不显示<br>1：显示</td></tr><tr><td>nickname_color</td><td>str</td><td>会员昵称颜色</td><td>颜色码，一般为<code>#FB7299</code>，曾用于愚人节改变大会员配色</td></tr><tr><td>role</td><td>num</td><td>大角色类型</td><td>1：月度大会员<br>3：年度大会员<br>7：十年大会员<br>15：百年大会员</td></tr><tr><td>avatar_subscript_url</td><td>str</td><td>大会员角标地址</td><td></td></tr><tr><td>tv_vip_status</td><td>num</td><td>电视大会员状态</td><td>0：未开通</td></tr><tr><td>tv_vip_pay_type</td><td>num</td><td>电视大会员支付类型</td><td></td></tr></tbody></table><p><code>vip</code> 中的 <code>label</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>path</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>text</td><td>str</td><td>会员类型文案</td><td><code>大会员</code> <code>年度大会员</code> <code>十年大会员</code> <code>百年大会员</code> <code>最强绿鲤鱼</code></td></tr><tr><td>label_theme</td><td>str</td><td>会员标签</td><td>vip：大会员<br>annual_vip：年度大会员<br>ten_annual_vip：十年大会员<br>hundred_annual_vip：百年大会员<br>fools_day_hundred_annual_vip：最强绿鲤鱼</td></tr><tr><td>text_color</td><td>str</td><td>会员标签</td><td></td></tr><tr><td>bg_style</td><td>num</td><td>1</td><td></td></tr><tr><td>bg_color</td><td>str</td><td>会员标签背景颜色</td><td>颜色码，一般为<code>#FB7299</code>，曾用于愚人节改变大会员配色</td></tr><tr><td>border_color</td><td>str</td><td>会员标签边框颜色</td><td>未使用</td></tr><tr><td>use_img_label</td><td>bool</td><td><code>true</code></td><td></td></tr><tr><td>img_label_uri_hans</td><td>str</td><td><code>空串</code></td><td></td></tr><tr><td>img_label_uri_hant</td><td>str</td><td><code>空串</code></td><td></td></tr><tr><td>img_label_uri_hans_static</td><td>str</td><td>大会员牌子图片</td><td>简体版</td></tr><tr><td>img_label_uri_hant_static</td><td>str</td><td>大会员牌子图片</td><td>繁体版</td></tr></tbody></table><p><code>data</code> 中的 <code>pendant</code> 对象：</p><p><strong>普通头像框的<code>image</code>与<code>image_enhance</code>内容相同</strong><strong>动态头像框的<code>image</code>为png静态图片，<code>image_enhance</code>为webp动态图片，<code>image_enhance_frame</code>为png逐帧序列</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>pid</td><td>num</td><td>头像框id</td><td></td></tr><tr><td>name</td><td>str</td><td>头像框名称</td><td></td></tr><tr><td>image</td><td>str</td><td>头像框图片url</td><td></td></tr><tr><td>expire</td><td>num</td><td>过期时间</td><td>此接口返回恒为<code>0</code></td></tr><tr><td>image_enhance</td><td>str</td><td>头像框图片url</td><td></td></tr><tr><td>image_enhance_frame</td><td>str</td><td>头像框图片逐帧序列url</td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>nameplate</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>nid</td><td>num</td><td>勋章id</td><td></td></tr><tr><td>name</td><td>str</td><td>勋章名称</td><td></td></tr><tr><td>image</td><td>str</td><td>勋章图标</td><td></td></tr><tr><td>image_small</td><td>str</td><td>勋章图标（小）</td><td></td></tr><tr><td>level</td><td>str</td><td>勋章等级</td><td></td></tr><tr><td>condition</td><td>str</td><td>获取条件</td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>fans_medal</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>show</td><td>bool</td><td></td><td></td></tr><tr><td>wear</td><td>bool</td><td>是否佩戴了粉丝勋章</td><td></td></tr><tr><td>medal</td><td>obj</td><td>粉丝勋章信息</td><td></td></tr></tbody></table><p><code>fans_medal</code> 中的<code>medal</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>uid</td><td>num</td><td>此用户mid</td><td></td></tr><tr><td>target_id</td><td>num</td><td>粉丝勋章所属UP的mid</td><td></td></tr><tr><td>medal_id</td><td>num</td><td>粉丝勋章id</td><td></td></tr><tr><td>level</td><td>num</td><td>粉丝勋章等级</td><td></td></tr><tr><td>medal_name</td><td>str</td><td>粉丝勋章名称</td><td></td></tr><tr><td>medal_color</td><td>num</td><td>颜色</td><td></td></tr><tr><td>intimacy</td><td>num</td><td>当前亲密度</td><td></td></tr><tr><td>next_intimacy</td><td>num</td><td>下一等级所需亲密度</td><td></td></tr><tr><td>day_limit</td><td>num</td><td>每日亲密度获取上限</td><td></td></tr><tr><td>today_feed</td><td>num</td><td>今日已获得亲密度</td><td></td></tr><tr><td>medal_color_start</td><td>num</td><td>粉丝勋章颜色</td><td>十进制数，可转为十六进制颜色代码</td></tr><tr><td>medal_color_end</td><td>num</td><td>粉丝勋章颜色</td><td>十进制数，可转为十六进制颜色代码</td></tr><tr><td>medal_color_border</td><td>num</td><td>粉丝勋章边框颜色</td><td>十进制数，可转为十六进制颜色代码</td></tr><tr><td>is_lighted</td><td>num</td><td></td><td></td></tr><tr><td>light_status</td><td>num</td><td></td><td></td></tr><tr><td>wearing_status</td><td>num</td><td>当前是否佩戴</td><td>0：未佩戴<br>1：已佩戴</td></tr><tr><td>score</td><td>num</td><td></td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>sys_notice</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>id</td><td></td></tr><tr><td>content</td><td>str</td><td>显示文案</td><td></td></tr><tr><td>url</td><td>str</td><td>跳转地址</td><td></td></tr><tr><td>notice_type</td><td>num</td><td>提示类型</td><td>1,2</td></tr><tr><td>icon</td><td>str</td><td>前缀图标</td><td></td></tr><tr><td>text_color</td><td>str</td><td>文字颜色</td><td></td></tr><tr><td>bg_color</td><td>str</td><td>背景颜色</td><td></td></tr></tbody></table><p><code>sys_notice</code> 示例</p><table><thead><tr><th>id</th><th>content</th><th>url</th><th>notice_type</th><th>示例用户</th></tr></thead><tbody><tr><td>5</td><td>该用户存在争议行为，已冻结其帐号功能的使用</td><td></td><td>1</td><td><a href="https://space.bilibili.com/82385070" target="_blank" rel="noreferrer">82385070</a></td></tr><tr><td>8</td><td>该用户存在较大争议，请谨慎甄别其内容</td><td></td><td>1</td><td><a href="https://space.bilibili.com/28062215" target="_blank" rel="noreferrer">28062215</a></td></tr><tr><td>11</td><td>该账号涉及合约争议，暂冻结其账号功能使用。详见公告-&gt;</td><td></td><td>1</td><td></td></tr><tr><td>16</td><td>该UP主内容存在争议，请注意甄别视频内信息</td><td></td><td>1</td><td><a href="https://space.bilibili.com/382534165" target="_blank" rel="noreferrer">382534165</a></td></tr><tr><td>20</td><td>请允许我们在此献上最后的告别，以此纪念其在哔哩哔哩留下的回忆与足迹。请点此查看纪念账号相关说明</td><td></td><td>2</td><td></td></tr><tr><td>22</td><td>该账号涉及合约诉讼，封禁其账号使用。</td><td></td><td></td><td></td></tr><tr><td>24</td><td>该账号涉及合约争议，暂冻结其账号功能使用。</td><td></td><td>1</td><td><a href="https://space.bilibili.com/291229008" target="_blank" rel="noreferrer">291229008</a></td></tr><tr><td>25</td><td>该用户涉及严重指控，暂冻结其账号功能使用</td><td></td><td>1</td><td><a href="https://space.bilibili.com/81447581" target="_blank" rel="noreferrer">81447581</a></td></tr><tr><td>31</td><td>该用户涉及严重指控，暂冻结其账号功能使用</td><td></td><td>1</td><td><a href="https://space.bilibili.com/22439273" target="_blank" rel="noreferrer">22439273</a></td></tr><tr><td>34</td><td>该用户涉及严重指控，暂冻结其账号功能使用</td><td></td><td>1</td><td><a href="https://space.bilibili.com/1640486775" target="_blank" rel="noreferrer">1640486775</a></td></tr><tr><td>36</td><td>该账户存在争议，请谨慎甄别</td><td></td><td>1</td><td><a href="https://space.bilibili.com/198297" target="_blank" rel="noreferrer">198297</a><br><a href="https://space.bilibili.com/18149131" target="_blank" rel="noreferrer">18149131</a></td></tr></tbody></table><p><code>data</code> 中的 <code>live_room</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>roomStatus</td><td>num</td><td>直播间状态</td><td>0：无房间<br>1：有房间</td></tr><tr><td>liveStatus</td><td>num</td><td>直播状态</td><td>0：未开播<br>1：直播中</td></tr><tr><td>url</td><td>str</td><td>直播间网页 url</td><td></td></tr><tr><td>title</td><td>str</td><td>直播间标题</td><td></td></tr><tr><td>cover</td><td>str</td><td>直播间封面 url</td><td></td></tr><tr><td>watched_show</td><td>obj</td><td></td><td></td></tr><tr><td>roomid</td><td>num</td><td>直播间 id(短号)</td><td></td></tr><tr><td>roundStatus</td><td>num</td><td>轮播状态</td><td>0：未轮播<br>1：轮播</td></tr><tr><td>broadcast_type</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><code>live_room</code> 中的 <code>watched_show</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>switch</td><td>bool</td><td>?</td><td></td></tr><tr><td>num</td><td>num</td><td>total watched users</td><td></td></tr><tr><td>text_small</td><td>str</td><td></td><td></td></tr><tr><td>text_large</td><td>str</td><td></td><td></td></tr><tr><td>icon</td><td>str</td><td>watched icon url</td><td></td></tr><tr><td>icon_location</td><td>str</td><td>?</td><td></td></tr><tr><td>icon_web</td><td>str</td><td>watched icon url</td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>school</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td>str</td><td>就读大学名称</td><td>没有则为空</td></tr></tbody></table><p><code>data</code> 中的 <code>profession</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td>str</td><td>资质名称</td><td></td></tr><tr><td>department</td><td>str</td><td>职位</td><td></td></tr><tr><td>title</td><td>str</td><td>所属机构</td><td></td></tr><tr><td>is_show</td><td>num</td><td>是否显示</td><td>0：不显示<br>1：显示</td></tr></tbody></table><p><code>data</code> 中的 <code>user_honour_info</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>0</td><td></td></tr><tr><td>colour</td><td>str</td><td>null</td><td></td></tr><tr><td>tags</td><td>array</td><td>null</td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>series</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>user_upgrade_status</td><td>num</td><td>(?)</td><td></td></tr><tr><td>show_upgrade_window</td><td>bool</td><td>(?)</td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>elec</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>show_info</td><td>obj</td><td></td><td></td></tr></tbody></table><p><code>elec</code> 中的 <code>show_info</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>show</td><td>bool</td><td>是否开通了充电</td><td></td></tr><tr><td>state</td><td>num</td><td>状态</td><td>-1：未开通<br>1：已开通</td></tr><tr><td>title</td><td>str</td><td><code>空串</code></td><td></td></tr><tr><td>icon</td><td>str</td><td><code>空串</code></td><td></td></tr><tr><td>jump_url</td><td>str</td><td><code>空串</code></td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>contract</code> 对象：</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>is_display</td><td>bool</td><td></td><td>true/false<br>在页面中未使用此字段</td></tr><tr><td>is_follow_display</td><td>bool</td><td>是否在显示老粉计划</td><td>true：显示<br>false：不显示</td></tr></tbody></table>',52),h=[a];function c(n,l,b,s,i,_){return d(),r("div",null,h)}const u=t(o,[["render",c]]);export{p as __pageData,u as default};

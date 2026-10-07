# 合规文案 v2 — 已保存、暂不上线（等 GTM 绿灯后调用）

> 本文件是**档案**，不影响当前线上展示。当前线上跑的是 Lovable main 的"成品"版本。
> 何时启用、改哪些文件，逐条与 webdev 讨论后再执行。来源：drafts_queue need='webdev:E46_copy_v2'。

## 红线（启用时必须满足）
1. 不出现临时英文品牌名（保持 Name pending）
2. 不出现认证词（UL/CE/FCC certified）与绝对词（waterproof / guarantee / 100% / tamper resistant / zero backlash）
3. 规格一律 engineering estimates, validation ongoing
4. 页面只放询盘表单，不放邮箱
5. 禁 push main

## E46 文案成品（逐节）
- HERO  H1: Add smart access. Keep the lock.
- HERO  Sub: A retrofit smart drive that fits your existing deadbolts and mortise locks — no door modification, and the original key always works as backup.
- HERO  角标: Brand name pending final registration — the engineering is the product.
- 价值块1: No door modification — The drive core mounts over the existing lock body. Two mechanical paths (S1 / S2) cover common commercial deadbolts and euro-profile mortise locks.
- 价值块2: Built for installers — 45-minute install target*, local partner support, joint validation welcome. (*engineering estimate, validation ongoing)
- 价值块3: Honest engineering — Specs are published as engineering estimates until jointly validated. Research samples are available for purchase — we'd rather prove it than claim it.
- S1: for bored/deadbolt doors: fits existing single-deadbolt cylinders; original key retained.
- S2: for euro-profile mortise doors: cylinder-path mount; UK/EU door furniture compatible.
- 每块尾注: Detailed specs available in the catalogue (estimates clearly labeled).
- 合作方式: ① Request catalogue ② Purchase research samples ③ Joint validation with your team ④ Volume orders: 100+ units, prepaid terms, factory-direct.
- FAQ:
  - Q What's your company name? — Our international brand is completing final registration; the catalogue and samples carry full engineering detail today.
  - Q Are the specs certified? — Figures are engineering estimates pending joint validation; compliance testing is planned per target market. We never claim certifications we don't hold.
  - Q Can software work without your hardware? — Yes — the access software's basic features never require our hardware.
- 页脚: Enquiry form only(不放邮箱) | © CN-based engineering team | Specs marked as estimates are subject to joint validation.

## 已验证的"替换对"（当年做过的文本级替换，可直接复用）
| 文件 | 原文 | 合规版 |
|---|---|---|
| Site.tsx | Retrofit·Series (wordmark) | Name·pending |
| Site.tsx | Retrofit Smart Lock Series (footer) | Name pending |
| Site.tsx | footer mailto 邮箱链接 | Enquiry form only — no email published → /#contact |
| Site.tsx | Request samples | Request product info |
| index.tsx | Retrofit Smart Lock Series — OEM Product Catalogue (title/og) | Retrofit smart locks — OEM product catalogue (name pending) |
| index.tsx | HERO eyebrow "Dual-SKU architecture · OEM ready" | Brand name pending final registration — the engineering is the product. |
| index.tsx | HERO H1 "A smart lock that fits inside…" | Add smart access. Keep the lock. |
| index.tsx | contact mailto "Email the OEM desk" | Request product info → #contact |
| ProductPage.tsx | Technical parameters | Engineering estimates · validation ongoing |
| ProductPage.tsx | Specification & engineering targets | Specifications — engineering estimates, validation ongoing |
| ProductPage.tsx | mailto CTA | Request product info → /#contact |
| catalogue.ts | Original keys 100% retained | Original keys retained |
| catalogue.ts | High rigidity, zero backlash, tamper resistant | High rigidity, low-backlash drive coupling |
| catalogue.ts | Validated engineering CAD | Engineering estimate (CAD) |
| catalogue.ts | Validated spec / Validated component / Hardware verified / Field validated | Engineering estimate |

## 需要结构改动、当年未做（启用时另需授权）
- 询盘表单（现在 #contact 无 <form>）
- FAQ（无对应 section）
- 三价值块（现有 stats=4 项 / 门况卡=3 张，数量语义不匹配）

## 未定口径
- 安装时间：页面 10 min vs E46 45 min，需 GTM 定。

## 历史 commit（合规文案本体，可随时找回）
2ec98b3（两文件文案）· 6e7bef5（红线清零+HERO）· b2101b5（favicon）

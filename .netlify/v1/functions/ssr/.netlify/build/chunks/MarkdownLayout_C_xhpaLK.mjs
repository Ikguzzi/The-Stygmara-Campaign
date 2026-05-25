import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead, o as renderSlot } from './ssr-function_URz1KW3p.mjs';
import { $ as $$ContentLayout } from './contentLayout_Cy4Q_mwQ.mjs';

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-GB', {
        timeZone: 'UTC',
    });
}

const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  const { title, author, description, image, link, pubDate, tags } = frontmatter;
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "pageTitle": title, "data-astro-cid-xsct23v3": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header data-astro-cid-xsct23v3><div class="postContainer" data-astro-cid-xsct23v3><div class="postHeader" data-astro-cid-xsct23v3><h1 class="h1" data-astro-cid-xsct23v3>${title}</h1><div class="postDetail" data-astro-cid-xsct23v3><p data-astro-cid-xsct23v3>by <a href="" data-astro-cid-xsct23v3>${author}</a> | ${formatDate(pubDate)}</p></div><summary data-astro-cid-xsct23v3><i data-astro-cid-xsct23v3>${description}<i data-astro-cid-xsct23v3></i></i></summary></div><hr data-astro-cid-xsct23v3><div class="postContent" data-astro-cid-xsct23v3><article class="content" data-astro-cid-xsct23v3>${renderSlot($$result2, $$slots["default"])}</article></div></div></header>` })}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };

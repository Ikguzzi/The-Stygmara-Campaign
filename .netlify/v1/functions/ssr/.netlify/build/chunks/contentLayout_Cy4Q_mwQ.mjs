import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead, o as renderSlot } from './ssr-function_URz1KW3p.mjs';
import { $ as $$Navbar, a as $$Sidebar } from './Sidebar_auB6p-o4.mjs';
import { $ as $$Layout } from './Layout_CFtAy0mD.mjs';

const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { siteName } = Astro2.props;
  const { pageTitle } = Astro2.props;
  const { pageSubtitle } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "siteName": siteName, "data-astro-cid-3evfrdmb": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "siteName": siteName, "data-astro-cid-3evfrdmb": true })}${maybeRenderHead()}<div class="mainContainer" data-astro-cid-3evfrdmb>${renderComponent($$result2, "Sidebar", $$Sidebar, { "data-astro-cid-3evfrdmb": true })}<div class="post" data-astro-cid-3evfrdmb>${renderSlot($$result2, $$slots["default"])}</div></div>` })}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/layouts/contentLayout.astro", void 0);

export { $$ContentLayout as $ };

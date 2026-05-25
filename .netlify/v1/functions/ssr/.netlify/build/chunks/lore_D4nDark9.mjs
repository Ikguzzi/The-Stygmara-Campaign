import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_URz1KW3p.mjs';
import { $ as $$Layout } from './Layout_CFtAy0mD.mjs';
import { $ as $$Navbar, a as $$Sidebar } from './Sidebar_auB6p-o4.mjs';

const $$Lore = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Lore";
  const siteName = "Stygmara Campaign";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "siteName": siteName, "data-astro-cid-reexgztw": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "siteName": siteName, "data-astro-cid-reexgztw": true })}${maybeRenderHead()}<div class="mainContainer" data-astro-cid-reexgztw>${renderComponent($$result2, "Sidebar", $$Sidebar, { "data-astro-cid-reexgztw": true })}<div class="post" data-astro-cid-reexgztw><div data-astro-cid-reexgztw><h1 data-astro-cid-reexgztw>${pageTitle}</h1><p data-astro-cid-reexgztw>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur quidem excepturi quis
                    accusantium vero voluptatum temporibus est animi fuga?</p><p data-astro-cid-reexgztw><a href="/posts/Forgotten_Resistance" data-astro-cid-reexgztw>Forgotten Resistance</a></p><p data-astro-cid-reexgztw><a href="/posts/Untitled document" data-astro-cid-reexgztw>Galomar</a></p><p data-astro-cid-reexgztw><a href="/src/content/lore/Forgotten_Resistance" data-astro-cid-reexgztw>Forgotten Resistance (content)</a></p></div></div></div>` })}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/lore.astro", void 0);

const $$file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/lore.astro";
const $$url = "/lore";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Lore,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

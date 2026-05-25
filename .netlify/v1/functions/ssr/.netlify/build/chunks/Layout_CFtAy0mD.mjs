import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { k as addAttribute, n as renderHead, o as renderSlot, p as renderTemplate } from './ssr-function_URz1KW3p.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle } = Astro2.props;
  const { pageSubtitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> <!-- <h1>{pageTitle}</h1> --> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_URz1KW3p.mjs';
import { $ as $$ContentLayout } from './contentLayout_Cy4Q_mwQ.mjs';

const $$Rules = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Rules";
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <h1>${pageTitle}</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur quidem excepturi quis accusantium vero
            voluptatum temporibus est animi fuga?</p> <p><a href="/posts/agendasPeriah">Periah Nexus Agendas</a></p> </div> ` })}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/rules.astro", void 0);

const $$file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/rules.astro";
const $$url = "/rules";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Rules,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_URz1KW3p.mjs';
import { $ as $$ContentLayout } from './contentLayout_Cy4Q_mwQ.mjs';

const $$Agendas = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Rules Index";
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <h1>${pageTitle}</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur quidem excepturi quis accusantium vero
            voluptatum temporibus est animi fuga?</p> <p><a href="agendas.md">Agendas2</a></p> </div> ` })}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/posts/Agendas.astro", void 0);

const $$file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/posts/Agendas.astro";
const $$url = "/posts/Agendas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Agendas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_URz1KW3p.mjs';
import { $ as $$ContentLayout } from './contentLayout_Cy4Q_mwQ.mjs';

const $$Forces = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Forces";
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <h1>${pageTitle}</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur quidem excepturi quis accusantium vero
            voluptatum temporibus est animi fuga?</p> </div> ` })}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/forces.astro", void 0);

const $$file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/forces.astro";
const $$url = "/forces";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Forces,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

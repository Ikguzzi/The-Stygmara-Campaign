import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { m as maybeRenderHead, p as renderTemplate } from './ssr-function_URz1KW3p.mjs';
import 'clsx';
import { d as db, G as GameResults } from './_astro_db_CP0RkUOt.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const battle = await db.select().from(GameResults).where(eq(GameResults.id, id));
  return renderTemplate`${maybeRenderHead()}<h1>Battle: ${battle[0]?.mission}</h1>`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/battles/[id].astro", void 0);

const $$file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/battles/[id].astro";
const $$url = "/battles/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_URz1KW3p.mjs';
import { d as db, R as Rosters } from './_astro_db_CP0RkUOt.mjs';
import { $ as $$ContentLayout } from './contentLayout_Cy4Q_mwQ.mjs';
import { a as $$Navigation, $ as $$NavCard } from './NavCard_sjO9omNi.mjs';
import { $ as $$Table } from './Table_2Ultr4Ri.mjs';

const $$Factions = createComponent(async ($$result, $$props, $$slots) => {
  const rosters = await db.select().from(Rosters);
  const pageTitle = "Factions";
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <h1>${pageTitle}</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur quidem excepturi quis accusantium vero
            voluptatum temporibus est animi fuga?</p> ${renderComponent($$result2, "Navigation", $$Navigation, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "NavCard", $$NavCard, { "cardTitle": "Imperium of Man", "cardLink": "/lore/", "cardImg": "src/assets/Lore.jpg", "cardImgAlt": "" })} ${renderComponent($$result3, "NavCard", $$NavCard, { "cardTitle": "Tyranids", "cardLink": "/factions/", "cardImg": "src/assets/Factions.png", "cardImgAlt": "" })} ${renderComponent($$result3, "NavCard", $$NavCard, { "cardTitle": "Orks", "cardLink": "/forces/", "cardImg": "src/assets/Forces.png", "cardImgAlt": "" })} ` })} </div> <div> ${renderComponent($$result2, "DataTable", $$Table, { "data": rosters, "title": "Rosters", "columns": ["name", "faction", "detachment", "battleSize", "createdAt"], "fancyColumns": ["Roster Name", "Faction", "Detatchment", "Size", "Created"] })} </div> ` })}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/factions.astro", void 0);

const $$file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/factions.astro";
const $$url = "/factions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Factions,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

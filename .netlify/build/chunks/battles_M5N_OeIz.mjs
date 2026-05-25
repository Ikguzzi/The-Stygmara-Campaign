import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, e as Fragment, p as renderTemplate, k as addAttribute } from './ssr-function_URz1KW3p.mjs';
import { d as db, G as GameResults } from './_astro_db_CP0RkUOt.mjs';
import { $ as $$ContentLayout } from './contentLayout_Cy4Q_mwQ.mjs';
import { $ as $$Table } from './Table_2Ultr4Ri.mjs';

const $$InsertForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$InsertForm;
  const { data, title, columns: selectedColumns, fancyColumns } = Astro2.props;
  const columns = selectedColumns ?? (data && data.length > 0 ? Object.keys(data[0]) : []);
  return renderTemplate`${maybeRenderHead()}<form method="POST" style="display: grid"> ${columns.map((col) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <label${addAttribute(col, "for")}>${fancyColumns?.[columns.indexOf(col)] ?? col}</label> <input${addAttribute(col, "id")}${addAttribute(col, "name")}> ` })}`)} <button type="submit">Submit</button> </form>`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/components/InsertForm.astro", void 0);

const $$Battles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Battles;
  await db.select().from(GameResults);
  const gameResults = await db.select().from(GameResults);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    formData.get("author");
    formData.get("body");
  }
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "InsertForm", $$InsertForm, { "data": gameResults, "title": "Battle Log", "columns": ["missionName", "attackerId", "defenderId", "playedAt"], "fancyColumns": ["Battle name", "Attacker", "Defender", "Played"] })} ${renderComponent($$result2, "DataTable", $$Table, { "data": gameResults, "title": "Battle Log", "columns": ["name", "faction", "detachment", "battleSize", "createdAt"], "fancyColumns": ["Roster Name", "Faction", "Detatchment", "Size", "Created"] })} ` })}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/battles.astro", void 0);

const $$file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/battles.astro";
const $$url = "/battles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Battles,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { m as maybeRenderHead, p as renderTemplate } from './ssr-function_URz1KW3p.mjs';
import 'clsx';

const $$Table = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Table;
  const { data, title, columns: selectedColumns, fancyColumns } = Astro2.props;
  const columns = selectedColumns ?? (data.length > 0 ? Object.keys(data[0]) : []);
  const headers = fancyColumns ?? columns;
  return renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2>${title}</h2>`}${data.length === 0 ? renderTemplate`<p>No data found.</p>` : renderTemplate`<table><thead><tr>${headers.map((header) => renderTemplate`<th>${header}</th>`)}</tr></thead><tbody>${data.map((row) => renderTemplate`<tr>${columns.map((col) => renderTemplate`<td>${row[col] ?? "-"}</td>`)}</tr>`)}</tbody></table>`}`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/components/Table.astro", void 0);

export { $$Table as $ };

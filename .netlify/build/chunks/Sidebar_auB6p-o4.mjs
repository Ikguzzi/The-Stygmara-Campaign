import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { m as maybeRenderHead, p as renderTemplate } from './ssr-function_URz1KW3p.mjs';
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const { pageTitle } = Astro2.props;
  const siteName = "Stygmara Campaign";
  return renderTemplate`${maybeRenderHead()}<nav class="navContainer"> <div class="navName"> <strong> <a href="/">${siteName}</a> </strong> </div> <ul> <li> <b> <a href="/">Home</a> </b> </li> <li> <b> <a href="/lore/">Lore</a> </b> </li> <li> <b> <a href="/factions/">Factions</a> </b> </li> <li> <b> <a href="/battles/">Battles</a> </b> </li> <li> <b> <a href="/forces/">Forces</a> </b> </li> <li> <b> <a href="/rules/">Rules</a> </b> </li> </ul> </nav>`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/components/Navbar.astro", void 0);

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Sidebar;
  const { pageTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="aside" data-astro-cid-ssfzsv2f> <div class="sideContainer" data-astro-cid-ssfzsv2f>Aside</div> </div>`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/components/Sidebar.astro", void 0);

export { $$Navbar as $, $$Sidebar as a };

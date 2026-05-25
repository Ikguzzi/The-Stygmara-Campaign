import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { m as maybeRenderHead, o as renderSlot, p as renderTemplate, k as addAttribute } from './ssr-function_URz1KW3p.mjs';
import 'clsx';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navLinks"> ${renderSlot($$result, $$slots["default"])} </div> <!-- <div class="navContainer">
  <div class="card" id="cardLore">
    <div class="cardGradient"></div>
    <img src="media\\loreImage480x602.jpg" alt="" />
    <div class="cardTitle">Lore</div>
  </div>
  <div class="card" id="cardFactions">
    <div class="cardGradient"></div>
    <img src="media\\Inquisitor-Jenita-Huln.png" alt="" />
    <div class="cardTitle">Factions</div>
  </div>
  <div class="card" id="cardBattles">
    <div class="cardGradient"></div>
    <img src="media\\Ork-Vs-Tyranid.png" alt="" />
    <div class="cardTitle">Battles</div>
  </div>
  <div class="card" id="cardForces">
    <div class="cardGradient"></div>
    <img src="media\\Blood-Angels-Terminator-Assault.png" alt="" />
    <div class="cardTitle">Forces</div>
  </div>
</div> -->`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/components/Navigation.astro", void 0);

const $$NavCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NavCard;
  const { cardImg } = Astro2.props;
  const { cardTitle } = Astro2.props;
  const { cardImgAlt } = Astro2.props;
  const { cardLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(cardLink, "href")} class="card"> <div class="cardGradient"></div> <img${addAttribute(cardImg, "src")}${addAttribute(cardImgAlt, "alt")}> <div class="cardTitle">${cardTitle}</div> </a>`;
}, "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/components/NavCard.astro", void 0);

export { $$NavCard as $, $$Navigation as a };

import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, u as unescapeHTML } from './ssr-function_URz1KW3p.mjs';
import { $ as $$MarkdownLayout } from './MarkdownLayout_C_xhpaLK.mjs';

const html = () => "<h3 id=\"acquired-by---lieutenant-andromedes\">Acquired by - Lieutenant Andromedes</h3>\n<p>Embroiled in melee combat often, Andromedes found his armor worn down in battle after battle, needing components to be\nreplaced and changed out at times. With his Storm Shield recieving battering blows from enemy after enemy, raining down\nupon it like thunderous bolter blasts - it was only natural that the Blood Ravens lieutenant would eventually suffer an\ninjury. Yet he fought on in spite of the odds, his power weapon tearing through enemy after enemy and his shield\nprotecting his brothers from the claws of death.</p>\n<p>Upon his return to the Omnis Arcanum, while his Mark X power armor was being overseen and maintained, Andromedes was\noffered the special honor of being gifted an armor that had been worn by a space marine cousin long since passed. The\ncousin was from an unknown chapter, the shoulder pads of his armor which had been found on the now Necron Crownworld of\nBeramus III, a strange fate for such a mastercrafted piece of armor, especially for a model so much more recent.</p>\n<p>The Tacticus Armor was battered, having seen it’s fair share of battle - yet the armor still somehow seemed resplendant\nin spite of such wear and tear. Piece of the armor were decorated in liturgies and ornamentations to the omnissiah, and\nit was made especially ornate by the various markings across it. The shoulder pads had been replaced by those of the\nblood ravens, and the armor had been painted in their colors, yet one could still tell it stood out by the sheer\ncraftsmanship that had gone into.</p>\n<p>Accepting the armor, Lieutenant Andromedes donned it and was once again given his purity seals and oaths by a chaplain\nof the Blood Ravens aboard the Omnis Arcanum. That was how Andromedes came to wear the master-crafted Mark X Tacticus\nPower Armor, known only as the Forgotten Resistance - for whoever that cousin was that had worn it, he had perished in\nan attempt to protect the planet of Beramus III from the necron threat, and thus been forgotten. By the pose he had been\nfound in, the cousin had fought into his last breath, and yet his deeds had come to be forgotten.</p>\n<hr>\n<p>Although somewhat worn and battle-scarred on the exterior, the Mk.X, Tacticius Power Armor has been touched up\ncarefully. It is covered in a range of different liturgies and texts praising the Omnissiah, as well as a few ornaments\ndoing the same. It has been painted in the colors of the Blood Ravens after it was stripped off of it’s painted by time,\nand as Lieutenant Andromedes now owned it, it bears quite a few purity seals. A particularly deep scratch has struck the\narmor across the chest, although it does not compromise the integrity of the plating because of the master-worked design\nand repairs done, it is nevertheless still slightly visible.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownLayout.astro","title":"Forgotten Resistance","author":"Alex Skoglund","description":"Acquired by - Lieutenant Andromedes","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"The Astro logo on a dark background with a purple gradient arc."},"link":"https://wahapedia.ru/wh40k10ed/the-rules/pariah-nexus/","pubDate":"2023-11-27T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/posts/Forgotten_Resistance.md";
				const url = "/posts/Forgotten_Resistance";
				function rawContent() {
					return "   \n                                            \n                             \n                       \n                                                  \n      \n                                                 \n                                                                        \n                                                              \n                   \n                                                              \n   \n\n### Acquired by - Lieutenant Andromedes\n\nEmbroiled in melee combat often, Andromedes found his armor worn down in battle after battle, needing components to be\nreplaced and changed out at times. With his Storm Shield recieving battering blows from enemy after enemy, raining down\nupon it like thunderous bolter blasts - it was only natural that the Blood Ravens lieutenant would eventually suffer an\ninjury. Yet he fought on in spite of the odds, his power weapon tearing through enemy after enemy and his shield\nprotecting his brothers from the claws of death.\n\nUpon his return to the Omnis Arcanum, while his Mark X power armor was being overseen and maintained, Andromedes was\noffered the special honor of being gifted an armor that had been worn by a space marine cousin long since passed. The\ncousin was from an unknown chapter, the shoulder pads of his armor which had been found on the now Necron Crownworld of\nBeramus III, a strange fate for such a mastercrafted piece of armor, especially for a model so much more recent.\n\nThe Tacticus Armor was battered, having seen it's fair share of battle - yet the armor still somehow seemed resplendant\nin spite of such wear and tear. Piece of the armor were decorated in liturgies and ornamentations to the omnissiah, and\nit was made especially ornate by the various markings across it. The shoulder pads had been replaced by those of the\nblood ravens, and the armor had been painted in their colors, yet one could still tell it stood out by the sheer\ncraftsmanship that had gone into.\n\nAccepting the armor, Lieutenant Andromedes donned it and was once again given his purity seals and oaths by a chaplain\nof the Blood Ravens aboard the Omnis Arcanum. That was how Andromedes came to wear the master-crafted Mark X Tacticus\nPower Armor, known only as the Forgotten Resistance - for whoever that cousin was that had worn it, he had perished in\nan attempt to protect the planet of Beramus III from the necron threat, and thus been forgotten. By the pose he had been\nfound in, the cousin had fought into his last breath, and yet his deeds had come to be forgotten.\n\n---\n\nAlthough somewhat worn and battle-scarred on the exterior, the Mk.X, Tacticius Power Armor has been touched up\ncarefully. It is covered in a range of different liturgies and texts praising the Omnissiah, as well as a few ornaments\ndoing the same. It has been painted in the colors of the Blood Ravens after it was stripped off of it's painted by time,\nand as Lieutenant Andromedes now owned it, it bears quite a few purity seals. A particularly deep scratch has struck the\narmor across the chest, although it does not compromise the integrity of the plating because of the master-worked design\nand repairs done, it is nevertheless still slightly visible.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":3,"slug":"acquired-by---lieutenant-andromedes","text":"Acquired by - Lieutenant Andromedes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

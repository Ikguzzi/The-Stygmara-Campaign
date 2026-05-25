import { c as createComponent } from './astro-component_J6Oy9y2B.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, u as unescapeHTML } from './ssr-function_URz1KW3p.mjs';
import { $ as $$MarkdownLayout } from './MarkdownLayout_C_xhpaLK.mjs';

const html = () => "<h1 id=\"galomarian-streetfighters\">Galomarian Streetfighters</h1>\n<p>The Galomarian Streetfighters are a distinguished Astra Militarum regiment known for their expertise in urban warfare.\nHailing from the Galomar system, they’ve gained renown for their adaptability and resilience in the face of adversity,\nespecially in urban warfare scenarios and hostile environments within their system.</p>\n<p><strong>Combat Doctrine:</strong> Renowned for their urban combat skills, they navigate complex cityscapes with ease, using cover,\nambush points, and close-quarter tactics to outmaneuver adversaries. Additionally, they employ heavy artillery and tanks\nto clear enemy fortifications.</p>\n<p><strong>Adaptive Strategies:</strong> The Galomarian Streetfighters’ adaptability sets them apart. They swiftly adjust tactics to\nsuit terrain and adversaries, whether fighting within cities or engaging in orbital combat, maximizing their\neffectiveness.</p>\n<p><strong>Regimental Culture:</strong> Emphasizing discipline, precision, and adaptability, the regiment fosters pride in marksmanship\nand unity among soldiers. Officers instill the importance of each soldier’s role, resulting in a cohesive and\nwell-coordinated unit.</p>\n<p><strong>Notable Campaigns:</strong> The Galomarian Rifles have participated in numerous campaigns across the Galamar system,\ndefending Imperial interests against various threats. Their most celebrated victory was the Catatoni campaign where the\nGalomarian ceased the starport on Catatoni Prime against a superior force. This victory led to the recapture of the\nplanet.</p>\n<p><strong>Lore:</strong> During the Great Crusade, the Galomar system belonged to a lost human civilization that prioritized sprawling\ncities and industries. After the campaign, a Solar Auxilia force governed the system in the Emperor’s name, expanding\ncities and industries, and supplying military equipment to other Imperial systems.</p>\n<p>During the Horus Heresy, Galomar initially sided with the Emperor, but a betrayal by the fencibles and garrison on\nGalomar III 006.M31 led to heavy fighting over control of the system. Brutal fighting over industrial zones and cities\nbuilt the foundation of the Galomarian expertise in urban fighting.</p>\n<p>Post-Siege of Terra, Imperial forces reclaimed the system, defeating enemy forces during the Siege of Khent’s Port\n021.M31. Surviving rebel forces sought independence in the distant asteroid belts, leading to ongoing conflict, and\nforcing a split in the Streetfighters’ forces.</p>\n<p>The Fall of Cadia and the Great Rift’s creation isolated Galomar, causing strained supplies, chaos cult invasions, and\nskirmishes among planets and rebels. Despite this, new regiments were raised for the Adeptus Ministorum, sent to distant\ncampaigns.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownLayout.astro","title":"Galomar","author":"Edvin","description":"Acquired by - Lieutenant Andromedes","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"The Astro logo on a dark background with a purple gradient arc."},"link":"https://wahapedia.ru/wh40k10ed/the-rules/pariah-nexus/","pubDate":"2023-11-27T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file = "/home/ikguzzi/Projects/The-Stygmara-Campaign/src/pages/posts/Untitled document.md";
				const url = "/posts/Untitled document";
				function rawContent() {
					return "   \n                                            \n                \n               \n                                                  \n      \n                                                 \n                                                                        \n                                                              \n                   \n                                                              \n   \n\n# Galomarian Streetfighters\n\nThe Galomarian Streetfighters are a distinguished Astra Militarum regiment known for their expertise in urban warfare.\nHailing from the Galomar system, they've gained renown for their adaptability and resilience in the face of adversity,\nespecially in urban warfare scenarios and hostile environments within their system.\n\n**Combat Doctrine:** Renowned for their urban combat skills, they navigate complex cityscapes with ease, using cover,\nambush points, and close-quarter tactics to outmaneuver adversaries. Additionally, they employ heavy artillery and tanks\nto clear enemy fortifications.\n\n**Adaptive Strategies:** The Galomarian Streetfighters' adaptability sets them apart. They swiftly adjust tactics to\nsuit terrain and adversaries, whether fighting within cities or engaging in orbital combat, maximizing their\neffectiveness.\n\n**Regimental Culture:** Emphasizing discipline, precision, and adaptability, the regiment fosters pride in marksmanship\nand unity among soldiers. Officers instill the importance of each soldier's role, resulting in a cohesive and\nwell-coordinated unit.\n\n**Notable Campaigns:** The Galomarian Rifles have participated in numerous campaigns across the Galamar system,\ndefending Imperial interests against various threats. Their most celebrated victory was the Catatoni campaign where the\nGalomarian ceased the starport on Catatoni Prime against a superior force. This victory led to the recapture of the\nplanet.\n\n**Lore:** During the Great Crusade, the Galomar system belonged to a lost human civilization that prioritized sprawling\ncities and industries. After the campaign, a Solar Auxilia force governed the system in the Emperor's name, expanding\ncities and industries, and supplying military equipment to other Imperial systems.\n\nDuring the Horus Heresy, Galomar initially sided with the Emperor, but a betrayal by the fencibles and garrison on\nGalomar III 006.M31 led to heavy fighting over control of the system. Brutal fighting over industrial zones and cities\nbuilt the foundation of the Galomarian expertise in urban fighting.\n\nPost-Siege of Terra, Imperial forces reclaimed the system, defeating enemy forces during the Siege of Khent’s Port\n021.M31. Surviving rebel forces sought independence in the distant asteroid belts, leading to ongoing conflict, and\nforcing a split in the Streetfighters' forces.\n\nThe Fall of Cadia and the Great Rift's creation isolated Galomar, causing strained supplies, chaos cult invasions, and\nskirmishes among planets and rebels. Despite this, new regiments were raised for the Adeptus Ministorum, sent to distant\ncampaigns.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"galomarian-streetfighters","text":"Galomarian Streetfighters"}];
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

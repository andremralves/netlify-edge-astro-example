import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as addAttribute } from '../astro.8c5b794a.mjs';

const $$Astro$1 = createAstro("http://example.com/");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id;
  return renderTemplate`<html>
<head>
	<title>Testing</title>
${renderHead($$result)}</head>
<body>
	<h1>Testing</h1>
</body></html>`;
}, "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/dynamic-route/src/pages/products/[id].astro");

const $$file$1 = "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/dynamic-route/src/pages/products/[id].astro";
const $$url$1 = "/products/[id]";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("http://example.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>Astro</title>
	${renderHead($$result)}</head>
	<body>
		<h1>Astro</h1>
	</body></html>`;
}, "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/dynamic-route/src/pages/pets/index.astro");

const $$file = "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/dynamic-route/src/pages/pets/index.astro";
const $$url = "/pets";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };

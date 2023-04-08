import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../astro.8debba6b.mjs';

const $$Astro$1 = createAstro("http://example.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html>
<head>
	<title>Testing</title>
${renderHead($$result)}</head>
<body>
	<h1>testing</h1>
</body></html>`;
}, "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/prerender/src/pages/index.astro");

const $$file$1 = "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/prerender/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("http://example.com/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html>
<head>
	<title>Testing</title>
${renderHead($$result)}</head>
<body>
	<h1>testing</h1>
</body></html>`;
}, "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/prerender/src/pages/404.astro");

const $$file = "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/prerender/src/pages/404.astro";
const $$url = "/404";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };

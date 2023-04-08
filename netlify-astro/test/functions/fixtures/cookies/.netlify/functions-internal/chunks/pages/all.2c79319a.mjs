import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../astro.8debba6b.mjs';

const $$Astro = createAstro("http://example.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html>
<head><title>Testing</title>${renderHead($$result)}</head>
<body>
	<h1>Testing</h1>
</body></html>`;
}, "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/cookies/src/pages/index.astro");

const $$file = "/home/andre/repos/astro/packages/integrations/netlify/test/functions/fixtures/cookies/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

function post() {
	const headers = new Headers();
  headers.append('Set-Cookie', `foo=foo; HttpOnly`);
  headers.append('Set-Cookie', `bar=bar; HttpOnly`);
	headers.append('Location', '/');

  return new Response('', {
    status: 301,
    headers,
  });
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	post
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };

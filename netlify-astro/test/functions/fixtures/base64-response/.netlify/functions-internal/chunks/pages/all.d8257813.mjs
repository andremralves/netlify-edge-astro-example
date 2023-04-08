function get$1() {
	const buffer = Buffer.from('base64 test string', 'utf-8');

  return new Response(buffer, {
    status: 200,
		headers: {
			'content-type': 'image/jpeg;foo=foo'
		}
  });
}

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get: get$1
}, Symbol.toStringTag, { value: 'Module' }));

function get() {
	const buffer = Buffer.from('base64 test font', 'utf-8');

  return new Response(buffer, {
    status: 200,
		headers: {
			'Content-Type': 'font/otf'
		}
  });
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };

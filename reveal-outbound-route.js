const fs = require('fs');
const url = require('url');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const urlParams = url.parse('http://UStzjZowbV1dDgeWXxzYgxnX:f23b6ba7-731f-4e1a-a4cc-f7316b81bc46@tntiidqmm10.sandbox.verygoodproxy.com');
const agent = new HttpsProxyAgent({
  ...urlParams,
  ca: [fs.readFileSync('sandbox.pem')],
});
async function getData() {
  let result;
  try {
    result = await fetch('https://echo.apps.verygood.systems/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
		cc_number: 'tok_sandbox_gsrBVpBcSjwLLvuvFnwq4w',
		cc_exp: 'tok_sandbox_oYcXvgqvDUr2qnXUTbUvta',
		cc_cvv: 'tok_sandbox_pgmkghTY7PWWozKXNfokJ9',
      }),
      agent,
    });
  } catch (e) {
    console.error(e);
  }
  return await result.text();
}
getData().then(response => console.log(response));

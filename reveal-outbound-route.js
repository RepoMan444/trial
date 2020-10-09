const fs = require('fs');
const url = require('url');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const urlParams = url.parse('http://$HTTPS_PROXY_USERNAME:$HTTPS_PROXY_PASSWORD@tntiidqmm10.sandbox.verygoodproxy.com');
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
		cc_number: 'tok_sandbox_4mna9xatzHo63X69w6Kwox',
		cc_exp: 'tok_sandbox_9vPgMC8TGEhL4GbEmtaYLj',
		cc_cvv: 'tok_sandbox_oNPhEq7J2jpVPEh6DUkYod',
      }),
      agent,
    });
  } catch (e) {
    console.error(e);
  }
  return await result.text();
}
getData().then(response => console.log(response));

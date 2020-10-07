const fs = require('fs');
const url = require('url');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const urlParams = url.parse('http://US4r9TrEfZw2viQ5yBZAjo3r:aed4fd50-a3ce-40ab-98d2-0d5d2923cc31@tntleumfvhw.sandbox.verygoodproxy.com:8080');
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
		cc_number: 'ALIAS',  /* replace with tokenized value after successful inbound request */
		cc_exp: 'ALIAS',  /* replace with tokenized value after successful inbound request */
		cc_cvv: 'ALIAS',  /* replace with tokenized value after successful inbound request */
      }),
      agent,
    });
  } catch (e) {
    console.error(e);
  }
  return await result.text();
}
getData().then(response => console.log(response));

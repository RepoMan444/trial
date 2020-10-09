const fetch = require('node-fetch');

async function getData() {
  let result;

  try {
    result = await fetch('https://tntiidqmm10.sandbox.verygoodproxy.com/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cc_number: '5111311121111111',
		cc_exp: '07/2024',
		cc_cvv: '989',
      }),
    });
  } catch (e) {
    console.error(e);
  }

  return await result.text();
}

getData().then(response => console.log(response));

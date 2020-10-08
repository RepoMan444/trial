const fetch = require('node-fetch');

async function getData() {
  let result;

  try {
    result = await fetch('https://tntiidqmm10.sandbox.verygoodproxy.com/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cc_number: '4111311121111111',
		cc_exp: '06/2022',
		cc_cvv: '322',
      }),
    });
  } catch (e) {
    console.error(e);
  }

  return await result.text();
}

getData().then(response => console.log(response));

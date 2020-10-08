# trial

I have written 2 test apps in NodeJS:

1. redact-inbound-route.js - Redacts data 
2. reveal-outbound-route.js - Reveals data

## Installation

Install NodeJS & required modules, add .JS files into install directory, then run each app from install directory:

1. redact-inbound-route.js
```bash
node redact-inbound-route.js
```
2. reveal-outbound-route.js
```bash
node reveal-outbound-route.js
```

## Result

1. Original data values are sent, and the response data shows the tokenized alias values.

2. Tokenized values are sent, and the response data shows original values before tokenization/alias'ing in step #1.

## Notes

- I manually set up the filter operations because I could not get a log entry that showed the Body tab & Secure This Payload button. This would be another way I could select data for segmentation/alias'ing - click Secure This Payload and click on each JSON string / data element to be tokenized.

- My NodeJS app points to my outbound route URL https://USERNAME:PASSWORD@tntiidqmm10.sandbox.verygoodproxy.com (no port 8080 as provided by the dashboard). When I run the app, it returns the original values from my vault as expected. However, sending data in Postman to this same outbound route URL returns the same values I sent in the request, as if it's hitting an echo server. What may be causing this, assuming I am following the correct steps?

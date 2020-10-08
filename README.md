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

1. After running redact-inbound-route.js , the returned data shows the tokenized alias'ed values. I manually set up the filter operations because I could not get a log entry that showed the Body tab & Secure This Payload button. This would be another way I could select data for segmentation/alias'ing - click Secure This Payload and click on each JSON string / data element to be tokenized.

2. After running reveal-outbound-route.js and setting the tokenized values in JSON.stringify , the returned data should show the original values.

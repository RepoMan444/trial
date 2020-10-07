# trial

I have written 2 test apps in NodeJS:
1. redact-inbound-route.js - Redacts data 
2. reveal-outbound-route.js - Reveals data

## Installation

Install NodeJS & required modules, then run each app from the install directory using the commands below:

1. redact-inbound-route.js
```bash
node redact-inbound-route.js
```
2. reveal-outbound-route.js
```bash
node reveal-outbound-route.js
```

## Expected Result

Dashboard log entries should show received data & replaced/tokenized values. Due to my 429 errors / too many requests, I cannot complete this task until later. When resolved, I would then check logs, pick a successful entry, click the Body tab, then click Secure Payload. Then I would select each JSON string / data element I want to be segmented/tokenized.

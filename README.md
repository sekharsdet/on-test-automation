# on-test-automation
## Prerequisites

- NodeJS >=14
- Java >=8 to genarate allure reports
- Allure command line tools to see reports

### To start the project locally:

1. from the root folder please run 
```
npm install
npx playwright install --with-deps
```
2. To execute tests on chrome
```
 npm run chrome
```
3. To execute tests on firefox
```
  npm run firefox
```
4. To execute tests on safari
```
  npm run webkit
```
5. To generate HTML report
```
npm run report
```

### Tests
Tests are located at on-test-automation\tests\testCheckout.spec.js


### Technologies used:
- NodeJS
- playwright
- Allure report
- GitHub Actions 

### Notes:
 - GitHub Actions are configured for the project, but all the available GitHub Action runners are hosted in the US, Hence Our tests are failing (Due to Geo location) and not able to generate the report. Please let me know if you need more details on the GitHub Actions and its Runners

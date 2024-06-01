# Playwright Accessibility Test Script


## Installation
Install the project with npm

```bash
git clone https://github.com/omarchouikh/axe-playwright.git
```
```bash
npm i
```

This repository contains a Playwright test script for verifying accessibility compliance using the Axe accessibility testing tool. The test checks for issues against various WCAG (Web Content Accessibility Guidelines) standards and generates an HTML report of the results.

### Prerequisites
- Node.js (v20 or later)

- Playwright

- Axe-core for Playwright

- Axe HTML Reporter


## Accessibility Test
This test script verifies that there are no accessibility issues on the homepage of the application.

### Explanation
- Accessibility Scan: Uses AxeBuilder to perform an accessibility scan against specified WCAG tags.
- Report Generation: Creates an HTML report of the scan results using createHtmlReport.
- Assertion: Asserts that there are no accessibility violations.


## Running the Tests
```bash
    npx playwright test
```

Make sure to replace the placeholders in the createHtmlReport options with actual values:

projectKey: Name of your project.

reportFileName: Desired name for the generated report file.

outputDir: Directory path where the report will be saved.

**Enjoy :D**

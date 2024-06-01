// Import necessary modules
import AxeBuilder from '@axe-core/playwright'; // Axe accessibility testing tool for Playwright
import { expect, test } from '@playwright/test'; // Playwright test functions and assertions
import { createHtmlReport } from 'axe-html-reporter'; // Function to create HTML reports from Axe results

// Define a test suite to verify there are no accessibility issues
test('Verify there is no accessibility issues @a11y', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('/');

  // Wait for the element with class '.locator' to appear on the page
  await page.locator('.locator').waitFor();

  // Perform accessibility scan using Axe with specified WCAG tags
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  // Generate HTML report for the accessibility scan results
  createHtmlReport({
    results: accessibilityScanResults,
    options: {
      projectKey: '$name of your project', // Project name for the report
      reportFileName: 'nameofthegeneratedreport.html', // Name of the generated report file
      outputDir: 'output/path/of/the/report', // Output directory for the report
    },
  });

  // Assert that there are no accessibility violations
  expect(accessibilityScanResults.violations).toEqual([]);
});

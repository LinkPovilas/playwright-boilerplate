# Playwright boilerplate

A Playwright boilerplate project that provides a basic structure and pre-configured setup. It includes the necessary files, directories, and configurations needed to get a project up and running quickly, without having to set up everything from scratch.

# Table Of Contents

- [Playwright boilerplate](#playwright-boilerplate)
- [Table Of Contents](#table-of-contents)
- [System Requirements](#system-requirements)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Viewing The Last Test Report](#viewing-the-last-test-report)

# System Requirements

- Node.js 18+
- Operating system:
  - Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
  - macOS 13 Ventura, or macOS 14 Sonoma.
  - Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, Ubuntu 24.04, on x86-64 and arm64 architecture.

# Prerequisites

Adjust values based on the test environment:

1. An active account. ([Register in Prod](https://home.openweathermap.org/users/sign_up))
2. An activated API key. ([My API Keys in Prod](https://home.openweathermap.org/api_keys))
3. A home page URL. Prod: "https://home.openweathermap.org/"
4. A base API URL. Prod: "https://api.openweathermap.org/"

Copy the `.env.example` file, rename it to `.env` and fill in the values.

Example:

```Shell
# .env
API_KEY=123456
BASE_URL=https://home.openweathermap.org/
BASE_API_URL=https://api.openweathermap.org/
USER_EMAIL=test@gmail.com
USER_PASSWORD=Test@2024_UI_API
```

# Setup

```Shell
# Install dependencies.
npm i

# Install Playwright browsers.
npx playwright install

# Install Playwright operating system dependencies.
sudo npx playwright install-deps
```

# Running Tests

```Shell
# Run the end-to-end tests.
npm test

# Start the interactive UI mode.
npm run ui

# Run the tests in debug mode.
npm run debug
```

# Viewing The Last Test Report

```Shell
# To open the most recent HTML report in your default browser.
npm run report
```

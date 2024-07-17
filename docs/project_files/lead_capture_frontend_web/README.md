# Lead Capture Form Project

This project is a lead capture form built using Next.js and Formik for form handling and validation, with Playwright for end-to-end testing and Jest for unit testing.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (which includes npm).
- You have a [Git](https://git-scm.com/) client installed.

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo

```sh
git clone https://github.com/ahmadkhudeish/leads-capture.git
```

2. Change into the project directory

```sh
cd project_files/lead_capture_frontend_web
```

3. Install npm packages

```sh
npm install
```

4. Running the Application
   To start the development server:

```sh
npm run dev
```

5. Running the Tests
   This project uses Jest for unit tests and Playwright for end-to-end tests.

- Running Unit Tests with jes

```sh
npm test
```

- Running End-to-End Tests with Playwright - Make sure the development server is running:

```sh
npm run dev
```

- In a separate terminal, run the Playwright tests:

```sh
npm run test:e2e
```

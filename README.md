# Lead Capture Proposal

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
cd docs/project_files/lead_capture_frontend_web
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

- Running Unit Tests with jest, please use the following command

```sh
npm test
```

- Running end-to-end test using Playwright, please use the following command:

```sh
npm run test:e2e
```

## Project structure

```sh
project_root/
├── e2e/
│   └── leadCaptureForm.spec.ts         # End-to-end tests
├── src/
│   └── components/
│       └── LeadCaptureForm.tsx         # Lead capture form component
│   └── hooks/
│       └── useLeadCaptureForm.ts       # Formik hook for form handling and validation
│   └── schemas/
│       └── leadSchema.ts               # Yup validation schema
│   └── services/
│       └── leads.ts                    # API service for lead capture
│   └── utils/
│       └── apiBase.ts                  # Base API utility
├── tests/
│   └── sanitizeLeadsData.test.ts       # Unit tests
├── jest.config.js                      # Jest configuration
├── playwright.config.ts                # Playwright configuration
├── package.json                        # npm scripts and dependencies
├── README.md                           # Project documentation
└── tsconfig.json                       # TypeScript configuration
```

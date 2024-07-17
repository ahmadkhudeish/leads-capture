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
├── app/                                # Application source files
│   ├── api/                            # API route handlers
│   │   └── leads/
│   │       ├── model.ts                # Lead model definition
│   │       ├── route.ts                # API route handler for lead capture
│   │       ├── sanitizations.test.ts   # Unit tests for data sanitization
│   │       ├── sanitizations.ts        # Data sanitization functions
│   │       └── validations.ts          # Data validation schema (Yup)
│   ├── components/                     # React components
│   │   └── LeadCaptureForm.tsx         # Lead capture form component
│   ├── hooks/                          # Custom React hooks
│   │   └── useLeadCaptureForm.ts       # Hook for form handling and validation
│   ├── services/                       # Service files for API calls
│   │   └── leads.ts                    # Service for lead capture API calls
│   ├── utils/                          # Utility files
│   │   └── apiBase.ts                  # Base API utility for HTTP requests
│   ├── layout.tsx                      # Layout component
│   └── page.tsx                        # Main page component
├── e2e/                                # End-to-end tests
│   └── leadCaptureForm.spec.ts         # Playwright tests for the lead capture form
```

# O1 XML Parser

A personal utility to parse XML from OpenAI's O1 model responses, providing a simple form to paste XML and automatically apply the changes to your local project.

## Table of Contents
- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Applying XML Changes](#applying-xml-changes)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project is built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It allows you to paste XML containing file operations (CREATE, UPDATE, DELETE) and automatically applies these changes to your local filesystem.

---

## Requirements

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/))

---

## Installation

1. **Clone the Repository** (or download the source code):
   ```bash
   git clone https://github.com/amulifts/xml-parser
   cd o1-xml-parser
   ```
   
2. **Install Dependencies**:
    
    ```bash
    npm install
    ```

## Usage

### 1. Run Development Server

```bash
npm run dev
```

This starts a local development server, typically at [http://localhost:3000](http://localhost:3000/).

### 2. Build for Production

```bash
npm run build

```

This compiles the Next.js application for production usage. Then you can run:

```bash
npm run start

```

to serve the production build.

## Applying XML Changes

1. **Open** [http://localhost:3000](http://localhost:3000/) in your browser.
2. **Enter** the file path to your local project directory in the `Project Directory` field (optional if you have a default in `.env`).
3. **Paste** the XML in the `Paste XML here` text area.
4. **Click** "Apply" to execute the file operations:
    - `CREATE`: Creates new files (requires valid `file_code`).
    - `UPDATE`: Overwrites the existing file with the given `file_code`.
    - `DELETE`: Removes the file if it exists.

---

## Environment Variables

An example environment file is included as `.env.example`. Rename it to `.env` (or create a new one) at the project root, and adjust accordingly:

```
PROJECT_DIRECTORY=/absolute/path/to/your/target/project

```

- If no directory is provided in the front-end form, the app uses `PROJECT_DIRECTORY` from `.env`.

---

## Contributing

1. **Fork** the repository.
2. **Create** a new branch for your changes.
3. **Commit** and **push** your changes to the branch.
4. **Open** a pull request on GitHub.

---
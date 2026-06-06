# Workspace Reservation System SPA

## Description

This project is a Single Page Application (SPA) built with JavaScript, Vite, Tailwind CSS, and JSON Server.

The application allows users to log in and manage workspace reservations through a simple and interactive interface.

## Features

- User authentication
- Session management
- Protected routes
- Create reservations
- View reservations
- Edit reservations
- Delete reservations
- Role-based access
- JSON Server API integration

## Technologies

- JavaScript (ES6+)
- Vite
- Tailwind CSS
- JSON Server

## Installation

1. Clone the repository:

```bash
git clone (https://github.com/valejo0310-svg/Performance_Test_Module3)
````

2. Install dependencies:

```bash
npm install
```

3. Start the project:

```bash
npm run dev
```

This command runs:

* Vite development server
* JSON Server on port `3001`

## Project Structure

```text
src/
│
├── api/
├── components/
├── controllers/
├── router/
├── services/
├── views/
└── assets/
```

## User Roles

### Manager

* Can manage all reservations.
* Can create, edit, and delete reservations.

### Collaborator

* Can access assigned information and workspace reservations.

## API

The project uses a local JSON Server database:

```text
db.json
```

Base URL:

```text
http://localhost:3001
```

## Run Build

```bash
npm run build
```


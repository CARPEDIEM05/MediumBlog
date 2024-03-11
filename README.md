# MediumBlog

Welcome to MediumBlog, a feature-rich blogging platform inspired by the popular website Medium. MediumBlog is designed to offer users a seamless experience in publishing and reading blogs, leveraging the power of modern web technologies and best practices in software development.

## Technologies and Languages

MediumBlog is built with a strong focus on type safety, efficiency, and scalability. Here is a quick overview of the technologies and languages used in its development:

- **Language**: TypeScript
- **Backend**:
  - **Framework**: Hono - Facilitates easy deployment on Cloudflare Workers
  - **Database**: PostgreSQL - A powerful open-source relational database
  - **ORM & Connection Pooling**: Prisma - Ensures efficient database migrations and data management
  - **Validation Library**: Zod - Provides robust data validation
- **Frontend**:
  - **Framework**: ReactJS - A JavaScript library for building user interfaces
  - **State Management**: Recoil - Provides efficient state management for React apps
  - **HTTP Client**: Axios - Used for making HTTP requests (fetching and posting data)

## Features

MediumBlog allows users to:

- Create user accounts
- Sign in using existing credentials
- Publish new blogs
- Read various blogs published by others

## Development Highlights

- **Database Efficiency**: By utilizing Prisma, we've ensured that database migrations and data handling are streamlined and efficient.
- **Type Safety**: TypeScript is used both in the backend and frontend, enhancing code quality and reducing bugs by enforcing types.
- **Route Handling**: Custom route handlers simplify API endpoint management, making the platform more scalable and maintainable.
- **Data Validation**: Before inserting data into the database, we use the Zod library for rigorous validation checks, ensuring data integrity and security.

## Libraries

- **Backend Libraries**:
  - **Hono**: Simplifies coding in the Cloudflare environment.
  - **Prisma Client**: Facilitates database interactions.
  - **Zod**: Provides data validation functionality.

- **Frontend Libraries**:
  - **React**: Powers the user interface.
  - **Recoil**: Manages the application's state.
  - **Axios**: Handles HTTP requests.

## Getting Started

To get started with MediumBlog, clone the repository, install the required dependencies, and follow the setup instructions provided in the documentation. Whether you're looking to contribute or simply explore the features of MediumBlog, we're excited to have you on board!

Happy blogging!

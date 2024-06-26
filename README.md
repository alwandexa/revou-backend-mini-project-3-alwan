# revou-backend-mini-project-3-alwan

This project is a simple URL shortener service built using TypeScript and Express.js. It allows users to generate short URLs for long URLs and provides redirection from short URLs to their corresponding long URLs.

## Features

- URL Shortening: Users can submit a long URL and receive a shortened version of it.
- Redirection: When a user accesses a short URL, they are redirected to the original long URL.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alwandexa/revou-backend-mini-project-3-alwan.git
   ```

2. Navigate to the project directory:

   ```bash
   cd revou-backend-mini-project-3-alwan
   ```

3. Install dependencies

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run start:watch
   ```

   The server will start running at http://localhost:3000.

2. Use the following endpoints:

   - Shorten URL

     ```
     POST /shorten
     ```

     Request Body:

     ```json
     {
       "url": "https://some-long-url"
     }
     ```

     Response:

     - `200 OK` with the shortened URL if successful.

       ```json
       {
         "success": true,
         "message": "successfully registered",
         "shorten": "aMJUu9bNxr"
       }
       ```

     - `200 OK` if the URL is not specified in the request body.

       ```json
       {
         "success": false,
         "message": "url is not specified"
       }
       ```

   - Redirect to Long URL

     ```
     GET /shorten/:shortUrl
     ```

     Response:

     - `301 Moved Permanently` and redirects to the original long URL if the short URL is found.

     - `404 Not Found` if the short URL is not found.

       ```json
       {
         "success": false,
         "message": "url is not registered"
       }
       ```

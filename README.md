# Web Scraper

A Node.js web scraper application that scrapes data from a specified website and saves it to a MongoDB database.

## Features

- Scrapes website title, paragraphs, and links.
- Saves scraped data to MongoDB.
- Uses Express.js for routing and handling HTTP requests.
- Uses Mongoose for MongoDB interaction.
- Uses Axios for making HTTP requests.
- Uses Cheerio for parsing HTML.

## Installation

1.  Clone the repository:

    
    git clone <repository-url>
    

2.  Navigate to the project directory:

    
    cd <project-directory>
    

3.  Install dependencies:

    
    npm install
    

4.  Create a `.env` file in the root directory and add the following environment variables:

    
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/webscraper
    

    *   `PORT`: The port the server will listen on.  Defaults to 3000.
    *   `MONGODB_URI`: The MongoDB connection string.  Defaults to `mongodb://localhost:27017/webscraper`.

## Usage

1.  Start the server:

    
    npm start
    

2.  Send a POST request to `/api/scraper/scrape` with a JSON body containing the URL to scrape:

    
    {
      "url": "https://www.example.com"
    }
    

## Technologies Used

- Node.js
- Express.js
- Mongoose
- Axios
- Cheerio
- MongoDB

## License

[MIT](LICENSE)
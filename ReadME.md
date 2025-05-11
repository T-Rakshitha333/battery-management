# Battery Management System (BMS)

The Battery Management System (BMS) is a backend application designed to efficiently manage, store, and retrieve battery data from electric vehicles (EVs). This system is built using Node.js and SQLite to handle the storage of real-time battery metrics, including current, voltage, temperature, and timestamp.

This system supports multiple electric vehicles and allows battery data to be submitted periodically (e.g., every minute), ensuring continuous tracking and easy access to key metrics.

# Features
Battery Data Storage: Securely stores battery data, including current, voltage, temperature, and timestamp.

RESTful APIs: Offers several endpoints to interact with the battery data, including:

Store battery data via a POST request.

Retrieve specific battery data by ID, field, and time range.

Data Retrieval: Efficient querying with indexing for quick access to specific battery information.

Authentication (Optional): Uses JWT-based authentication for data security, ensuring that only authorized users can access the API.

Database: Uses SQLite for a lightweight and fast data storage solution.

Error Handling: Includes basic error handling for invalid routes and unauthorized requests.

# Tech Stack
Backend: Node.js

Database: SQLite

Routing: Express.js

Authentication: JWT (optional)

Middleware: Custom middleware for JWT authentication

Body Parsing: Body-parser for parsing incoming JSON data

# API Endpoints
POST /api/battery/data
Description: Accepts battery data from electric vehicles and stores it in the database.

Request Body:

json
Copy
Edit
{
  "battery_id": "1001",
  "current": 15.2,
  "voltage": 48.7,
  "temperature": 35.5,
  "time": "2024-08-19T10:00:00Z"
}

GET /api/battery/:id
Description: Retrieves all data related to a specific battery.

GET /api/battery/:id/:field
Description: Retrieves specific information (e.g., voltage, current, temperature) for a particular battery.

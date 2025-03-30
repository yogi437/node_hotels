# Node Hotel API

## Overview
The **Node Hotel** application is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application manages information related to staff members (persons) and menu items, providing RESTful API endpoints to handle CRUD operations.

## Features
- **Staff Management**: Add, retrieve, update, and delete staff members.
- **Menu Management**: Add, retrieve, update, and delete menu items.
- **Filter Data**: Retrieve staff by role and menu items by taste.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/node-hotel.git
   cd node-hotel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     ```

4. Start the application:
   ```bash
   npm start
   ```

## API Endpoints

### Person Endpoints

| Method | Endpoint          | Description                          |
|--------|------------------|--------------------------------------|
| POST   | `/person`        | Add a new person                    |
| GET    | `/person`        | Get all persons                     |
| GET    | `/person/:workType` | Get persons by work type (e.g., chef, waiter) |
| PUT    | `/person/:id`    | Update a person by ID               |
| DELETE | `/person/:id`    | Delete a person by ID               |

### Menu Item Endpoints

| Method | Endpoint          | Description                          |
|--------|------------------|--------------------------------------|
| POST   | `/menu`         | Add a new menu item                 |
| GET    | `/menu`         | Get all menu items                   |
| GET    | `/menu/:taste`  | Get menu items by taste (e.g., spicy, sweet) |
| PUT    | `/menu/:id`     | Update a menu item by ID            |
| DELETE | `/menu/:id`     | Delete a menu item by ID            |

## Data Models

### Person Model
```json
{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}
```

### Menu Item Model
```json
{
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}
```

## License
This project is licensed under the MIT License.

## Author
Developed by **Your Name**. Contributions are welcome!

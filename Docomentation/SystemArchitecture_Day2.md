# Marketplace Technical Foundation - General E-Commerce

## 1. System Architecture Overview

### Diagram:

[Frontend (Next.js)]
     |
[Sanity CMS] ---------> [Product Data API]
     |
[Third-Party API] -----> [Shipment Tracking API]
     |
[Payment Gateway]


### Component Roles:
- **Frontend (Next.js)**: Provides a responsive user interface for browsing products, adding them to the cart, and placing orders.
- **Sanity CMS**: Acts as the backend to store product data, customer details, and order records.
- **Product Data API**: Fetches product listings and details dynamically from Sanity CMS.
- **Third-Party API**: Integrates shipment tracking and real-time updates for orders.
- **Payment Gateway**: Handles secure payment processing and updates payment statuses.

---

## 2. Key Workflows

### Workflow 1: Browsing Products
1. User visits the homepage on the frontend.
2. The frontend requests product data from the Product Data API.
3. Sanity CMS provides product details such as name, price, stock, and images.
4. The frontend dynamically displays the fetched products.

### Workflow 2: Adding Products to Cart
1. User selects a product and adds it to their cart.
2. The frontend temporarily stores the cart details locally or in session storage.

### Workflow 3: Placing an Order
1. User proceeds to checkout and submits the order.
2. Frontend sends customer and order details to the `/orders` API endpoint.
3. Sanity CMS stores the order details.
4. Payment Gateway processes the transaction.
5. Confirmation message is sent to the user.

### Workflow 4: Shipment Tracking
1. User checks the status of their order on the frontend.
2. Frontend makes a request to the `/shipment` API endpoint.
3. Third-party API provides real-time shipment updates.
4. Frontend displays the status and estimated delivery date to the user.

---

## 3. Category-Specific Instructions

### General E-Commerce:
- **Product Browsing**: Implement standard workflows to fetch and display product listings using the `/products` endpoint.
- **Cart Management**: Use frontend logic to handle cart state.
- **Order Placement**: Ensure seamless order creation and payment integration.

---

## 4. API Endpoints

| Endpoint     | Method | Purpose                          | Response Example                                        |
|--------------|--------|----------------------------------|---------------------------------------------------------|
| `/products`  | GET    | Fetches all product details     | `[ { "id": 1, "name": "Product A", "price": 100, "stock": 50, "image": "url" } ]` |
| `/orders`    | POST   | Creates a new order             | `{ "orderId": 12345, "status": "Order Placed" }`        |
| `/shipment`  | GET    | Tracks order shipment status    | `{ "shipmentId": 56789, "orderId": 12345, "status": "In Transit" }` |

---

## 5. Sanity Schema Example

### Product Schema:
```javascript
export default {
  name: 'product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'stock', type: 'number', title: 'Stock Level' },
    { name: 'image', type: 'image', title: 'Product Image' }
  ]
};

________________________________________
Order Schema:
export default {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'customerId', type: 'string', title: 'Customer ID' },
    { name: 'products', type: 'array', of: [{ type: 'object', fields: [
      { name: 'productId', type: 'string', title: 'Product ID' },
      { name: 'quantity', type: 'number', title: 'Quantity' }
    ] }] },
    { name: 'totalPrice', type: 'number', title: 'Total Price' },
    { name: 'paymentStatus', type: 'string', title: 'Payment Status' }
  ]
};
________________________________________

6. Technical Roadmap
Define Requirements:

Finalize product categories and features.
Plan APIs and workflows.
Set Up Sanity CMS:

Configure schemas for products and orders.
Develop Frontend:

Implement pages for product listing, cart, and checkout.
Integrate APIs:

Connect frontend with Sanity CMS and third-party APIs.
Testing:

Conduct unit, integration, and end-to-end testing.
Deployment:

Deploy the application to production.

________________________________________



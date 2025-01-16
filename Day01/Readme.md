# Avion Marketplace Journey

### Watermark: Nida Iqbal

## DAY 1: LAYING THE FOUNDATION FOR MY MARKETPLACE JOURNEY

### Marketplace Name: Avion

The name "Avion" for my e-commerce website could fit into multiple categories depending on my business model. Here's why:

- **Q-Commerce (Quick Commerce)**: This refers to the rapid delivery of products, typically within a very short time frame (e.g., within an hour).
- **E-Commerce (Electronic Commerce)**: Suitable if I plan to offer a broader selection of products with standard delivery times.
- **Rental E-Commerce**: If I plan to offer rentals for items, this classification would apply.

#### Summary:

- **Q-Commerce**: If fast deliveries (within hours) are key.
- **E-Commerce**: If it's more general and involves regular delivery times.
- **Rental E-Commerce**: If my platform allows renting items.

---

## Task for Day 1

### Step 1: Choose Your Marketplace Type

#### Marketplace Type: General E-Commerce

- **Primary Purpose**: The primary purpose of a General E-Commerce marketplace is to provide a platform where a wide range of products can be bought and sold. Categories typically include electronics, clothing, books, home goods, furniture, beauty products, and cosmetics. The goal is to make shopping convenient by allowing customers to browse a large selection of products, compare prices, and make purchases all from the comfort of their homes.

#### Key Features:

- **Target Audience**: 
  - Busy professionals and working individuals who prefer to shop online.
  - Homeowners and renters seeking furniture and home goods.
  - Fashion-conscious shoppers for clothing and accessories.
  - Beauty enthusiasts seeking skincare and makeup products.
  - Readers and students in need of books and educational materials.
  - Families and individuals looking for household essentials.

- **Product Categories**:
  - **Electronics**: Smartphones, laptops, tablets, accessories, home electronics.
  - **Clothing**: Fashion for men, women, and children, including casual, formal wear, and accessories.
  - **Books**: Fiction, non-fiction, educational, and children's books.
  - **Home Goods**: Furniture, home décor, kitchenware, and essentials.
  - **Furniture**: Indoor and outdoor furniture, including sofas, beds, tables.
  - **Beauty Products**: Skincare, makeup, and personal care items.
  - **Cosmetics**: A variety of makeup products such as foundation, lipstick, eyeshadow.

- **Business Goals**:
  - **Convenience & Accessibility**: Solving the problem of shopping across multiple stores by offering everything in one place.
  - **Reliability**: Ensuring product quality and customer satisfaction through reviews and detailed product descriptions.

- **What Will Set Us Apart**:
  - **Affordability**: Competitive pricing with regular promotions.
  - **Variety and Availability**: A broad selection with reliable stock.
  - **User Experience**: Intuitive platform with personalized recommendations.
  - **Customer Service**: Extended support hours and fast communication.

---

### Step 2: Define Your Business Goals

#### What Problem Does Your Marketplace Aim to Solve?

The marketplace aims to solve the problem of accessibility and convenience for customers who need a wide variety of products but prefer to shop from the comfort of their homes. Consumers often find it time-consuming and difficult to shop across multiple stores for different product categories. This platform brings all these products together in one place, offering a seamless online shopping experience.

#### Target Audience

The marketplace will serve a broad audience, including:

- **Busy professionals** who prefer to shop online for products like clothing, beauty products, and electronics.
- **Homeowners/renters** looking for furniture and home goods.
- **Fashion-conscious shoppers** for the latest clothing trends and accessories.
- **Beauty enthusiasts** exploring skincare and makeup.
- **Readers and students** in need of educational material.

---

### Step 3: Create a Data Schema

#### Entities in the Marketplace

- **Products**:
  - Attributes: Product ID, Name, Category, Description, Price, Stock Quantity, Image URL, Brand, Dimensions (optional)
  
- **Orders**:
  - Attributes: Order ID, Customer ID, Status, Shipping Address, Total Amount, Payment Status
  
- **Customers**:
  - Attributes: Customer ID, Name, Email, Phone Number, Address, Registration Date, Order History
  
- **Delivery Zones**:
  - Attributes: Zone ID, Zone Name, Coverage Area
  
- **Shipments**:
  - Attributes: Shipment ID, Order ID, Delivery Zone ID, Shipment Status, Expected Delivery Date
  
- **Payments**:
  - Attributes: Payment ID, Order ID, Payment Amount, Payment Method, Payment Status, Payment Date

#### Relationships Between Entities

- **Products ↔ Orders**: Products are part of an order, and each order contains one or more products.
- **Orders ↔ Customers**: Each order belongs to one customer.
- **Orders ↔ Shipments**: An order can have one or more shipments.
- **Orders ↔ Payments**: Each order has a corresponding payment entry.
- **Delivery Zones ↔ Shipments**: Each shipment is associated with a delivery zone.

---

### Data Schema Diagram

[Products] --< [Orders] >-- [Customers] | v [Payments] --< [Shipments] >-- [Delivery Zones]


#### Key Fields for Each Entity:

- **Products**: Product ID, Name, Price, Stock Quantity
- **Orders**: Order ID, Customer ID, Total Amount, Order Date
- **Customers**: Customer ID, Name, Email, Order History
- **Delivery Zones**: Zone ID, Zone Name, Coverage Area
- **Shipments**: Shipment ID, Order ID, Tracking Number, Expected Delivery Date
- **Payments**: Payment ID, Order ID, Payment Amount, Payment Method

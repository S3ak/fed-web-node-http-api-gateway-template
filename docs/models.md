# Modeles

## 1. **VendingMachine:**

- `ID` (Primary Key): Integer - Unique identifier for the vending machine.
- `Location`: Text - Physical location or address of the vending machine.
- `Capacity`: Integer - Maximum number of products the vending machine can hold.
- `Status`: Text - Current operational status of the vending machine.

## 2. **Transaction:**

- `ID` (Primary Key): Integer - Unique identifier for the transaction.
- `Customer ID` (Foreign Key): Integer - References the customer involved in the transaction.
- `Product ID` (Foreign Key): Integer - References the product involved in the transaction.
- `Vending Machine ID` (Foreign Key): Integer - References the vending machine related to the transaction.
- `Timestamp`: Datetime - Date and time when the transaction occurred.
- `Amount`: Real - The monetary value of the transaction.

## 3. **Customer:**

- `ID` (Primary Key): Integer - Unique identifier for the customer.
- `Name`: Text - Full name of the customer.
- `Email`: Text - Email address of the customer.
- `Balance`: Real - Monetary balance associated with the customer.
- `Other relevant customer information`: (Data types as needed) - Any additional information specific to the customer.

## 4. **Product:**

- `ID` (Primary Key): Integer - Unique identifier for the product.
- `Name`: Text - Name or title of the product.
- `Price`: Real - Monetary value assigned to the product.
- `Quantity`: Integer - Available quantity of the product.
- `Description`: Text - Additional information or details about the product.
- `Vending Machine ID` (Foreign Key): Integer - References the vending machine where the product is located.

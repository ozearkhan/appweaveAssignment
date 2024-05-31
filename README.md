
## Project Documentation: TeeRex Store

### Introduction
TeeRex Store is a basic web application designed for a t-shirt business, allowing customers to explore, select, and purchase t-shirts online. This application provides functionalities such as browsing the product catalog, searching and filtering products, adding items to a shopping cart, and proceeding to checkout.

### Deployment
The application is hosted on Vercel. Access the live site [here](https://appweave-assignment.vercel.app/).

### Screenshots

![image](https://github.com/ozearkhan/appweaveAssignment/assets/110727997/5564db62-0983-40a1-aa44-7c87e7182bb6)

![image](https://github.com/ozearkhan/appweaveAssignment/assets/110727997/939aea22-fc97-45dc-af06-e67662a3af5f)


### Features
- **Product Listing Page:** Browse the catalog with product images, names, and prices.
- **Search Functionality:** Search t-shirts using free text (e.g., "green polo") that combines attributes such as name, color, and type.
- **Filters:** Filter t-shirts by gender, color, price range, and type.
- **Shopping Cart:** Add items to the shopping cart, view the cart, adjust item quantities, and remove items.
- **Stock Management:** Ensure the ordered quantity does not exceed available stock.

### Technologies Used
- **Frontend:** React with Vite
- **State Management:** Recoil
- **UI Library:** Flowbite
- **Styling:** Tailwind CSS

### Project Structure
```plaintext
TeeRex Store
├── .eslintrc.cjs
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── images
│   │   ├── black-polo.jpg
│   │   ├── blue-polo.jpg
│   │   ├── green-round.jpg
│   │   └── pink-hoodie.jpg
│   ├── products.json
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── atom.js
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductFilter.jsx
│   │   ├── SearchBar.jsx
│   │   └── ShoppingCartItem.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── ProductListingPage.jsx
│   │   └── ShoppingCartPage.jsx
├── tailwind.config.js
└── vite.config.js
```

### Setup and Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ozearkhan/appweaveAssignment.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd TeeRex\ Store
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```

### Usage
1. **Browse Products:**
   - Navigate to the product listing page to see all available t-shirts.
2. **Search and Filter:**
   - Use the search bar to find t-shirts by name, color, or type.
   - Apply filters to narrow down the products by gender, color, price range, and type.
3. **Add to Cart:**
   - Click on "Add to Cart" to add a product to your shopping cart.
   - Increase or decrease the quantity of items in the cart or remove them entirely.
4. **Checkout:**
   - View the total amount in the cart and proceed to checkout.

### Notes
- All functionalities are handled on the client side.
- Filters can be applied individually or on top of search results.
- The shopping cart retains items between navigation, but filters and search results do not persist.

### Bonus Features
- **Responsive Design:** The application is fully responsive, ensuring optimal viewing across devices.
- **State Management:** Implemented using Recoil for efficient state management.
- **UI Enhancements:** Flowbite is used for UI components, providing a polished look and feel.

### Contribution
Feel free to fork the repository and create pull requests. Contributions are welcome!

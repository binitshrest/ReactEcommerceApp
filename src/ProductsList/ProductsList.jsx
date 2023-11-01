import ProductCard from "../ProductCard";

import "./ProductsList.css";
const products = [
  {
    id: 1,
    title: "Apple iPhone 14",
    price: "Rs. 1,00,000"
  },
  {
    id: 2,
    title: "Apple iPhone 13",
    price: "Rs. 70,000"
  },
  {
    id: 3,
    title: "Google Pixel 7",
    price: "Rs. 50,000"
  },
  {
    id: 4,
    title: "Nokia 1100",
    price: "Rs. 2,000"
  },
  {
    id: 5,
    title: "Samsung Galaxy S10",
    price: "Rs. 1,00,000"
  },
  {
    id: 6,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000"
  }
];
function ProductsList() {
  return (
    <div className="ProductsList">
      {/* <ProductCard title="Product 1" price = "20"/>
      <ProductCard title="Product 2" price = "30"/>
      <ProductCard title="Product 3" price = "40"/>
      <ProductCard title="Product 4" price = "50"/>
      <ProductCard title="Product 5" price = "60"/>
      <ProductCard title="Product 6" price = "70"/>
      <ProductCard title="Product 7" price = "80"/> */}
      {products.map(function (product) {
        return <ProductCard title={product.title} price={product.price} />;
      })}
      {/* { using arrow function
        products.map((product) =>  <ProductCard title= {product.title} price = {product.price}/> )
      } */}
    </div>
  );
}
export default ProductsList;

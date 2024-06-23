import "./index.css";

import AllProductsSection from "../AllProductsSection";

const productCardDetails = [
  {
    id: 0,
    text: "Gray Convertible Coupe",
    imageUrl:
      "https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 1,
    text: "Gray Convertible Coupe",
    imageUrl:
      "https://images.pexels.com/photos/210053/pexels-photo-210053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 3,
    text: "Classic Green Vehicle",
    imageUrl:
      "https://images.pexels.com/photos/175690/pexels-photo-175690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Products = () => (
  <div className="sub-section">
    <h2 className="sub-headings">Our Products</h2>
    <hr className="horizontal-line" />
    <ul className="cards-container">
      {productCardDetails.map((eachProduct) => (
        <AllProductsSection key={eachProduct.id} eachProduct={eachProduct} />
      ))}
    </ul>
    <hr className="horizontal-line" />
  </div>
);

export default Products;

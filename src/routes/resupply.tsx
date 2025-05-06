import { createFileRoute } from "@tanstack/react-router";
import { useProduct } from "../providers/product/useProduct";
import { ProductCard } from "../Components/ProductCard";
import { useState } from "react";
import {
  allCategories,
  TProductQty,
} from "../assets/globals/constantsAndTypes";

export const Route = createFileRoute("/resupply")({
  component: RouteComponent,
});

function RouteComponent() {
  const [category, setCategory] = useState("All");
  const [inventoryProducts, setInventoryProducts] = useState<TProductQty[]>([]);
  const { getProductsByCategory, getProductById, patchProduct } = useProduct();

  const updateProductsQty = () => {
    inventoryProducts.map(({ productId, qty }) => {
      const product = getProductById(productId);
      if (product)
        patchProduct.mutate({
          productId: productId,
          partialProduct: { quantityInStock: product.quantityInStock + qty },
        });
    });
    setInventoryProducts([]);
  };

  /**
   * add the product to the inventory table if not present already
   * @param productId
   */
  const addProductToInventory = (productId: string) => {
    if (!isProductInInventory(productId)) {
      const product = getProductById(productId);
      if (product) {
        setInventoryProducts([
          ...inventoryProducts,
          { productId, qty: product.quantityInStock },
        ]);
      }
    }
  };

  /**
   * set the quantity to update only if the result quantity is not less than 0
   * @param id
   * @param newQty
   */
  const updateQty = (id: string, newQty: number) => {
    setInventoryProducts(
      [...inventoryProducts].map((product) => {
        if (product.productId === id) {
          const fullProduct = getProductById(id);
          if (
            fullProduct &&
            product.qty + newQty + fullProduct.quantityInStock >= 0
          )
            return {
              productId: product.productId,
              qty: product.qty + newQty,
            };
        }
        return product;
      })
    );
  };

  /**
   * return true if product already set in the inventory, otherwise false
   *
   * @param id
   * @returns boolean
   */
  const isProductInInventory = (id: string) => {
    const product = inventoryProducts.find(
      (product) => product.productId === id
    );
    return !!product;
  };
  const handleSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  return (
    <>
      {inventoryProducts.length > 0 && (
        <div className="inventory-table-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody id="cart-items-list">
              {inventoryProducts.map(({ productId, qty }) => {
                const product = getProductById(productId);
                if (product) {
                  return (
                    <tr className="cart-item" key={productId}>
                      <td className="product-info">
                        <div className="product-details">
                          <h3>{product.title}</h3>
                        </div>
                      </td>
                      <td className="product-quantity">
                        <div className="quantity-controls">
                          <button
                            className="quantity-decrease"
                            onClick={() => {
                              updateQty(product.id, -1);
                            }}
                          >
                            -
                          </button>
                          <input
                            value={qty}
                            className="quantity-input"
                            readOnly
                          />
                          <button
                            className="quantity-increase"
                            onClick={() => {
                              updateQty(product.id, 1);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          <button
            className="add-to-cart-btn"
            onClick={() => updateProductsQty()}
          >
            Update quantities
          </button>
        </div>
      )}
      <label htmlFor="categories">Category: </label>
      <select
        id="categories"
        name="categories"
        onChange={(e) => handleSelectOnChange(e)}
      >
        <option value="All">All</option>
        {allCategories.map((category) => {
          return (
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          );
        })}
      </select>

      <div className="product-grid" style={{ padding: "20px 0" }}>
        {getProductsByCategory(category).map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              btnOnClick={addProductToInventory}
              btnText="Add to inventory"
            />
          );
        })}
      </div>
    </>
  );
}

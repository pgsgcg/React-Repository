import ProductDescription from "./ProductDescription";

function PropsWithoutDestructuring() {
    return (
        <>
          <h1>Default Value ...</h1>
          <ProductDescription />
          <h1>Passing the Value ...</h1> 
          <ProductDescription name="Product 1" description="the product 1 has fantastic features" price={1000} />
          <ProductDescription name="Product 2" description="the product 2 has fantastic features" price={2000} />
          <ProductDescription name="Product 3" description="the product 3 has fantastic features" price={3000} />
          
        </>
      );
}

export default PropsWithoutDestructuring;
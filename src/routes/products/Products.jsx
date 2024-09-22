import React from "react";
import { useProductsAllQuery } from "../../redux/api/productApi";
import Container from "../../utils/Container";
import Card from "../../components/card/Card";

const Products = () => {
    const { data, isLoading } = useProductsAllQuery();
    console.log(data);

    return (
        <section className="products-section py-8 md:py-32">
            <Container>
                <div>
                    <div>
                        <h1 className="text-3xl font-bold mb-6 text-center">
                            Products
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {data &&
                            data.products.map(product => {
                                return (
                                    <Card key={product.id} product={product} />
                                );
                            })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Products;

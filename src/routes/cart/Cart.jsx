import React from "react";
import Container from "../../utils/Container";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/Card";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);
    console.log(products);

    return (
        <section className="cart-section pt-[50px] min-h-screen  dark:text-gray-100 pb-[150px] ">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Cart;

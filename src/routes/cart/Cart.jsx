import React from "react";
import Container from "../../utils/Container";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/Card";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);
    console.log(products);

    return (
        <section className="cart-section pt-[50px]  dark:text-gray-100 pb-[150px] h-[100vh] ">
            <Container>
                <ul className="grid grid-cols-4 gap-10 mt-10">
                    {products.map(product => (
                        <Card
                            key={product.id}
                            product={product}
                            cardType="cart"
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Cart;

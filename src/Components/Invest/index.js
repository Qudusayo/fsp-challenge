import React from "react";
import swal from "@sweetalert/with-react";

import { PaystackConsumer } from "react-paystack";
import styles from "./style.module.scss";

const config = {
    reference: new Date().getTime(),
    email: "qqudusayo@gmail.com",
    amount: 7000000,
    publicKey: "pk_test_952107c7510fbf6ab2a2adee0027c4cce15a2b75",
};

function Index() {
    const componentProps = {
        ...config,
        text: "Paystack Button Implementation",
        onSuccess: () =>
            swal({
                title: "Payment Successful!",
                text: "You are welcome to wealth",
                icon: "success",
                button: "Lets Move!",
            }),
        onClose: () => null,
    };

    return (
        <div className={styles.App}>
            <div className={styles.card}>
                <h2>Your Investment</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    voluptatem expedita nemo quod quas rerum, facere
                    accusantium, numquam reprehenderit quia ad, porro doloremque
                    deleniti? Aspernatur asperiores, accusamus quas adipisci,
                    aliquam eius perspiciatis facilis inventore praesentium enim
                    explicabo iste officia. Rerum?
                </p>
                <PaystackConsumer {...componentProps}>
                    {({ initializePayment }) => (
                        <button onClick={() => initializePayment()}>
                            Pay For Service Now
                        </button>
                    )}
                </PaystackConsumer>
            </div>
        </div>
    );
}

export default Index;

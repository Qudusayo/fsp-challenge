import React from "react";
import swal from "@sweetalert/with-react";
import {
    usePaystackPayment,
    PaystackButton,
    PaystackConsumer,
} from "react-paystack";
import "./style.scss";

const config = {
    reference: new Date().getTime(),
    email: "qqudusayo@gmail.com",
    amount: 20000,
    publicKey: process.env.PAYSTACK_TEST_PUBLIC,
};

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button
                onClick={() => {
                    initializePayment();
                }}
            >
                Paystack Hooks Implementation
            </button>
        </div>
    );
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
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <PaystackHookExample />
            <PaystackButton {...componentProps} />
            <PaystackConsumer {...componentProps}>
                {({ initializePayment }) => (
                    <button onClick={() => initializePayment()}>
                        Pay For Service
                    </button>
                )}
            </PaystackConsumer>
        </div>
    );
}

export default Index;

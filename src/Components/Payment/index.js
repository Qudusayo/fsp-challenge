import React from "react";

const config = {
    reference: new Date().getTime(),
    email: "qqudusayo@gmail.com",
    amount: 5000,
    publicKey: "pk_test_952107c7510fbf6ab2a2adee0027c4cce15a2b75",
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

function App() {
    const componentProps = {
        ...config,
        text: "Paystack Button Implementation",
        onSuccess: () => null,
        onClose: () => null,
    };

    return (
        <div className="Payment">
            <PaystackHookExample />
            <PaystackButton {...componentProps} />
            <PaystackConsumer {...componentProps}>
                {({ initializePayment }) => (
                    <button onClick={() => initializePayment()}>
                        Paystack Consumer Implementation
                    </button>
                )}
            </PaystackConsumer>
        </div>
    );
}

export default App;

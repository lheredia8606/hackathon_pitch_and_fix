import { ChangeEvent, useRef, useState } from "react";
import "/src/assets/styles/credit-cart.css";

type TCreditCartPaymentProps = {
  setShouldShowPayment: (showPayment: boolean) => void;
};

export const CreditCartPayment = ({
  setShouldShowPayment,
}: TCreditCartPaymentProps) => {
  const handleOnPay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShouldShowPayment(false);
  };
  const isAllDigits = (str: string) => /^\d*$/.test(str);
  const [cardInput, setCardInput] = useState<string[]>(["", "", "", ""]);
  const phoneInputMaxLength = [4, 4, 4, 4];

  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleCreditInputOnchange =
    (inputIndex: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (
        isAllDigits(e.target.value) &&
        value.length <= phoneInputMaxLength[inputIndex]
      ) {
        const newState = cardInput.map((element, index) => {
          return index === inputIndex ? e.target.value : element;
        });
        setCardInput(newState);
      }
    };

  const handleCreditInputsOnKeyUp =
    (inputIndex: number) => (e: React.KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        if (
          e.key === "Backspace" &&
          value.length === 0 &&
          refs[inputIndex - 1]
        ) {
          refs[inputIndex - 1].current?.focus();
        } else if (
          value.length >= phoneInputMaxLength[inputIndex] &&
          refs[inputIndex + 1]
        ) {
          refs[inputIndex + 1].current?.focus();
        }
      }
    };

  return (
    <div className="modal-backdrop">
      <div className="modal payment-container">
        <h2>Payment Details</h2>

        <label>Card Number</label>
        <div className="card-number">
          <input
            type="text"
            className="payment-input"
            onChange={handleCreditInputOnchange(0)}
            onKeyUp={handleCreditInputsOnKeyUp(0)}
            ref={refs[0]}
            value={cardInput[0]}
          />
          <div>-</div>
          <input
            type="text"
            className="payment-input"
            onChange={handleCreditInputOnchange(1)}
            onKeyUp={handleCreditInputsOnKeyUp(1)}
            ref={refs[1]}
            value={cardInput[1]}
          />
          <div>-</div>
          <input
            type="text"
            className="payment-input"
            onChange={handleCreditInputOnchange(2)}
            onKeyUp={handleCreditInputsOnKeyUp(2)}
            ref={refs[2]}
            value={cardInput[2]}
          />
          <div>-</div>
          <input
            type="text"
            className="payment-input"
            onChange={handleCreditInputOnchange(3)}
            onKeyUp={handleCreditInputsOnKeyUp(3)}
            ref={refs[3]}
            value={cardInput[3]}
          />
        </div>

        <label>Cardholder Name</label>
        <input
          className="payment-input cardholder-name"
          type="text"
          placeholder="Full name on card"
        />

        <div className="inline-group">
          <div>
            <label>Exp. Date</label>
            <div className="exp-input-group">
              <input
                className="payment-input input-exp-month"
                placeholder="MM"
              />
              /
              <input
                className="payment-input input-exp-year"
                placeholder="YY"
              />
            </div>
          </div>
          <div>
            <label>CVV</label>
            <input className="payment-input" type="text" placeholder="123" />
          </div>
        </div>

        <div className="buttons">
          <button
            className="cancel-btn"
            onClick={() => setShouldShowPayment(false)}
          >
            Cancel
          </button>
          <button className="pay-btn" onClick={(e) => handleOnPay(e)}>
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

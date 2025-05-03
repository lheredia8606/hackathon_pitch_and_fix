import { ChangeEvent, useRef, useState } from "react";
import "/src/assets/styles/credit-cart.css";
import { useCart } from "../providers/cart/useCart";

type TCreditCartPaymentProps = {
  setShouldShowPayment: (showPayment: boolean) => void;
};

export const CreditCartPayment = ({
  setShouldShowPayment,
}: TCreditCartPaymentProps) => {
  const { onPurchaseHandler } = useCart();
  const [cardInput, setCardInput] = useState<string[]>(["", "", "", ""]);
  const [cardHolder, setCardHolder] = useState("");
  const [expInput, setExpInput] = useState<string[]>(["", ""]);
  const [cvvInput, setCvvInput] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);
  const cardInputMaxLength = [4, 4, 4, 4];
  const expInputMaxLength = [2, 2];

  const cardNumberRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const expNumberRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  //validations
  const isCardNumberValid = () => {
    for (let i = 0; i < cardInputMaxLength.length; i++) {
      if (cardInput[i].length !== cardInputMaxLength[i]) {
        return false;
      }
    }
    return true;
  };

  const isCardHolderValid = (): boolean => {
    const trimmed = cardHolder.trim().toUpperCase();
    const regex = /^[A-Z][A-Z'-]*( [A-Z][A-Z'-]*)*$/;
    const isValidLength = trimmed.length >= 2 && trimmed.length <= 26;

    return regex.test(trimmed) && isValidLength;
  };

  const isExpValid = () => {
    const month = parseInt(expInput[0]);
    const year = 2000 + parseInt(expInput[1], 10);

    if (expInput[0].length !== 2 || month < 1 || month > 12) {
      return false;
    } else if (expInput.length !== 2) {
      return false;
    }
    const todayDate = new Date();
    const currentMonth = todayDate.getMonth() + 1;
    const currentYear = todayDate.getFullYear();
    return (
      year > currentYear || (year === currentYear && month >= currentMonth)
    );
  };

  const isCvvValid = () => {
    return cvvInput.length === 7 - cardInputMaxLength[3];
  };

  const isFormValid = () => {
    if (
      !isCardNumberValid() ||
      !isCardHolderValid() ||
      !isExpValid() ||
      !isCvvValid()
    ) {
      return false;
    }
    return true;
  };
  const isAllDigits = (str: string) => /^\d*$/.test(str);

  const areNameCharsValid = (chars: string) => {
    if (chars === "") return true;
    const trimmed = chars.trim().toUpperCase();
    const cardholderRegex = /^[A-Z][A-Z'-]*( [A-Z][A-Z'-]*)*$/;
    return cardholderRegex.test(trimmed);
  };

  // event listeners
  const handleOnChangeCardHolder = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (areNameCharsValid(value)) {
      setCardHolder(value);
    }
  };

  const handleOnCvvChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (isAllDigits(value) && value.length <= 7 - cardInputMaxLength[3]) {
      setCvvInput(value);
    }
  };

  const handleRefInputOnchange =
    (
      inputIndex: number,
      controllerArr: number[],
      strState: string[],
      setStrState: (newState: string[]) => void
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (isAllDigits(value) && value.length <= controllerArr[inputIndex]) {
        const newState = strState.map((element, index) => {
          return index === inputIndex ? value : element;
        });
        setStrState(newState);
      }
    };

  const handleRefInputsOnKeyUp =
    (
      inputIndex: number,
      refs: React.RefObject<HTMLInputElement | null>[],
      controllerArr: number[]
    ) =>
    (e: React.KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) {
        const { value } = e.target;
        if (
          e.key === "Backspace" &&
          value.length === 0 &&
          refs[inputIndex - 1]
        ) {
          refs[inputIndex - 1].current?.focus();
        } else if (
          value.length >= controllerArr[inputIndex] &&
          refs[inputIndex + 1]
        ) {
          refs[inputIndex + 1].current?.focus();
        }
      }
    };

  const handleOnFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) {
      setWasSubmitted(true);
      console.log("not submitting");
    } else {
      console.log("submitting");
      onPurchaseHandler();
      setShouldShowPayment(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal payment-container">
        <form onSubmit={(e) => handleOnFormSubmit(e)}>
          <h2>Payment Details</h2>

          <label>Card Number</label>
          <div className="card-number">
            <input
              type="text"
              className={`payment-input ${wasSubmitted && cardInput[0].length !== cardInputMaxLength[0] ? "border-error" : ""}`}
              onChange={handleRefInputOnchange(
                0,
                cardInputMaxLength,
                cardInput,
                setCardInput
              )}
              onKeyUp={handleRefInputsOnKeyUp(
                0,
                cardNumberRefs,
                cardInputMaxLength
              )}
              ref={cardNumberRefs[0]}
              value={cardInput[0]}
            />
            <div>-</div>
            <input
              type="text"
              className={`payment-input ${wasSubmitted && cardInput[1].length !== cardInputMaxLength[1] ? "border-error" : ""}`}
              onChange={handleRefInputOnchange(
                1,
                cardInputMaxLength,
                cardInput,
                setCardInput
              )}
              onKeyUp={handleRefInputsOnKeyUp(
                1,
                cardNumberRefs,
                cardInputMaxLength
              )}
              ref={cardNumberRefs[1]}
              value={cardInput[1]}
            />
            <div>-</div>
            <input
              type="text"
              className={`payment-input ${wasSubmitted && cardInput[2].length !== cardInputMaxLength[2] ? "border-error" : ""}`}
              onChange={handleRefInputOnchange(
                2,
                cardInputMaxLength,
                cardInput,
                setCardInput
              )}
              onKeyUp={handleRefInputsOnKeyUp(
                2,
                cardNumberRefs,
                cardInputMaxLength
              )}
              ref={cardNumberRefs[2]}
              value={cardInput[2]}
            />
            <div>-</div>
            <input
              type="text"
              className={`payment-input ${wasSubmitted && cardInput[3].length !== cardInputMaxLength[3] ? "border-error" : ""}`}
              onChange={handleRefInputOnchange(
                3,
                cardInputMaxLength,
                cardInput,
                setCardInput
              )}
              onKeyUp={handleRefInputsOnKeyUp(
                3,
                cardNumberRefs,
                cardInputMaxLength
              )}
              ref={cardNumberRefs[3]}
              value={cardInput[3]}
            />
          </div>
          <label>Cardholder Name</label>
          <input
            className={`payment-input cardholder-name ${wasSubmitted && !isCardHolderValid() ? "border-error" : ""}`}
            type="text"
            placeholder="Full name on card"
            value={cardHolder}
            onChange={(e) => handleOnChangeCardHolder(e)}
          />

          <div className="inline-group">
            <div>
              <label>Exp. Date</label>
              <div
                className={`exp-input-group ${!isExpValid() && wasSubmitted ? "date-border-error" : ""}`}
              >
                <input
                  value={expInput[0]}
                  ref={expNumberRefs[0]}
                  className={`payment-input input-exp-month`}
                  placeholder="MM"
                  onChange={handleRefInputOnchange(
                    0,
                    expInputMaxLength,
                    expInput,
                    setExpInput
                  )}
                  onKeyUp={handleRefInputsOnKeyUp(
                    0,
                    expNumberRefs,
                    expInputMaxLength
                  )}
                />
                /
                <input
                  value={expInput[1]}
                  ref={expNumberRefs[1]}
                  className={`payment-input input-exp-year`}
                  placeholder="YY"
                  onChange={handleRefInputOnchange(
                    1,
                    expInputMaxLength,
                    expInput,
                    setExpInput
                  )}
                  onKeyUp={handleRefInputsOnKeyUp(
                    1,
                    expNumberRefs,
                    expInputMaxLength
                  )}
                />
              </div>
            </div>
            <div>
              <label>CVV</label>
              <input
                className={`payment-input ${!isCvvValid() && wasSubmitted ? "border-error" : ""}`}
                type="text"
                placeholder="123"
                value={cvvInput}
                onChange={(e) => handleOnCvvChange(e)}
              />
            </div>
          </div>

          <div className="buttons">
            <button
              className="cancel-btn"
              onClick={() => setShouldShowPayment(false)}
            >
              Cancel
            </button>
            <button className="pay-btn" type="submit">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

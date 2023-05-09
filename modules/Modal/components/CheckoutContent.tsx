import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../common/Buttons/Button";
import { CheckoutContentProps } from "@/types/modal";
import Input from "./Input";
import useCheckoutInput from "@/hooks/useCheckoutInput";
import { postalCodeValidate, stringValidate } from "../lib/validate";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/router";

const CheckoutContent = ({ closeModal }: CheckoutContentProps) => {
  const { purchaseItems } = useCart();
  const router = useRouter();

  const {
    value: nameValue,
    changeValue: changeNameValue,
    isTouched: nameIsTouched,
    changedIsTouched: changeNameIsTouched,
    isValid: nameIsValid,
  } = useCheckoutInput(stringValidate);

  const {
    value: streetValue,
    changeValue: changeStreetValue,
    isTouched: streetIsTouched,
    changedIsTouched: changeStreetIsTouched,
    isValid: streetIsValid,
  } = useCheckoutInput(stringValidate);

  const {
    value: postalValue,
    changeValue: changePostalValue,
    isTouched: postalIsTouched,
    changedIsTouched: changePostalIsTouched,
    isValid: postalIsValid,
  } = useCheckoutInput(postalCodeValidate);

  const {
    value: cityValue,
    changeValue: changeCityValue,
    isTouched: cityIsTouched,
    changedIsTouched: changeCityIsTouched,
    isValid: cityIsValid,
  } = useCheckoutInput(stringValidate);

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!nameIsValid || !streetIsValid || !postalIsValid || !cityIsValid) {
      return;
    }
    const checkout = {
      name: nameValue,
      street: streetValue,
      postalCode: postalValue,
      city: cityValue,
    };
    await purchaseItems(checkout);
    router.push("/orders");
  };

  return (
    <>
      <button className="absolute top-4 right-4" onClick={closeModal}>
        <FontAwesomeIcon icon={"rectangle-xmark"} width={30} />
      </button>
      <div className="mt-10">
        <h1 className="text-center font-bold text-3xl">Checkout</h1>
        <form className="mt-10 mx-auto max-w-[400px]" onSubmit={submitForm}>
          <Input
            type="text"
            name="Your name"
            value={nameValue}
            isValid={nameIsValid}
            isTouched={nameIsTouched}
            onChangeFn={changeNameValue}
            onBlurFn={changeNameIsTouched}
          />
          <Input
            type="text"
            name="Street"
            value={streetValue}
            isValid={streetIsValid}
            isTouched={streetIsTouched}
            onChangeFn={changeStreetValue}
            onBlurFn={changeStreetIsTouched}
          />
          <Input
            type="text"
            name="Postal Code"
            value={postalValue}
            isValid={postalIsValid}
            isTouched={postalIsTouched}
            onChangeFn={changePostalValue}
            onBlurFn={changePostalIsTouched}
            placeholder="e.g. 60-001"
          />
          <Input
            type="text"
            name="City"
            value={cityValue}
            isValid={cityIsValid}
            isTouched={cityIsTouched}
            onChangeFn={changeCityValue}
            onBlurFn={changeCityIsTouched}
          />
          <div className="flex gap-4 justify-center mt-8">
            <Button className="w-[150px] py-2 max-w-xs" onClick={closeModal}>
              Close
            </Button>
            <Button className="w-[150px] py-2 max-w-xs" disabled={!nameIsValid || !streetIsValid || !postalIsValid || !cityIsValid}>Confirm</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutContent;

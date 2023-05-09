import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../common/Buttons/Button";
import { AddItemContentProps } from "@/types/modal";

const AddItemContent = ({ closeModal, redirect }: AddItemContentProps) => {
  return (
    <>
      <button className="absolute top-4 right-4" onClick={(e) => closeModal(e)}>
        <FontAwesomeIcon icon={"rectangle-xmark"} width={30} />
      </button>
      <div className="mt-[50%] desktop:mt-20">
        <h1 className="text-center text-2xl font-semibold">
          Item added to the cart!
        </h1>
        <div className="flex flex-col gap-4 items-center mt-8">
          <Button className="w-3/4 py-2 max-w-xs" onClick={(e) => redirect(e)}>
            Show Cart
          </Button>
          <span>or</span>
          <Button className="w-3/4 py-2 max-w-xs" onClick={(e) => closeModal(e)}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddItemContent;

export interface AddItemContentProps {
  closeModal: (e: React.MouseEvent<HTMLButtonElement | SVGSVGElement>) => void;
  redirect: ((e: React.MouseEvent<HTMLButtonElement>) => void);
}

export interface CheckoutContentProps {
  closeModal: (e: React.MouseEvent<HTMLButtonElement | SVGSVGElement>) => void;
}

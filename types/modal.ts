export interface ContentProps {
  closeModal: () => void;
  redirect?: (() => void) | undefined;
}
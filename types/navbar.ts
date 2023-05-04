import { IconProp } from "@fortawesome/fontawesome-svg-core/index";

export interface NavBarListItemProps {
  title: string;
  href: string;
  icon: IconProp;
  disableNavFn?: () => void;
  userIsLoading?: boolean;
}

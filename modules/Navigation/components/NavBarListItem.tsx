import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBarListItemProps } from "@/types/navbar";
import LoadingSpinner from "@/modules/common/LoadingSpinner";

const NavBarListItem = ({
  title,
  href,
  icon,
  disableNavFn,
  userIsLoading,
}: NavBarListItemProps) => {
  const clickHandler = () => {
    if (disableNavFn) disableNavFn();
  };

  return userIsLoading ? (
    <LoadingSpinner />
  ) : (
    <li>
      <Link
        href={href}
        onClick={clickHandler}
        className="inline-block mt-8 rounded font-medium desktop:p-2 desktop:mt-0 desktop:text-lg desktop:hover:text-stone-500 cursor-pointer transition-colors duration-100 ease dark:hover:text-stone-100"
      >
        <FontAwesomeIcon
          icon={icon}
          width={27}
          className="inline-block pb-1 mr-2"
        />
        {title}
      </Link>
    </li>
  );
};

export default NavBarListItem;

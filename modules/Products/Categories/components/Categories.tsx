import React, { useRef } from "react";
import useDropdownHandler from "@/hooks/useDropdownHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Categories = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { dropdownActive, toggleDropdown } = useDropdownHandler(
    dropdownRef,
    false
  );

  let listClasses =
    "flex flex-col items-start gap-2 max-w-[350px] mx-auto py-2 px-4 border font-medium dark:min-[700px]:bg-neutral-600 min-[700px]:border-none desktop:text-lg bg-white transition-colors duration-200 ease z-20 ";

  if (!dropdownActive) {
    listClasses += "hidden min-[700px]:flex";
  }

  return (
    <>
      <div className="mb-5 desktop:mt-5">
        <div
          className="max-w-[350px] py-2 px-4 mt-8 mx-auto border text-center font-medium bg-white min-[700px]:w-[350px] min-[700px]:border-none dark:min-[700px]:bg-neutral-600 desktop:mt-0 desktop:p-2 desktop:text-lg transition-colors duration-200 ease cursor-pointer"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          Categories
          <FontAwesomeIcon
            icon={dropdownActive ? "chevron-down" : "chevron-up"}
            width={22}
            className="inline-block pb-1 ml-4 min-[700px]:hidden"
          />
        </div>
        <ul className={listClasses}>
          <li>
            <Link href="/categories/male" className="hover:text-stone-400 dark:hover:text-stone-200">
              Male
            </Link>
          </li>
          <li>
            <Link href="/categories/female"  className="hover:text-stone-400 dark:hover:text-stone-200">Female</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Categories;

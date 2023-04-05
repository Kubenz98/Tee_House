import React from "react";
import SignOutButton from "./SignOutButton";
import navBarItems from "./ListItems";
import NavBarListItem from "./NavBarListItem";
import useLogout from "@/hooks/useLogout";
import useUser from "@/hooks/useUser";

interface NavBarListProps {
  navState: boolean;
  disableNavFn: () => void;
}

const NavBarList = ({ navState, disableNavFn }: NavBarListProps) => {
  const logout = useLogout();
  const { user, userIsLoading } = useUser();

  let navClasses = `flex flex-col w-full desktop:flex-row desktop:gap-2 desktop:justify-start desktop:items-center desktop:w-fit desktop:px-4 text-center bg-slate-100 shadow desktop:shadow-none overflow-hidden transition-[height] ease duration-300`;

  if (navState && user) {
    navClasses += " h-[300px] desktop:h-auto";
  } else if (navState && !user) {
    navClasses += " h-[85px] desktop:h-auto";
  } else {
    navClasses += " h-0 desktop:h-auto";
  }

  return (
    <ul className={navClasses}>
      {user ? (
        <>
          <li className="mt-4 font-medium desktop:mt-0 desktop:mr-12 desktop:text-lg">{`Hi ${user.name}!`}</li>
          {navBarItems.map((item) => (
            <NavBarListItem
              key={item.title}
              title={item.title}
              href={item.href}
              icon={item.icon}
              disableNavFn={disableNavFn}
            />
          ))}
          <SignOutButton disableNavFn={disableNavFn} logoutFn={logout} />
        </>
      ) : (
        <NavBarListItem
          title="Sign In"
          href="/sign-in"
          icon="right-to-bracket"
          disableNavFn={disableNavFn}
          userIsLoading={userIsLoading}
        />
      )}
    </ul>
  );
};

export default NavBarList;

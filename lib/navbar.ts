import { User } from "./user";

export interface HoriNavBarProps {
  user: User;
  loading: boolean;
  logout: () => Promise<void>;
}

export interface VertiNavBarProps {
  navState: boolean;
  user: User;
  loading: boolean;
  logout: () => Promise<void>;
}

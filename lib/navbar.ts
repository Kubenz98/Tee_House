import { User } from "./user";

export interface NavBarListProps {
  navState: boolean;
  user: User;
  loading: boolean;
  logout: () => Promise<void>;
}

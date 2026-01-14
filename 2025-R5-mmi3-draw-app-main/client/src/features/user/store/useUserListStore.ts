import { create } from 'zustand'
import type { User } from '../../../shared/types/user.type';

type UserState = {
  userList: User[];
  //creation dune map pour stocker les couleurs de traits des utilisateurs
  userStrokeColor :Map<string, string>;
}

type UserAction = {
  setUserList: (users: User[]) => void,
  setUserStrokeColor: (userId: string, color: string) => void;
};

export const useUserListStore = create<UserState & UserAction>((set) => ({
  userList: [],
  userStrokeColor: new Map(),

  setUserList: (userList) => set({ userList }),

  setUserStrokeColor: (userId, color) =>
    //on modifie la map de userStrokeColor en créant une nouvelle map à partir de l'ancienne
    set((state) => {
      const newMap = new Map(state.userStrokeColor);
      newMap.set(userId, color);
      //react detecte le changement détat donc le met a jour
      return { userStrokeColor: newMap };
    }),
}));
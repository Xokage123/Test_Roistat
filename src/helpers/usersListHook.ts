import { IUserInformation } from "@/components/Form/type";
import { Ref, ref } from "vue";

const localKeyListUser = "listUsers";

interface IUsersListHook {
  listUsers: Ref<IUserInformation[]>;
  getListUsers: () => IUserInformation[];
  addUserInListUsers: (newUser: IUserInformation) => void;
  sortListUsersByName: () => void;
  sortListUsersByPhone: () => void;
}

const usersListHook = (): IUsersListHook => {
  const getListUsers = (): IUserInformation[] => {
    const actualListUsersInString = localStorage.getItem(localKeyListUser);
    return actualListUsersInString ? JSON.parse(actualListUsersInString) : [];
  };

  const sortListUsersByNameOrder = ref<"up" | "down">("up");
  const sortListUsersByPhoneOrder = ref<"up" | "down">("up");

  const sortListUsersByName = () => {
    if (sortListUsersByNameOrder.value === "up") {
      sortListUsersByNameOrder.value = "down";
      listUsers.value = listUsers.value.sort((user1, user2) => {
        if (user1.name > user2.name) {
          return 1;
        }
        if (user1.name < user2.name) {
          return -1;
        }
        return 0;
      });
    } else {
      sortListUsersByNameOrder.value = "up";
      listUsers.value = listUsers.value.sort((user1, user2) => {
        if (user1.name > user2.name) {
          return -1;
        }
        if (user1.name < user2.name) {
          return 1;
        }
        return 0;
      });
    }
  };

  const sortListUsersByPhone = () => {
    if (sortListUsersByPhoneOrder.value === "up") {
      sortListUsersByPhoneOrder.value = "down";
      listUsers.value = listUsers.value.sort((user1, user2) => {
        if (user1.phone > user2.phone) {
          return 1;
        }
        if (user1.phone < user2.phone) {
          return -1;
        }
        return 0;
      });
    } else {
      sortListUsersByPhoneOrder.value = "up";
      listUsers.value = listUsers.value.sort((user1, user2) => {
        if (user1.phone > user2.phone) {
          return -1;
        }
        if (user1.phone < user2.phone) {
          return 1;
        }
        return 0;
      });
    }
  };

  const addUserInListUsers = (newUser: IUserInformation): void => {
    const actualListUsersInString = localStorage.getItem(localKeyListUser);
    if (actualListUsersInString) {
      const actualListUsers = getListUsers();
      actualListUsers.push(newUser);
      localStorage.setItem(localKeyListUser, JSON.stringify(actualListUsers));
    } else {
      const newListUsers = [];
      newListUsers.push(newUser);
      localStorage.setItem(localKeyListUser, JSON.stringify(newListUsers));
    }
    listUsers.value.push(newUser);
  };

  const listUsers = ref<IUserInformation[]>(getListUsers());

  return {
    listUsers,
    getListUsers,
    addUserInListUsers,
    sortListUsersByName,
    sortListUsersByPhone,
  };
};

export default usersListHook;

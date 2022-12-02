//@ts-check
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const DBGetLogins = async (aetUser) => {
  const { userlog } = aetUser;
  console.log(userlog);
  const db = getFirestore();
  const users = query(collection(db, "Usuarios"), where("user", "==", userlog));
  const Login = new Promise((resolve, reject) => {
    getDocs(users).then((res) => {
      const UserNormalized = res.docs.map((ele) => {
        return { userlog: ele.data().user, password: ele.data().password };
      });
      UserNormalized.push(aetUser);
      JSON.stringify(UserNormalized[0]) === JSON.stringify(UserNormalized[1])
        ? resolve(
            res.docs.map((ele) => {
              return { ...ele.data() };
            })
          )
        : reject(null);
    });
  });
  return Login;
};
export const DBPostRegist = async () => {
  const db = getFirestore();
  const users = query(
    collection(db, "Usuarios"),
    where("user", "==", "Buzzar")
  );
  const a = await getDocs(users).then((res) => {
    const arraynormalized = res.docs.map((ele) => {
      return { ...ele.data() };
    });
    return arraynormalized;
  });
  console.log(a);
};

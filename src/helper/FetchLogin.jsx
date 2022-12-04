//@ts-check
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";

export const DBGetLogins = async (aetUser, Checked) => {
  const { userlog } = aetUser;
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
              return {
                idUser: ele.id,
                recorder: Checked,
                ...ele.data(),
              };
            })
          )
        : reject(null);
    });
  });
  return Login;
};

export const DBGetLoginsLocalStorage = (SearchUser) => {
  const db = getFirestore();
  const LoginLocalStorage = new Promise((resolve, rej) => {
    const docRef = doc(db, "Usuarios", SearchUser);
    getDoc(docRef).then((res) => (res ? resolve(res.data()) : rej(null)));
  });
  return LoginLocalStorage;
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

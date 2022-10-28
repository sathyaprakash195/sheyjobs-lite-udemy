import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { fireDB } from "../firebaseConfig";
import CryptoJS from "crypto-js";

export const LoginUser = async (payload) => {
  try {
    // check if user exists
    const qry = query(
      collection(fireDB, "users"),
      where("email", "==", payload.email)
    );
    const querySnapshot = await getDocs(qry);
    if (querySnapshot.empty) {
      return {
        success: false,
        message: "User not found",
      };
    } else {
      const snapshotsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const user = snapshotsData[0];
      const decryptedPassword = CryptoJS.AES.decrypt(
        user.password,
        "sheyjobs-lite"
      ).toString(CryptoJS.enc.Utf8);
      if (decryptedPassword === payload.password) {
        return {
          success: true,
          message: "Login successful",
          data: {
            ...user,
            password: "",
          },
        };
      } else {
        return {
          success: false,
          message: "Incorrect password",
        };
      }
    }
  } catch (error) {}
};

export const RegisterUser = async (payload) => {
  try {
    // check if email already exists
    const qry = query(
      collection(fireDB, "users"),
      where("email", "==", payload.email)
    );
    const querySnapshot = await getDocs(qry);
    if (querySnapshot.size > 0) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    // encrypt password
    const encryptedPassword = CryptoJS.AES.encrypt(
      payload.password,
      "sheyjobs-lite"
    ).toString();
    payload.password = encryptedPassword;

    // add user to db
    const response = await addDoc(collection(fireDB, "users"), payload);
    return {
      success: true,
      message: "User Registered Successfully",
      data: response,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};

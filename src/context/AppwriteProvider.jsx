import { createContext, useContext, useState, useEffect } from "react";
import { databases } from "../appwrite/appwrite";
const AppwriteContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppwriteProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Fetch users' data from Appwrite and update the state
    const fetchUsersData = async () => {
      try {
        const response = await databases.listDocuments(
          "65ddd8d961a57942a6c5",
          "65ddd8e6a4ab67400c6b"
        );
        setUsersData(response.documents);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };

    fetchUsersData();
  }, []);

  return (
    <AppwriteContext.Provider value={{ usersData }}>
      {children}
    </AppwriteContext.Provider>
  );
};

export const useAppwrite = () => {
  return useContext(AppwriteContext);
};

import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { DocumentData } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.React_APP_FB_apiKey,
  authDomain: process.env.React_APP_FB_authDomain,
  projectId: process.env.React_APP_FB_projectId,
  storageBucket: process.env.React_APP_FB_storageBucket,
  messagingSenderId: process.env.React_APP_FB_messagingSenderId,
  appId: process.env.React_APP_FB_appId,
  measurementId: process.env.React_APP_FB_measurementId,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 게시판 데이터 저장하기
interface saveDataProps {
  title: string;
  text: string;
  name: string;
  createdDate: number;
  boardId: number;
  time: string;
}
export const saveData = async ({
  title,
  text,
  name,
  createdDate,
  boardId,
  time,
}: saveDataProps) => {
  await setDoc(
    doc(db, "boards", `${boardId}`),
    {
      time,
      title,
      text,
      name,
      createdDate,
      id: boardId,
    },
    { merge: true },
  );
};

// 게시판 목록 읽어오기
export const fetchBoard = async (): Promise<DocumentData> => {
  const boardQuery = query(
    collection(db, "boards"),
    orderBy("createdDate", "desc"),
  );
  const BoardDB = await getDocs(boardQuery);
  return BoardDB;
};

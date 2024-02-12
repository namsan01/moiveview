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
  apiKey: "AIzaSyD9zU_gimKGw1YJT6xxe0NRxZ-9lx548e8",
  authDomain: "mymovie-e86ff.firebaseapp.com",
  projectId: "mymovie-e86ff",
  storageBucket: "mymovie-e86ff.appspot.com",
  messagingSenderId: "473665212869",
  appId: "1:473665212869:web:be10bdb397b581f87d3bac",
  measurementId: "G-HETR1PQFSH",
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

"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import moment from "moment";
import { useState } from "react";


const Navbar = () => {
  const pathname = usePathname();
  const [time, setTime] = useState(new Date());


  setInterval(() => {
    setTime(new Date())
  }, 1000)

  function convertToFormattedDate(inputDateString) {
    const inputDate = new Date(inputDateString);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(inputDate.getDate()).padStart(2, '0');
    const hours = String(inputDate.getHours()).padStart(2, '0');
    const minutes = String(inputDate.getMinutes()).padStart(2, '0');
    const seconds = String(inputDate.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div>UTC: {convertToFormattedDate(time)}</div>
        <div>Year: {moment().format('YYYY')}</div>
        <div>Day: {moment().dayOfYear()}</div>
      </div>
    </div>
  );
};

export default Navbar;

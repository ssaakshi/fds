import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdSatellite
  
} from "react-icons/md";

const menuItems = [
  {
    title: "Satellites",
    list: [
      {
        title: "TD-1-D2/ Altacom",
        path: "/dashboard/Altacom",
        icon: <MdSatellite />,
      },
      {
        title: "TD-1- Shakuntala",
        path: "/dashboard/Shakuntala",
        icon: <MdSatellite />,
      },
      {
        title: "TD-1- Anand",
        path: "/dashboard/Anand",
        icon: <MdSatellite />,
      },
      {
        title: "Firefly-01",
        path: "/dashboard/FireFly-01",
        icon: <MdSatellite />,
      },
      {
        title: "Firefly-02",
        path: "/dashboard/FireFly-02",
        icon: <MdSatellite />,
      },
      {
        title: "Firefly-03",
        path: "/dashboard/FireFly-03",
        icon: <MdSatellite />,
      }

    ],
  },
  
];

const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Pixxel Space</span>
          <span className={styles.userTitle}>FDS Dashboard</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

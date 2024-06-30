import { ReactComponent as Logo } from "@/assets/logo.svg";

import styles from "./styles.module.css";
import { useCallback, useState } from "react";
import EditPortal from "../editPortal";

function Navbar() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleOpenModal = useCallback(() => {
    setIsOpenModal((prev) => !prev);
  }, [setIsOpenModal]);

  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrapper}>
        <Logo />
        <h2 className={styles.logo}>STDEV</h2>
      </div>

      <button className={styles.edit} onClick={toggleOpenModal}>
        +
      </button>
      {isOpenModal && <EditPortal close={toggleOpenModal} open={isOpenModal} />}
    </nav>
  );
}

export default Navbar;

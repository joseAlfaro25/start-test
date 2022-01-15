//Import Lib
import Link from "next/link";
import Modal from "react-modal";
import { useRouter } from "next/router";
//Components
import Person from "../Person";
//Style
import styles from "../../styles/layout.module.css";

interface Props {
  children: React.ReactChild;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "auto",
    padding: 30,
    borderRadius: 17,
    transform: "translate(-50%, -50%)",
  },
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <div>
      <div className={styles.nav}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </div>
      <div className={styles.main}>
        <main>{children}</main>
      </div>
      <Modal
        isOpen={!!router.query.id}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <Person id={router.query.id} />
      </Modal>
    </div>
  );
}

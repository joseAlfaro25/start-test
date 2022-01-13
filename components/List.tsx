//Import Lib
import Modal from "react-modal";
import { useRouter } from "next/router";
import InfoIcon from "@mui/icons-material/Info";
import ImageList from "@mui/material/ImageList";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import ImageListItemBar from "@mui/material/ImageListItemBar";
//Components
import Person from "./Person";
//Style
import styles from '../styles/List.module.css';
import Link from "next/link";

Modal.setAppElement("#__next");
interface Props {
  data: [];
}
interface Info {
  id:string;
  image: string;
  name: string;
  gender: string;
}
const List = ({ data }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <ImageList sx={{ width: 'autonpm i react-modal', height: 'auto' }} >
        <ImageListItem key="Subheader" cols={2}>
          <h1><b>Personajes</b></h1>
        </ImageListItem>
        {data?.map((item: Info) => (
          <ImageListItem key={item.image}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              subtitle={item.gender}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.name}`}
                >
                   <Link
              href={`/?id=${item.id}`}
              as={`/Character/id=${item.id}`}
            >
                  <InfoIcon />
            </Link>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        isOpen={!!router.query.id}
        onRequestClose={() => router.push("/")}
      >
        <Person id={router.query.id}/>
      </Modal>
    </div>
  );
};

export default List;

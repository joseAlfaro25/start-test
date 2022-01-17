//Import Lib
import Modal from "react-modal";
import InfoIcon from "@mui/icons-material/Info";
import ImageList from "@mui/material/ImageList";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

//Components
import { Info } from "../types/IDataInfo";
//Style
import styles from "../styles/List.module.css";
import Link from "next/link";
import { CardMedia, Grid, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";

Modal.setAppElement("#__next");
interface Props {
  data: [];
}

const List = ({ data }: Props) => {
  const [searchedAchar, setSearcheAchar] = useState<string>("");
  const orderData = data.sort((a: Info, b: Info) => {
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  const [rows, setRows] = useState<Info[]>(orderData);
  const requestSearch = (
    searchedVal: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = searchedVal.target;
    setSearcheAchar(value);
    const filteredRows = orderData.filter((row: Info) => {
      return row.name.toLowerCase().includes(value.toLowerCase());
    });
    setRows(filteredRows);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>
            <b>Personajes</b>
          </h1>
        </Grid>
        <Grid item xs={6} className={styles.item}>
          <div className={styles.sub_item}>
          <TextField
            value={searchedAchar}
            onChange={requestSearch}
            placeholder="Buscar"
            className={styles.fiel}
          />
          </div>
        </Grid>
      </Grid>
      <div className={styles.container}>
        <ImageList cols={1} className={styles.img_container}>
          <Grid container spacing={2}>
            {rows?.map((item: Info) => (
              <Grid item xs={12} md={6} key={item.image}>
                <ImageListItem>
                  <CardMedia
                    component="img"
                    height="550"
                    image={item.image}
                    alt={item.image}
                    className={styles.img}
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={item.gender}
                    className={styles.img_list}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name}`}
                      >
                        <Link
                          href={`/?id=${item.id}`}
                          as={`/details/${item.id}`}
                          passHref={true}
                        >
                          <Tooltip title="Detalles">
                            <div>
                              <InfoIcon className={styles.info} />
                            </div>
                          </Tooltip>
                        </Link>
                      </IconButton>
                    }
                  />
                </ImageListItem>
              </Grid>
            ))}
          </Grid>
        </ImageList>
      </div>
    </>
  );
};

export default List;

//import Lib
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { red } from "@mui/material/colors";
//components
import { Info } from "../../types/IDataInfo";
//styles
import styles from "../../styles/card.module.css";
import Link from "next/link";

interface Props {
  data: Info;
}

export default function TableDetails({ data }: Props) {
  function createData(name: string, item: any) {
    return { name, item };
  }

  const rows = [
    createData("Genero", `${data.gender}`),
    createData("Mundo de origen", `${data.homeworld}`),
    createData("Especie", `${data.species}`),
    createData("Estatura", `${data.height}`),
    createData("Color de piel", `${data.skinColor}`),
  ];

  return (
    <div className={styles.container}>
      <TableContainer
        sx={{ boxShadow: "none", maxWidth: 350 }}
        component={Paper}
      >
        <div className={styles.title}>
          <div className={styles.name}>
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              className={styles.title}
            >
              {data.name.charAt(0)}
            </Avatar>
            <h4>{data.name}</h4>
          </div>
        </div>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: "none",
                    borderBottom: "none",
                  },
                }}
              >
                <TableCell component="th" scope="row" sx={{ border: "none" }}>
                  <div>
                    <b>{row.name}</b>
                  </div>
                </TableCell>
                <TableCell style={{ borderBottom: "none" }} align="right">
                  {" "}
                  <div>{row.item}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <div className={styles.container}>
            {" "}
            <Link href={data.wiki}>
              <a target="_blank">
                <Tooltip title="Encontraras todos los detalles referentes al personaje como película, director.etc.">
                  <InfoIcon />
                </Tooltip>
              </a>
            </Link>
          </div>
        </Table>
      </TableContainer>
      <div>
        
      </div>
    </div>
  );
}

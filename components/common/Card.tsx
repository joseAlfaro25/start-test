//import Lib
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import { red } from "@mui/material/colors";
//components
import { Info } from "../../types/IDataInfo";
//styles
import styles from "../../styles/card.module.css";

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
    createData("Color de piel", `${data.skinColor}`)
  ];

  return (
    <div className={styles.container}>
      <TableContainer
        sx={{ boxShadow: "none" }}
        component={Paper}
      >
        <Table size="small" aria-label="a dense table">
          <div className={styles.title}>
            <div>
              <Avatar variant="rounded" src={data.image} className={styles.title} />
            {/* <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              className={styles.title}
            >
            </Avatar> */}
            </div>
            <div className={styles.name}>
              <h4>{data.name}</h4>
            </div>
          </div>

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
                    <div><b>{row.name}</b></div>
                </TableCell>
                <TableCell style={{ borderBottom: "none" }} align="right">
                  {" "}
                  <div>{row.item}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

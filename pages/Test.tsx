import { Grid } from "@mui/material";
import styles from "../styles/person.module.css";
import { data } from "../data";
import Card from "../components/common/Card";

const Test = () => {
  console.log("Data", data);
  return (
    <div className={styles.container}>
      <Grid container spacing={2} className={styles.container}>
        <Grid item xs={12} md={4}>
        <img width="80%" height="auto" src={data.image} />
        </Grid>
        <Grid item xs={12} md={8}>
            <Card data={data}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Test;

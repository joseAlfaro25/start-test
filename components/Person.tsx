import useSWR from "swr"

import Card from "../components/common/Card";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

const fetchC = (id:string) =>
  fetch(
    `https://akabab.github.io/starwars-api/api/id/${id}.json`
  ).then((response) => response.json());

interface Props {
    id:string | string[] | undefined;
}
const Person = ({id}:Props) => {
    const router = useRouter();
    const { data, error } = useSWR(id, fetchC);
    if (error) return <div>Error Consulte con soporte</div>;
    if (!data) return <div>Loading...</div>;
    return (
      <div>
      <Grid>
        <Grid item xs={12} md={12}>
            <Card data={data}/>
        </Grid>
      </Grid>
    </div>
    )
}

export default Person

import useSWR from "swr"

const fetchCurrency = (id:string) =>
  fetch(
    `https://akabab.github.io/starwars-api/api/id/${id}.json`
  ).then((response) => response.json());

interface Props {
    id:string | string[] | undefined;
}
const Person = ({id}:Props) => {
    const { data, error } = useSWR(id, fetchCurrency);
    if (error) return <div>Error Consulte con soporte</div>;
    if (!data) return <div>Loading...</div>;
    console.log('Testing', data);
    return (
        <div>
            {data.name}
        </div>
    )
}

export default Person

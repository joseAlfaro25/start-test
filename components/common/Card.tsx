import { Info } from "../../types/IDataInfo";
import styles from "../../styles/card.module.css";

interface Props {
  data: Info;
}

const Card = ({ data }: Props) => {
  return (
    <div>
      {/*  */}
      {/*  */}
      <div className={styles.container_internal}>
        <div className={styles.title}>
          <h3>Detalles</h3>
        </div>
        <div>
          <table>
            <tr>
              <th className={styles.th}>Nombre</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th className={styles.th}>Edad</th>
              <td>Item 2</td>
            </tr>
            <tr>
              <th>Head3</th>
              <td>Item 2</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;

import Pagination from "react-bootstrap/Pagination";
import Props from "./IProps";
import styles from "./pagination.module.scss";

// Можно так же с бэкенда получать общее количество элементов и на осносве этих данные отрисовывать нужное количество страниц в пагинации
const paginationItem = [
  {
    id: "1",
    number: 1,
  },
  {
    id: "2",
    number: 2,
  },
  {
    id: "3",
    number: 3,
  },
];

const PaginationComponent: React.FC<Props> = ({
  pagination,
  handleChangePage,
}) => {
  return (
    <Pagination className={styles.Pagination}>
      <Pagination.Prev
        onClick={() => handleChangePage("prev")}
        disabled={pagination.page === 1}
      />
      {paginationItem.map((item) => (
        <Pagination.Item
          onClick={() => handleChangePage(item.id)}
          key={item.id}
          active={pagination.page === item.number}
        >
          {item.number}
        </Pagination.Item>
      ))}
      {/* <Pagination.Ellipsis /> */}
      <Pagination.Next
        onClick={() => handleChangePage("next")}
        disabled={pagination.page > 2}
      />
    </Pagination>
  );
};

export default PaginationComponent;

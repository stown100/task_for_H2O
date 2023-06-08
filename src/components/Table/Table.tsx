import React, { ChangeEvent, useEffect, useState } from "react";
import { api } from "../../utils/api";
import Table from "react-bootstrap/Table";
import styles from "./table.module.scss";
import { Props, ITable } from "./ITable";
import PaginationComponent from "../Pagination/Pagination";
import Form from "react-bootstrap/Form";

const TableComponent: React.FC<Props> = ({ searchParam }) => {
  const [users, setUsers] = useState<ITable[]>([]);
  const [sortParam, setSortParam] = useState({
    name: "",
    order: true,
  });
  const [isSort, setIsSort] = useState(0);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 8,
  });
  const [countUsers, setCountUsers] = useState({
    from: 1,
    to: 8,
  });

  const [selectUser, setSelectUser] = useState("");

  const getUsers = () => {
    api
      .getUsers(sortParam, pagination, searchParam)
      .then((res) => setUsers(res))
      .catch((err) => new Error(err));
  };

  const clickBySort = (param: string, num: number) => {
    if (sortParam.name !== param) {
      setSortParam((prev) => {
        let newState = { ...prev };
        newState = {
          name: "",
          order: true,
        };
        return newState;
      });
    }
    setSortParam((prev) => {
      let newState = { ...prev };
      newState = {
        ...prev,
        name: param,
        order: !prev.order,
      };
      return newState;
    });
    setIsSort((prev) => (prev === num ? 0 : num));
  };

  const handleChangePage = (param: string) => {
    setPagination((prev) => {
      let newState = { ...prev };
      newState = {
        ...prev,
        page:
          param === "prev"
            ? prev.page - 1
            : param === "next"
            ? prev.page + 1
            : Number(param),
      };
      return newState;
    });
    setCountUsers((prev) => {
      let newState = { ...prev };
      newState = {
        ...prev,
        from:
          pagination.page < Number(param) || param === "next"
            ? prev.from + 8
            : prev.from - 8,
        to:
          pagination.page < Number(param) || param === "next"
            ? prev.to + 8
            : prev.to - 8,
      };
      return newState;
    });
  };

  const handleChanheMaxCountUsers = (e: ChangeEvent<HTMLSelectElement>) => {
    setPagination((prev) => {
      let newState = { ...prev };
      newState = {
        ...prev,
        limit: Number(e.target.value),
      };
      return newState;
    });
  };

  const handleSelectUser = (id: string) => {
    setSelectUser(id);
  };

  useEffect(() => {
    getUsers();
  }, [sortParam, pagination, searchParam]);

  const titles = (
    <>
      <tr>
        <th rowSpan={2} className={styles.TableFixColumn}>
          №
        </th>
        <th
          rowSpan={2}
          className={`${styles.TableFixColumn} ${styles.TableFixColumnTwo}`}
          onClick={() => clickBySort("name", 1)}
        >
          <div className={`${styles.TableHeadSort}`}>
            Имя сотрудника
            <img
              className={isSort === 1 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th colSpan={6}>Основная информация</th>
        <th colSpan={2}>Банковская информация</th>
        <th colSpan={11}>Документы сотрудника</th>
        <th colSpan={6}>Информация от HR</th>
      </tr>
      <tr>
        <th>ID номер</th>
        <th>Телефона</th>
        <th onClick={() => clickBySort("gender", 2)}>
          <div className={styles.TableHeadSort}>
            Пол
            <img
              className={isSort === 2 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th>Дата рождения</th>
        <th onClick={() => clickBySort("subway", 3)}>
          <div className={styles.TableHeadSort}>
            Метро
            <img
              className={isSort === 3 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th>Адрес проживания</th>
        <th onClick={() => clickBySort("bank", 4)}>
          <div className={styles.TableHeadSort}>
            Банк
            <img
              className={isSort === 4 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th>Номер карты</th>
        <th onClick={() => clickBySort("nationality", 5)}>
          <div className={styles.TableHeadSort}>
            Гражданство
            <img
              className={isSort === 5 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th>Пасспорт</th>
        <th>Кем выдан</th>
        <th>Срок действия</th>
        <th>Место рождения</th>
        <th>Адрес прописки</th>
        <th onClick={() => clickBySort("patent", 6)}>
          <div className={styles.TableHeadSort}>
            Патент
            <img
              className={isSort === 6 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th>Срок действия</th>
        <th>СНИЛС</th>
        <th>ИНН</th>
        <th>Мед.книжка</th>
        <th onClick={() => clickBySort("role", 7)}>
          <div className={styles.TableHeadSort}>
            Должность
            <img
              className={isSort === 7 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th onClick={() => clickBySort("division", 8)}>
          <div className={styles.TableHeadSort}>
            Подразделение
            <img
              className={isSort === 8 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th onClick={() => clickBySort("permission", 9)}>
          <div className={styles.TableHeadSort}>
            Решение
            <img
              className={isSort === 9 ? styles.TableImgTransform : ""}
              src="/static/images/table_arrow.svg"
              alt="arrow"
            />
          </div>
        </th>
        <th>Источник</th>
        <th>Дата</th>
        <th>Примечание</th>
      </tr>
    </>
  );

  const content =
    users.length > 0 &&
    users.map((user, index) => (
      <tr key={user.id} onClick={() => handleSelectUser(user.id)}>
        <td className={`p-3 ${styles.TableFixColumn}`}>{index + 1}</td>
        <td
          className={`p-3 ${styles.TableFixColumn} ${
            styles.TableFixColumnTwo
          } ${selectUser === user.id && styles.TableFixColumnSelect}`}
        >
          {user?.name || "-"}
        </td>
        <td className="p-3">{user?.id || "-"}</td>
        <td className="p-3">{user?.phone || "-"}</td>
        <td className="p-3">{user?.gender || "-"}</td>
        <td className="p-3">{user?.birthday || "-"}</td>
        <td className="p-3">{user?.subway || "-"}</td>
        <td className="p-3">{user?.address || "-"}</td>

        <td className="p-3">{user?.bank || "-"}</td>
        <td className="p-3">{user?.card || "-"}</td>

        <td className="p-3">{user?.nationality || "-"}</td>
        <td className="p-3">{user?.passport || "-"}</td>
        <td className="p-3">{user?.issued_by || "-"}</td>
        <td className="p-3">{user?.passport_validity || "-"}</td>
        <td className="p-3">{user?.birthplace || "-"}</td>
        <td className="p-3">{user?.residence || "-"}</td>
        <td className="p-3">{user?.patent || "-"}</td>
        <td className="p-3">{user?.residence_validity || "-"}</td>
        <td className="p-3">{user?.snils || "-"}</td>
        <td className="p-3">{user?.identification_code || "-"}</td>
        <td className="p-3">{user?.medical_book || "-"}</td>

        <td className="p-3">{user?.role || "-"}</td>
        <td className="p-3">{user?.division || "-"}</td>
        <td className="p-3">{user?.permission || "-"}</td>
        <td className="p-3">{user?.source || "-"}</td>
        <td className="p-3">{user?.date || "-"}</td>
        <td className="p-3">{user?.comment || "-"}</td>
      </tr>
    ));

  return (
    <div className={styles.Table}>
      <div className={styles.TableCount}>
        <span className={styles.TableSpan}>
          {`показанно ${countUsers.from} - ${
            countUsers.to
          } из ${28} результатов`}
        </span>
      </div>
      <Table responsive className="table-bordered table-striped">
        <thead>{titles}</thead>
        <tbody>{content}</tbody>
      </Table>
      <PaginationComponent
        pagination={pagination}
        handleChangePage={handleChangePage}
      />
      <div className={styles.TableQuantity}>
        <span className={styles.TableSpan}>отображать на странице</span>
        <Form.Select
          className={styles.TableQuantitySelect}
          aria-label="Default select example"
          onChange={handleChanheMaxCountUsers}
        >
          <option>8</option>
          <option>16</option>
          <option>24</option>
          <option>36</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default TableComponent;

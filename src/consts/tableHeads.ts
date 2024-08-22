import { ITableHeads } from "../types/TableHeads";
//заголовки таблицы
export const tableHeads: ITableHeads[] = [
    { name: "Название", sortType: "" },
    { name: "Язык", sortType: "" },
    { name: "Число форков", sortType: "forks" },
    { name: "Число звёзд", sortType: "stars" },
    { name: "Дата обновления", sortType: "updated" },
];
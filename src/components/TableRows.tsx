import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IRepo } from "../types/IRepo";
import { Dispatch, SetStateAction } from "react";

interface TableRowsProps {
    item: IRepo;
    setRepo: Dispatch<SetStateAction<IRepo | null>>;
}

export default function TableRows(props: TableRowsProps) {
    const {item, setRepo} = props
  return (
    <TableRow key={item.id} onClick={() => setRepo(item)}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.language}</TableCell>
        <TableCell>{item.forks_count}</TableCell>
        <TableCell>{item.stargazers_count}</TableCell>
        <TableCell>{item.updated_at.substr(0, 10)}</TableCell>
    </TableRow>
  )
}

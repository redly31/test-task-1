import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { tableHeads } from "../consts/tableHeads";


export default function TableHeads() {
  return (
    <TableHead>
              <TableRow>
                {tableHeads.map((head) => (
                  <TableCell key={head.name} scope="col">
                    {head.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
  )
}

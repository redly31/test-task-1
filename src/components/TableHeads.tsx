import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { tableHeads } from "../consts/tableHeads";
import CheckIcon from '@mui/icons-material/Check';

interface TableHeadsProps {
  setSortType: React.Dispatch<React.SetStateAction<string>>
  sortType: string;
}

export default function TableHeads(props: TableHeadsProps) {
  const {setSortType, sortType} = props
  return (
    <TableHead>
      <TableRow>
        {tableHeads.map((head) => (
          <TableCell key={head.name} scope="col" onClick={() => setSortType(head.sortType)}>
            {head.name} 
            {head.sortType === sortType && head.sortType !== ''
              ? <CheckIcon/>
              : null
              
            }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

import { useState } from "react";
import classes from "./Navigation.module.scss";
import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { changeSearch } from "../../store/paginationSlice";

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch()

  const search = () => {
    if(searchQuery !== '') {
      dispatch(changeSearch(searchQuery))
    }
  }

  return (
    <nav className={classes.navigation}>
      <TextField
        fullWidth
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        type="text"
        placeholder="Введите поисковый запрос"
        id="outlined-basic"
        variant="outlined"
        color="info"
        sx={{
          input: {
            backgroundColor: "white",
            color: "black",
            borderRadius: "4px",
          },
        }}
      />
      <Button onClick={() => search()} variant="contained">Искать</Button>
    </nav>
  );
}

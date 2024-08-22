import { IRepo } from "../../types/IRepo";
import classes from "./Sidebar.module.scss";
import StarIcon from "@mui/icons-material/Star";

export default function Sidebar({ repo }: { repo: IRepo | null }) {

  if (!repo) {
    return (
      <div className={classes.sidebar}>
        <div className={classes.sidebar__title__wrapper}>
          <h2 className={classes.sidebar__title}>Выберите репозиторий</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__repository}>
        <h2 className={classes.sidebar__repository__title}>{repo.name}</h2>
        <div className={classes.sidebar__repository__info}>
          <h3 className={classes.sidebar__repository__language}>
            {repo.language}
          </h3>
          <div className={classes.sidebar__repository__stars}>
            <StarIcon/>
            <h3>{repo.stargazers_count}</h3>
          </div>
        </div>
        <p>{repo.description}</p>
        <h3>{repo.license.name}</h3>
      </div>
    </div>
  );
}

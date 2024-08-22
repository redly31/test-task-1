import { useMemo } from "react";
import { IRepo } from "../types/IRepo";

//хук сортировки
export const useSort = (repos: IRepo[] | undefined, sortType: string) => {
    const sortedRepos = useMemo(() => {
      if (!repos) return [];
      if (sortType === "forks") {
        return [...repos].sort((a, b) => b.forks_count - a.forks_count);
      }
      if (sortType === "stars") {
        return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
      }
      if (sortType === "updated") {
        return [...repos].sort((a, b) => {
            const dateA = new Date(a.updated_at);
            const dateB = new Date(b.updated_at);
            return dateB.getTime() - dateA.getTime();
        });
      }
      return repos;
    }, [sortType, repos])
    return sortedRepos;
  }
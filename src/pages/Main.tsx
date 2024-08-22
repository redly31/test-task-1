import Pagination from "../components/Pagination/Pagination";
import Sidebar from "../components/Sidebar/Sidebar";
import Welcome from "../components/Welcome/Welcome";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import "./Main.scss";
import { IRepo } from "../types/IRepo";
import { useState } from "react";
import TableHeads from "../components/TableHeads";
import TableRows from "../components/TableRows";
import { useGetReposQuery } from "../store/reposApi";
import { useAppSelector } from "../hooks/redux";
import { useSort } from "../hooks/useSort";

export default function Main() {
  const search = useAppSelector(state => state.pagination.search)
  const limit = useAppSelector(state => state.pagination.limit)
  const page = useAppSelector(state => state.pagination.page)
  const [sortType, setSortType] = useState<string>("")
  const {data, isSuccess} = useGetReposQuery({search, limit, page}, {skip: search === ''});
  const [repo, setRepo] = useState<IRepo | null>(null);
  const repos: IRepo[] | undefined = data?.items
  const totalCount: number | undefined = data?.total_count
  const sortedRepos = useSort(repos, sortType)

  console.log(sortedRepos)

  if(!isSuccess) {
    return <Welcome/>
  }
  
  return (
    <div className="main">
      <div className="main__inner">
        <div className="">
          <h1 className="main__title">Результаты поиска</h1>
          <Table>
            <TableHeads setSortType={setSortType} sortType={sortType}/>
            <TableBody>
              {sortedRepos?.map((item: IRepo) => (
                <TableRows key={item.id} item={item} setRepo={setRepo}/>
              ))}
            </TableBody>
          </Table>
        </div>
        <Sidebar repo={repo} />
      </div>
      <Pagination totalCount={totalCount}/>
    </div>
  );
}
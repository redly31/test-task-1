import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeLimit, changePage } from '../../store/paginationSlice';
import classes from './Pagination.module.scss';

export default function Pagination({totalCount}: {totalCount: number | undefined}) {
    const page = useAppSelector(state => state.pagination.page)
    const limit = useAppSelector(state => state.pagination.limit)
    const dispatch = useAppDispatch()
    const nextPage = () => dispatch(changePage(page + 1))
    const prevPage = () => page !== 1 && dispatch(changePage(page - 1))
    const editLimit = (value: string) => {
        dispatch(changePage(1))
        dispatch(changeLimit(Number(value)))
    }
    
  return (
    <div className={classes.pagination}>
        <div className={classes.pagination__inner}>
            <div className={classes.rows__select__wrapper}>
                <h3 className={classes.rows__select__title}>Rows per page:</h3>
                <select value={limit} onChange={e => editLimit(e.target.value)} className={classes.rows__select} name="pets" id="pet-select">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="1">1</option>
                </select>
            </div>
            <div className={classes.pagination__buttons}>
                <button className={classes.pagination__button} onClick={prevPage}>&lt;</button>
                {totalCount
                    ? <h3 className={classes.current__page__title}>
                         {page} - {Math.ceil(totalCount / limit)}
                    </h3>
                    : <h3>Загрузка...</h3>
                }
                <button className={classes.pagination__button} onClick={nextPage}>&gt;</button>
            </div>
        </div>
    </div>
  )
}

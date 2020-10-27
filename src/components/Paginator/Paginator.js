import React, {useState} from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginator = ({totalPagesCount, pageSize, currentPage, changeCurrentPage, portionSize = 10}) => {
    let pagesNumber = Math.ceil(totalPagesCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesNumber / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <Pagination>
            {portionNumber > 1 &&
            <Pagination.Prev onClick={() => setPortionNumber(portionNumber - 1)}>{'<'}</Pagination.Prev>
            }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return <Pagination.Item
                        key={page}
                        onClick={() => changeCurrentPage(page)}
                    >{page}</Pagination.Item>
                })}
            {portionCount > portionNumber &&
            <Pagination.Next onClick={() => setPortionNumber(portionNumber + 1)}>{'>'}</Pagination.Next>
            }
        </Pagination>
    )
}

export default Paginator

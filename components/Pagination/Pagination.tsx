"use client";
import css from './Pagination.module.css';
import ReactPaginate from "react-paginate";

export interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({pageCount,currentPage,onPageChange,}: PaginationProps) {
  return (
  <ReactPaginate
      className={css.current}
      pageCount={pageCount}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      activeClassName={css.active}
      pageClassName={css.page}
      forcePage={currentPage - 1}
      onPageChange={(evt: { selected: number }) => onPageChange(evt.selected + 1)}
    />
  );
}
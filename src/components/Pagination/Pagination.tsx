import classNames from 'classnames';

type Props = {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number) => void,
};

export const Pagination:React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(total / perPage);

  return (
    <>
      <ul className="pagination">
        <li
          className={classNames('page-item', {
            disabled: currentPage === 1,
          })}
        >
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            aria-disabled="true"
            onClick={() => onPageChange(currentPage - 1)}
          >
            «
          </a>
        </li>
        {Array.from({ length: pageCount }, (_, i) => (
          <li
            key={i}
            className={classNames('page-item', {
              active: currentPage === i + 1,
            })}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href={`#${i + 1}`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </a>
          </li>
        ))}
        <li
          className={classNames('page-item', {
            disabled: currentPage === pageCount,
          })}
        >
          <a
            data-cy="nextLink"
            className="page-link"
            href="#next"
            aria-disabled="false"
            onClick={() => onPageChange(currentPage + 1)}
          >
            »
          </a>
        </li>
      </ul>
      <ul>
        <li data-cy="item">Item 1</li>
        <li data-cy="item">Item 2</li>
        <li data-cy="item">Item 3</li>
        <li data-cy="item">Item 4</li>
        <li data-cy="item">Item 5</li>
      </ul>
    </>
  );
};

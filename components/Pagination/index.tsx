import React from 'react';
import { Button, ButtonGroup, Select } from '@chakra-ui/react';
import { PaginationNav } from './styles';

function Pagination({ total, limit, page, setPage, setLimit }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <PaginationNav>
        <label>
          <span>게시글 개수</span>
          <Select variant="unstyled" placeholder={limit} onChange={({ target: { value } }) => setLimit(Number(value))}>
            <option value="10">10</option>
            <option value="10">20</option>
            <option value="10">50</option>
          </Select>
        </label>

        <ButtonGroup>
          <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </Button>
          <ButtonGroup>
            {Array(numPages)
              .fill(null)
              .map((_, i) => (
                <Button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : null}>
                  {i + 1}
                </Button>
              ))}
          </ButtonGroup>
          <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </Button>
        </ButtonGroup>
      </PaginationNav>
    </>
  );
}

export default Pagination;

import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <nav>
        <ButtonGroup>
          <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </Button>
          <Button>
            {Array(numPages)
              .fill(null)
              .map((_, i) => (
                <Button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : null}>
                  {i + 1}
                </Button>
              ))}
          </Button>
          <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </Button>
        </ButtonGroup>
      </nav>
    </>
  );
}

export default Pagination;

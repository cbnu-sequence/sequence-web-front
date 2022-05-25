import React from 'react';
import Link from 'next/link';
const Index = () => {
  return (
    <div>
      이 페이지는 없는 페이지입니다. 홈화면으로 돌아가시겠어요?
      <Link href="/">
        <a>홈화면으로 이동하기</a>
      </Link>
    </div>
  );
};

export default Index;

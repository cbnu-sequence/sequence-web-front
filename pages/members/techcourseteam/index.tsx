import Head from 'next/head';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getTechCourseMembers } from '../../../apis/user';
import NoList from '../../../components/NoList';
import { queryKeys } from '../../../react-query/constants';
import React from 'react';
import TechCourseTeam from '../../../components/TechCourseTeam';

const TechcourseTeam = () => {
  const { data, isLoading, isError } = useQuery([queryKeys.techcourseTeam]);

  if (isLoading) return <p>로딩중 입니다.</p>;
  if (isError) return <NoList enTitle={'members'} krTitle={'정보를 가져올 수 없습니다'} />;

  return (
    <>
      <Head>
        <title>시퀀스 | 테크코스팀 소개</title>
      </Head>
      <TechCourseTeam data={data} />
    </>
  );
};

export default TechcourseTeam;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.techcourseTeam], () => getTechCourseMembers());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

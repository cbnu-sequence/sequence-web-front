function roleToKr(role) {
  let krRole = '';
  if (role === 'User') krRole = '부원';
  else if (role === 'Admin') krRole = '운영진';
  else krRole = '일반 회원';
  return krRole;
}

export default roleToKr;

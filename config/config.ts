const KAKAO_KEY="35fabbb5c6fdf6c1f2e57c43d5dce06b";
const REDIRECT_URI="http://localhost:3000/oauth/callback/kakao"

export const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

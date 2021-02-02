const responseMessage = {
  NULL_VALUE: "필요한 값이 없습니다",
  OUT_OF_VALUE: "파라미터 값이 잘못되었습니다",
  NO_AUTHORITY: "권한이 없습니다",

  // 로그인
  LOGIN_SUCCESS: "로그인 성공",
  WRONG_CREDENTIALS: "이메일 혹은 비밀번호가 잘못되었습니다.",
  LOGIN_FAIL: "로그인 실패",
  NO_USER: "존재하지 않는 회원입니다.",
  MISS_MATCH_PW: "비밀번호가 맞지 않습니다.",
  LOGIN_REQUIRED: "로그인이 필요합니다",
  LOGOUT_SUCCESS: "유저 로그아웃 성공",
  LOGGED_IN: "로그인된 상태입니다",

  // 인증
  EMPTY_TOKEN: "토큰 값이 없습니다.",
  EXPIRED_TOKEN: "토큰 값이 만료되었습니다.",
  INVALID_TOKEN: "유효하지 않은 토큰값입니다.",
  AUTH_SUCCESS: "인증에 성공했습니다.",
  ISSUE_SUCCESS: "새로운 토큰이 생성되었습니다.",

  DB_ERROR: "DB 오류",

  // 유저
  CREATE_USER_SUCCESS: "유저 생성 성공",
  ALREADY_USER: "이미 있는 유저입니다",
  CREATE_USER_FAIL: "유저 생성 실패",
  GET_ALL_USERS_SUCCESS: "모든 유저 조회 성공",
  GET_ALL_USERS_FAIL: "모든 유저 조회 실패",
  GET_ONE_USER_SUCCESS: "유저 조회 성공",
  GET_ONE_USER_FAIL: "유저 조회 실패",
  GET_USER_INFO_SUCCESS: "유저 정보 조회 성공",
  UPDATE_USER_INFO_SUCCESS: "유저 정보 수정 성공",
  UPDATE_USER_PASSWORD_SUCCESS: "유저 비밀번호 수정 성공",
  UPDATE_USER_SOCIAL_ISSUES_SUCCESS: "유저 사회 이슈 정보 수정 성공",
  DELETE_USER_SUCCESS: "유저 삭제 성공",
  DELETE_USER_FAIL: "해당 아이디를 가진 유저가 없습니다.",
  SELECT_JOB_AND_KEYWORDS_SUCCESS: "직군과 관심사 추가 성공",
  NO_SUCH_KEYWORD: "해당 관심사가 없습니다",
  NO_SUCH_JOB: "해당 직군이 없습니다",
  ALREADY_ADDED_KEYWORD: "이미 추가된 관심사입니다.",

  // 상품
  GET_ALL_CATEGORIES_SUCCESS: "모든 카테고리 조회 성공",
  GET_ALL_PRODUCTS_SUCCESS: "모든 상품 조회 성공",
  GET_PRODUCT_DETAIL_SUCCESS: "상품 상세정보 조회 성공.",
  GET_BEST_PRODUCTS_SUCCESS: "BEST 상품 조회 성공",
  NO_SUCH_PRODUCT: "해당 상품이 없습니다.",
  GET_PRODUCTS_WITH_GIVEN_SUBCATEGORY_SUCCESS: "해당 서브카테고리에 해당하는 상품들 조회 성공",
  GET_PRODUCTS_WITH_GIVEN_CATEGORY_SUCCESS: "해당 카테고리에 해당하는 상품들 조회 성공",
  NO_SUCH_SUBCATEGORY: "해당하는 서브카테고리가 없습니다.",
  NO_SUCH_CATEGORY: "해당하는 카테고리가 없습니다.",
  GET_BUNDLE_PRODUCTS_SUCCESS: "묶음배송 상품 조회 성공.",
  SEARCH_PRODUCTS_SUCCESS: "상품 검색 성공",

  // 리뷰
  GET_PRODUCT_REVIEWS_SUCCESS: "해당 상품의 리뷰 조회 성공",

  // 관리자
  NOT_ADMIN: "관리자가 아닙니다.",
  SAME_ADMIN_USERNAME_AS_BEFORE: "기존 이름과 동일합니다",
  ALREADY_USERNAME_ADMIN: "해당 이름을 가진 관리자가 존재합니다.",
  CREATE_ADMIN_SUCCESS: "관리자 생성 성공",
  CREATE_ADMIN_FAIL: "관리자 생성 실패",
  LOGIN_ADMIN_SUCCESS: "관리자 로그인 성공",
  LOGIN_ADMIN_FAIL_PASSWORD: "관리자 비밀번호가 잘못되었습니다",
  LOGOUT_ADMIN_SUCCESS: "관리자 로그아웃 성공",
  GET_ALL_ADMINS_SUCCESS: "모든 관리자 조회 성공",
  GET_ALL_ADMINS_FAIL: "모든 관리자 조회 실패",
  GET_ONE_ADMIN_SUCCESS: "관리자 조회 성공",
  GET_ONE_ADMIN_FAIL: "관리자 조회 실패",
  DELETE_ADMIN_SUCCESS: "관리자 삭제 성공",
  UPDATE_ADMIN_USERNAME_SUCCESS: "관리자 이름 변경 성공",
  UPDATE_ADMIN_PASSWORD_SUCCESS: "관리자 비밀번호 변경 성공",
  DELETE_ADMIN_FAIL: "해당 아이디를 가진 관리자가 없습니다.",

  // 사회 이슈
  NO_SUCH_SOCIAL_ISSUE: "해당하는 사회 이슈가 없습니다.",

  /* 서버에러 */
  INTERNAL_SERVER_ERROR: "서버 내부 오류",
};

export default responseMessage;

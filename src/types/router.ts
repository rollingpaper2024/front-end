

interface RouterBase {
    id: number // 페이지 아이디 (반복문용 고유값)
    path: string // 페이지 경로
    element: React.ReactNode // 페이지 엘리먼트
  }

export default interface UserAccessibleRouterElement extends RouterBase {
    withAuth?: boolean // 인증이 필요한 페이지 여부
  }
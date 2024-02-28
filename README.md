# React Router
- react-router의 공식 홈페이지에서 제공하는 tutorial을 따라 진행한 프로젝트
- [React Router tutorial 문서 바로가기](https://reactrouter.com/en/main/start/tutorial)


## Router

### [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router)
- 권장되는 라우터
- 현재 프로젝트에서 사용된 것과 동일함

### [createRoutesFromElements](https://reactrouter.com/en/main/utils/create-routes-from-elements)
- 객체 대신 JSX로 경로를 생성하려는 경우 사용


## Form
- 클라이언트 측 라우팅 및 데이터 변형을 위해 브라우저를 에뮬레이트하는 일반 HTML 양식을 둘러싼 래퍼
- [데이터 라우터](https://reactrouter.com/en/main/routers/picking-a-router)를 사용하는 경우에만 작동
- 렌더링된 useNavigation 후크에 대한 상태 업데이트를 트리거함
- 비동기 작업이 진행 중인 동안 보류 중인 표시기와 낙관적 UI를 구축 가능
- 소스코드 참고 : [root.jsx](https://github.com/bbungbbun/react-router-tutorial/blob/master/src/routes/root.jsx)
- [공식 문서 확인](https://reactrouter.com/en/main/components/form)
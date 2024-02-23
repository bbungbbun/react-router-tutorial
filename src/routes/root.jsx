import { Outlet, Link } from "react-router-dom";

/**
 * Outlet 
 * - children component가 출력되는 위치  
 * */ 

/**
 * Link 
 * - 클라이언트 측 라우팅을 사용
 * - 앱이 서버에서 다른 문서를 요청하지 않고도 URL을 업데이트
 * - 대신 앱은 새 UI를 즉시 렌더링 가능
 * - 브라우저 개발자 도구에서 네트워크 탭을 열어 더 이상 문서를 요청하지 않는지 확인할 수 있음
 * 
 * - Link가 아닌 a 태그를 활용하는 경우
 * - React Router를 사용하는 대신 다음 URL에 대한 전체 문서 요청을 수행
 */

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`contacts/1`}>Your Name</Link>
              </li>
              <li>
              <Link to={`contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }
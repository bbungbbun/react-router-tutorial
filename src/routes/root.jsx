import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { useEffect } from "react";

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

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
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  /**
   * useLoaderData 후크가 업데이트되고 UI가 자동으로 데이터와 동기화 상태를 유지
   */

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]); 

  /**
   * useEffect 후크를 활용하여
   * 뒤로가기 버튼을 클릭했을 때 검색창에 이전에 검색했던 내용이 남는 문제 해결
   * 검색창에 입력한 값을 URL 검색 파라미터와 동기화
   */

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <Form id="search-form" role="search">
               {/**
                * <form> 태그에 서 <Form> 태그로 변경
                * 클라이언트측 라우팅을 할 수 있게 된다 */}
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q" // 검색 시에 파라미터 이름 설정
                defaultValue={q} // 검색 후 새로 고침했을 때 검색창에 이전에 검색했던 내용이 남음
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
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                     {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
        </div>
        <div
          id="detail"
          className={
            navigation.state === "loading" ? "loading" : ""
          }
        >
          <Outlet />
        </div>
      </>
    );
  }
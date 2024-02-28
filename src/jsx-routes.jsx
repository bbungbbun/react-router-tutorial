/**
 * jsx 스타일 라우트를 하고 싶은 경우의 예시
 * 
 * createRoutesFromElements를 사용하여 수행
 * JSX나 객체 사이에는 기능적 차이가 없음 
 * 단순히 스타일에 따른 선호일 뿐임
 * */ 

import {
    createRoutesFromElements, // jsx 스타일 라우트를 원할 때 사용
    createBrowserRouter,
    Route,
  } from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import EditContact, {
  action as editAction,
} from "./routes/edit";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
        loader={rootLoader}
        action={rootAction}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Index />} />
          <Route
            path="contacts/:contactId"
            element={<Contact />}
            loader={contactLoader}
            action={contactAction}
          />
          <Route
            path="contacts/:contactId/edit"
            element={<EditContact />}
            loader={contactLoader}
            action={editAction}
          />
          <Route
            path="contacts/:contactId/destroy"
            action={destroyAction}
          />
        </Route>
      </Route>
    )
  );
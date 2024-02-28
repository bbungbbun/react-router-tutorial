import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  // throw new Error("oh dang!"); // 에러 메시지 표시
  await deleteContact(params.contactId);
  return redirect("/");
}
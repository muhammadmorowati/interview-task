import UserInformation from "components/user-information";
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "interview task" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <UserInformation/>
  </>
}

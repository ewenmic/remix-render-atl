import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireUser } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  //   await requireUser(request);
  return json(null);
}

export default function ReportsRoute() {
  return <div>Look at all these reports! Business!</div>;
}

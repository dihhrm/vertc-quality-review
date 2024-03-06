import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Badge,
} from "@vert-capital/design-system-ui";
import { routes } from "~/common/constants";
Table;
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const project = await fetch("http://localhost:8080/projects/" + params.id);
  if (!project) {
    throw new Error("Project not found", { status: 404 });
  }
  return json({ project });
};

export default function Project() {
  const project = useLoaderData();
  return (
    <div id="project">
      <div className="flex  justify-left items-center mt-10 mx-10">
        <Link to={routes.root}>
          <img
            className="hover:text-primary transition-all ease-in-out"
            src="/resources/images/arrow-left.svg"
          ></img>
        </Link>
        <h1 className="font-bold text-[1.5rem] text-start ml-2">Hiperion</h1>
      </div>
      <div className="bg-white mt-4 p-10">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>Tipo</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Prioridade</TableHead>
              <TableHead>Retornos</TableHead>
              <TableHead>Detalhes</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="p-3">
                <Badge variant="secondary">Subtarefa</Badge>
              </TableCell>
              <TableCell>Danilo Sousa</TableCell>
              <TableCell>danilo@example.com</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>
                <Link to={routes.issue}>Detalhes</Link>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="p-3">
                <Badge variant="destructive">Bug</Badge>
              </TableCell>
              <TableCell>Zahra Ambessa</TableCell>
              <TableCell>zahra@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="p-3">
                <Badge variant="destructive">Bug</Badge>
              </TableCell>
              <TableCell>Jasper Eriksson</TableCell>
              <TableCell>jasper@example.com</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Developer</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

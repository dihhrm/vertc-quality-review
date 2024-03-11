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
  Button,
} from "@vert-capital/design-system-ui";
import { routes } from "~/common/constants";

import ToggleView from "~/components/ToggleView";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Issue } from "types";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const issues = await fetch("http://localhost:8080/issues/");
  if (!issues) {
    throw new Error("Issues not found", { status: 404 });
  }
  return json(await issues.json());
};

export default function Project() {
  const issues = useLoaderData<Issue[]>();

  return (
    <div id="project">
      <div className="flex justify-left items-center mt-10 mx-10">
        <Link to={routes.root}>
          <img
            className="hover:text-primary transition-all ease-in-out"
            src="/resources/images/arrow-left.svg"
          ></img>
        </Link>
        <h1 className="font-bold text-[1.5rem] text-start ml-2">Hiperion</h1>
      </div>
      <div className="bg-white mt-4 p-10">
        <div className="flex justify-end my-4">
          <ToggleView />
        </div>
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
            {issues.map &&
              issues.map((issue: Issue) => (
                <TableRow>
                  <TableCell className="p-3">
                    <Badge
                      variant={
                        issue.issue_type === "Bug" ? "destructive" : "secondary"
                      }
                    >
                      {issue.issue_type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Link
                      className="text-primary font-bold text-nowrap "
                      to={issue.jira_url}
                      target="_blank"
                    >
                      <span className="flex items-center ">
                        {issue.issue_key}
                        <ExternalLinkIcon className="w-4 h-4 ml-2" />
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell>{issue.issue_priority}</TableCell>
                  <TableCell>{issue.total_returns}</TableCell>
                  <TableCell>
                    <p className="">{issue.issue_summary}</p>
                  </TableCell>
                  <TableCell>
                    <Link to={routes.issue}>
                      <Button variant="link">Editar</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

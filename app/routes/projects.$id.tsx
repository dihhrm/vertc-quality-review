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
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Form from "@radix-ui/react-form";
import ToggleView from "~/components/ToggleView";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Issue } from "types";
import { useState } from "react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const issues = await fetch("http://localhost:8080/issues/");
  if (!issues) {
    throw new Error("Issues not found", { status: 404 });
  }
  return json(await issues.json());
};

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function Project() {
  const issues = useLoaderData<Issue[]>();
  const [open, setOpen] = useState(false);

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
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
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
                          issue.issue_type === "Bug"
                            ? "destructive"
                            : "secondary"
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
                      <AlertDialog.Trigger asChild>
                        <Link to={routes.issue}>
                          <Button variant="link">Editar</Button>
                        </Link>
                      </AlertDialog.Trigger>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-bold">
                Classificar issue
              </AlertDialog.Title>

              <div className="flex  items-center">
                <Form.Root className="w-[260px]">
                  <Form.Field className="grid mb-[10px]" name="email">
                    <div className="flex items-baseline justify-between">
                      <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                        Email
                      </Form.Label>
                      <Form.Message
                        className="text-[13px] text-white opacity-[0.8]"
                        match="valueMissing"
                      >
                        Please enter your email
                      </Form.Message>
                      <Form.Message
                        className="text-[13px] text-white opacity-[0.8]"
                        match="typeMismatch"
                      >
                        Please provide a valid email
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                        type="email"
                        required
                      />
                    </Form.Control>
                  </Form.Field>
                  <Form.Field className="grid mb-[10px]" name="question">
                    <div className="flex items-baseline justify-between">
                      <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                        Question
                      </Form.Label>
                      <Form.Message
                        className="text-[13px] text-white opacity-[0.8]"
                        match="valueMissing"
                      >
                        Please enter a question
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <textarea
                        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
                        required
                      />
                    </Form.Control>
                  </Form.Field>
                </Form.Root>
              </div>

              <div className="flex justify-end gap-[25px]">
                <AlertDialog.Cancel asChild>
                  <Button variant="outline">Cancelar</Button>
                </AlertDialog.Cancel>

                <AlertDialog.Action asChild>
                  <Button
                    type="submit"
                    onSubmit={(event) => {
                      wait().then(() => setOpen(false));
                      event.preventDefault();
                    }}
                    className="bg-primary"
                    variant="default"
                  >
                    Salvar
                  </Button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </div>
  );
}

import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Badge, Card, Separator } from "@vert-capital/design-system-ui";
import { Project } from "types";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const res = await fetch("http://localhost:8080/projects");
  return json(await res.json());
}

export default function Index() {
  const projects = useLoaderData<Project[]>();

  return (
    <>
      <div className="flex w-full justify-left">
        <h1 className="font-bold text-[1.5rem] mt-10 text-start mx-10">
          Projetos
        </h1>
      </div>
      <div className="flex w-full justify-left">
        <div className="grid w-full p-10 grid-cols-3 gap-10 mb-10">
          {projects.map((project: Project) => (
            <Link to={`/projects/${project.id}`}>
              <Card
                className="cursor-pointer backdrop-blur-sm hover:border-primary transition-all duration-300 ease-in-out"
                key={project.id}
              >
                <h4 className="text-sm font-bold">{project.project_name}</h4>

                <Separator className="my-3" />

                <div>
                  <span className="text-sm ">Issues abertas:</span>
                  <Badge className="text-xs mx-2">26</Badge>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

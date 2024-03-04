import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
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
    <div>
      <ul>
        {projects.map((project: Project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.project_name}</Link>;
          </li>
        ))}
      </ul>
    </div>
  );
}

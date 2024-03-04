import { LoaderFunctionArgs, json } from "@remix-run/node";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const project = await fetch("http://localhost:8080/projects/" + params.id);
  if (!project) {
    throw new Error("Project not found", { status: 404 });
  }
  return json({ project });
};

export default function Project() {
  return (
    <div id="project">
      <h1>Project</h1>
    </div>
  );
}

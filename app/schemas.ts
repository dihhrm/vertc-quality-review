import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  email: z.string().min(1).email(),
});

export default schema;

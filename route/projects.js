import projects from "../db/projects.js";

export default async function getProjectById(req, res) {
  const id = req.params.id;
  const project = await projects.byId(id);

  if (!project) {
    res.redirect("/404");
  }

  res.render("project", { ...project });
}

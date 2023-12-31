const userController = require("../controllers/users");
const auth = require("../middleware/auth");
const projectController = require("../controllers/project");
const router = require("express").Router();

router.post("/signin", userController.signIn);
router.get("/createProject", projectController.createProjectView);
// router.post("/addProject", auth, projectController.createProject);
router.post("/addProject", projectController.createProject);
router.put("/updateProject/:id", auth, projectController.updateProject);
router.delete("/deleteProject/:id", auth, projectController.deleteProject);

module.exports = router;

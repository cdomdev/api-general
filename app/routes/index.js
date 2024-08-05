import express from "express";
import { promises as fs } from "fs";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();
const routePath = path.join(__dirname, "app", "routes");

const removeExtension = (fileName) => fileName.split(".").shift();

const loadRoutes = async () => {
  try {
    const files = await fs.readdir(routePath);
    for (const file of files) {
      if (file !== "index.js") {
        const fileName = removeExtension(file);
        const modulePath = path.join(routePath, `${fileName}.js`);
        const module = await import(`file://${modulePath}`);
        router.use(`/${fileName}`, module.default);
      }
    }
  } catch (err) {
    console.error("Error loading routes:", err);
  }
};

await loadRoutes();

router.get("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

export default router;

import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

const USERS_FILE = path.join(__dirname, "..", "data", "users.json");

// Helper: read users from JSON file
async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Helper: write users to JSON file
async function writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const users = await readUsers();

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User with this email already exists" });
    }

    // Add new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password, // In production, hash this!
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    await writeUsers(users);

    res.status(201).json({ success: true, message: "Registration successful!", user: { id: newUser.id, name, email } });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const users = await readUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.json({ success: true, message: "Login successful!", user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// GET /api/auth/users  (list all users - for demo)
router.get("/users", async (req, res) => {
  try {
    const users = await readUsers();
    const safeUsers = users.map(({ password, ...rest }) => rest);
    res.json({ success: true, users: safeUsers });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;

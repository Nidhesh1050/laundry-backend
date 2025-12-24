import connectDB from "../config/connectDB.js";
import bcrypt from "bcryptjs";

class UserModel {

    static async create(data) {
        const db = await connectDB();

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const [result] = await db.execute(
            `INSERT INTO users 
            (name, email, phone, password, role, status, created_at)
            VALUES (?, ?, ?, ?, ?, ?, NOW())`,
            [
                data.name,
                data.email,
                data.phone || null,
                hashedPassword,
                data.role || "user",
                data.status || "active"
            ]
        );

        return result.insertId;
    }

    static async searchByEmail(email) {
        const db = await connectDB();

        const [rows] = await db.execute(
            "SELECT * FROM users WHERE email = ? LIMIT 1",
            [email]
        );

        return rows.length > 0 ? rows[0] : null;
    }

    static async findByEmail(email) {
        const db = await connectDB();

        const [rows] = await db.execute(
            "SELECT * FROM users WHERE email = ? LIMIT 1",
            [email]
        );

        return rows.length > 0 ? rows[0] : null;
    }
    
}

export default UserModel;

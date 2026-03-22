import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/api/customers", (req, res) => {
    const sql = `SELECT * FROM Customer ORDER BY customer_id ASC`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("GET Error:", err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json({
            message: "ดึงข้อมูลสำเร็จ",
            count: results.length,
            data: results,
        });
    });
});

export default router;
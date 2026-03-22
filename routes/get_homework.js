import express from "express";
import db from "../db.js";

const router = express.Router();


router.get("/api/customers/:phone", (req, res) => {
    const phone = req.params.phone;


    const sql = `SELECT * FROM Customer WHERE phone = ?`;

    db.query(sql, [phone], (err, results) => {
        if (err) {
            console.error("Database Error:", err.message);
            return res.status(500).json({ status: "error", message: err.message });
        }

        if (results.length > 0) {
            res.json({
                status: "success",
                message: "ดึงข้อมูลสำเร็จ",
                data: results[0] 
            });
        } else {
            res.status(404).json({
                status: "not_found",
                message: "ไม่พบข้อมูล กรุณาตรวจสอบเบอร์"
            });
        }
    });
});

export default router;
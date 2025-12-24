import connectDB from "../config/connectDB.js";

class adminModel {

   
    static async findByEmail(email) {
        const db = await connectDB();

        const [rows] = await db.execute(
            `SELECT * FROM admins WHERE email = ?`,
            [email]
        );

        return rows[0];
    }

    static async fetchGeneral() {
        const db = await connectDB();

        const [dataRegisterRows] = await db.execute(
            `SELECT COUNT(*) AS total 
             FROM tbl_register 
             WHERE registration_no != ? AND status = ?`,
            [0, 1]
        );

        const [applicationsSubmittedRows] = await db.execute(
            `SELECT COUNT(*) AS total 
             FROM general_information 
             WHERE confirm_status = ? AND fileStatus = ?`,
            [1, 1]
        );

        const [applicationsPendingRows] = await db.execute(
            `SELECT COUNT(*) AS total 
             FROM general_information 
             WHERE confirm_status = ? 
               AND fileStatus = ? 
               AND verification_status = ?`,
            [1, 1, 0]
        );

        const [applicationsVerifiedRows] = await db.execute(
            `SELECT COUNT(*) AS total 
             FROM general_information 
             WHERE confirm_status = ? 
               AND fileStatus = ? 
               AND verification_status = ?`,
            [1, 1, 1]
        );

        return {
            data_register: dataRegisterRows[0].total,
            applicationsSubmitted: applicationsSubmittedRows[0].total,
            applicationspending: applicationsPendingRows[0].total,
            applicationsverified: applicationsVerifiedRows[0].total
        };
    }


}

export default adminModel;

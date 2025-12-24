import mysql from 'mysql2/promise';

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'laundry'
        });

        console.log('Connected to MySQL Database (laundry)');
        return connection;

    } catch (error) {
        console.error('Error connecting to MySQL:', error.message);
        process.exit(1);
    }
};

export default connectDB;

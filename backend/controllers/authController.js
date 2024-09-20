import User from '../models/User.js';

/** get all users */
export async function getResult(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({ error });
    }
}

/** post a new user result */
export async function storeResult(req, res) {
    try {
        const { username, email, department, result, attempts, points, achieved } = req.body;
        if (!username || !result) throw new Error('Data Not Provided...!');

        const user = await User.create({
            username,
            email,
            department,
            result,
            attempts,
            points,
            achieved
        });

        res.json({ msg: "Result Saved Successfully...!", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** delete all users */
export async function dropResult(req, res) {
    try {
        await User.deleteMany();
        res.json({ msg: "Users Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

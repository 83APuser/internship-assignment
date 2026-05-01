exports.getTasks = async (req, res) => {
    res.json({ message: "Fetched all tasks for " + req.user.role });
};

exports.createTask = async (req, res) => {

    res.json({ message: "Task created successfully" });
};
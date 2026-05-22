const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium"
    },
    dueDate: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);
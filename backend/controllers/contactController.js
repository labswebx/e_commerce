const ContactMessage = require("../models/contactMessageModel");
const ExcelJS = require("exceljs");

// User: Send Contact Message
exports.sendMessage = async (req, res) => {
  try {
    const { name, email, contactNumber, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled.",
      });
    }

    const newMessage = await ContactMessage.create({
      name,
      email,
      contactNumber,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: newMessage,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

// Admin: Get All Messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, messages });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching messages",
      error: err.message,
    });
  }
};

// Admin: Export as Excel
exports.exportMessagesToExcel = async (req, res) => {
  try {
    const messages = await ContactMessage.find();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contact Messages");

    worksheet.columns = [
      { header: "Name", key: "name" },
      { header: "Email", key: "email" },
      { header: "Phone", key: "contactNumber" },
      { header: "Message", key: "message" },
      { header: "Date", key: "createdAt" },
    ];

    messages.forEach((msg) => worksheet.addRow(msg.toObject()));

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=contact_messages.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Export failed", error: err.message });
  }
};

const fs = require("fs");

const filePath = process.argv[2];

if (!filePath) {
    console.error("Usage: node format-json.js <path-to-json-file>");
    process.exit(1);
}

try {
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw);
    const formatted = JSON.stringify(parsed, null, 2);
    fs.writeFileSync(filePath, formatted, "utf8");
    console.log(`Formatted ${filePath}`);
} catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
}
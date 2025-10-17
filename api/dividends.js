const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const dataPath = path.join(process.cwd(), 'data.json');
    const fileContent = fs.readFileSync(dataPath, 'utf8');
    const jsonData = JSON.parse(fileContent);
    
    res.status(200).json({
      success: true,
      data: jsonData.dividends,
      lastUpdate: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

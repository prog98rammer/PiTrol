var os = require("os");

function systemUptime(req, res, next)
{
  var uptime = os.uptime();
  var data = {
    hours: parseInt(uptime/3600),
    minutes: parseInt((uptime/60) % 60),
    seconds: uptime % 60
  };
  res.status(200).json(data);
};

module.exports = [
  {
    name: "SystemUptime",
    methods: ["GET"],
    ref: systemUptime
  },
  // More features can be added to the list
];

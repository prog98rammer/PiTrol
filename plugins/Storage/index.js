function storageInformation(req, res, next)
{
  res.json({message: "OK"});
};

module.exports = [
  {
    name: "StorageInformation",
    methods: ["GET"],
    ref: storageInformation
  },
  // More features can be added to the list
];

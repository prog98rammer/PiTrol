module.exports = [
  {
    name: "CPUDetails",
    methods: ["get"],
    ref: require("./cpu").cpuDetails,
    requiredParams: ["name"]
  },
];

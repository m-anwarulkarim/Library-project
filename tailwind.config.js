module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("lightswind/plugin"), // এখানে lightswind প্লাগইন যোগ করা হলো
  ],
};

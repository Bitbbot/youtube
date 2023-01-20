const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@assets": resolvePath("./src/assets"),
      "@utils": resolvePath("./src/utils"),
      "@hooks": resolvePath("./src/hooks"),
      "@pages": resolvePath("./src/pages"),
      "@redux-thunk": resolvePath("./src/redux-thunk"),
      "@store": resolvePath("./src/store"),
    },
  },
};

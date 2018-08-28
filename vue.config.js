module.exports = {
  pages: {
    public: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Index Page"
    },
    swagger: {
      entry: "src/swagger.js",
      template: "public/swagger.html",
      filename: "swagger.html",
      title: "Swagger"
    }
  }
}

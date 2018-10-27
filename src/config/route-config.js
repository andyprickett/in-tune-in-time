module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const noteRoutes = require("../routes/notes");
    const keyRoutes = require("../routes/keys");
    const tempoRoutes = require("../routes/tempos");
    
    app.use(staticRoutes);
    app.use(noteRoutes);
    app.use(keyRoutes);
    app.use(tempoRoutes);
  }
}
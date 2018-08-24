module.exports = {
  addUser: async (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { husername, hpassword } = req.body;
    console.log(req.body);
    let foundUser = await dbInstance.find_user([husername]);
    if (foundUser[0]) {
      req.session.user = foundUser[0];
      res.status(200).send(req.session.user);
    } else {
      let createdUser = await dbInstance.add_user([husername, hpassword]);
      req.session.user = createdUser[0];
      res.status(200).send(req.session.user);
    }
  }
};

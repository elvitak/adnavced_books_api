const resourceController = {
  index(request, response, next) {
    debugger;
    response.send({
      resources: [
        {
          message: "Your API is working",
          nextStep: "Go on and create some magic!",
        },
      ],
    });
  },
};

module.exports = resourceController;

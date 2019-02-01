import NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  init() {
    console.log(`[module-control/node_helper] init`);
  },
  start() {
    console.log(`[${this.name}/node_helper] start`);
  },
  sendSocketNotification(notification, payload) {
    console.log(`[${this.name}/node_helper] sendSocketNotification: ${notification}`, payload);
  },
  socketNotificationReceived(notification, payload) {
    console.log(`[${this.name}/node_helper] socketNotificationReceived: ${notification}`, payload);
  },
  stop() {
    console.log(`[${this.name}/node_helper] stop`);
  }
});

Meteor.methods({
    getServerTime: function () {
        return (new Date).toTimeString();
    },
    stopCollection: function () {
        return null;
    },
    startCollection: function () {
        return null;
    }
});
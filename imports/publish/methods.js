Meteor.methods({
    getServerTime: function () {
        return (new Date).toTimeString();
    }
});
lobby_module.service('lobby', function() {
    var me = this;

    this.variable = "This is public";

    this.getPrivate = function() {
        return thisIsPrivate;
    };
});
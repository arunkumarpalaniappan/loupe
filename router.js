var Router = require('ampersand-router');


module.exports = Router.extend({
    routes: {
        '?code=:code': 'code',
        '': 'default'
    },

    code: function (code) {
        app.store.code.decodeUriSource(code);
    },
    default: function (code) {
        this.redirectTo("?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkknbSBhZnRlciA1IHNlY3MhIik7Cn0sIDUwMDApOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkknbSBhZnRlciBhbm90aGVyIDUgc2VjcyEiKTsKfSwgNTAwMCk7Cg%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D");
    }
});

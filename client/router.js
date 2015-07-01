Router.configure({
    layoutTemplate:'layout'
});

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('builder', {path:'/builder'});
    this.route('about', {path:'/about'});
    this.route('performanceTypes', {path:'/performanceTypes'});
    this.route('person', {path:'/person'});
    this.route('people', {path:'/people'});
    this.route('venue', {path:'/venue'});
    this.route('groupForm', {path:'/groups/form'});
    this.route('groupList', {path:'/groups/list'});
    this.route('showForm', {path:'/shows/form'});
    this.route('showList', {path:'/shows/list'});
});
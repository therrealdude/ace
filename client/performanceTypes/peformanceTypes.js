PerformanceTypes = new Mongo.Collection('PerformanceTypes');

PerformanceTypes.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Name',
        max:200
    },
    description: {
        type: String,
        label: 'Description',
        max:1000
    }
}));


Template.performanceTypes.helpers({
    pfs: function(){
        return PerformanceTypes.find().fetch();
    }
});

//Template.performanceTypes.events({
//    "click #addPerformanceType" : function(){
//        PerformanceTypes.insert({name: $('#perfname').val(), description: $('#perfdesc').val()});
//    }
//});


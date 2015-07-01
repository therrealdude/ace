People = new Mongo.Collection('people');

Schemas = {};
People.attachSchema( 
    new SimpleSchema({
        name: {
            type: String,
            label: 'Name',
            max: 200
       },
        performanceType: {
            type: String,
            label: 'Performance Type',
            autoform: {
                options: function(){
                    return PerformanceTypes.find().map( function(c) {
                        return {label: c.name, value: c._id};
                    });
                }
            }
        }
    }));


               

Template.people.helpers({
    peoplelist: function(){
        var ret = [];
        People.find().map( function(p) {
            var pType = PerformanceTypes.findOne({_id: p.performanceType}).name;
            ret.push({name: p.name, performanceType: pType});
        });
        return ret;
    }
});
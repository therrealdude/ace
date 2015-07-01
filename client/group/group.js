groups = new Mongo.Collection('groups');

groups.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Group Name'
    },
    description:{
        type: String,
        label: 'Group Description'
    },
    groupPeople: {
        type: [String],
        label: 'Group Members',
        autoform: {
            noselect: true,
            options: function(){
                return People.find().map( function(p){
                    return{label: p.name, value:p._id}
                });
            }
        }
    },
    groupPerformanceTypes: {
        type: [String],
        label: 'Performance Types',
        autoform: {
            noselect: true,
            options: function(){
                return PerformanceTypes.find().map( function (pt){
                    return{label: pt.name, value: pt._id}
                });
            }
        }
    }
}));
                    
Template.groupList.helpers({
    groupsall: function(){
        return groups.find().map( function(g) {
            groupPeople = [];
            if(g.groupPeople != undefined){
                g.groupPeople.forEach( function(gp) {
                    groupPeople.push({name: People.findOne({_id: gp}).name,
                                     originalID: gp});
                });
            }
            groupPerformanceTypes = [];
            if(g.groupPerformanceTypes != undefined){
                g.groupPerformanceTypes.forEach( function (gpt) {
                    groupPerformanceTypes.push({name: PerformanceTypes.findOne({_id: gpt}).name,
                                               originalID: gpt});
                });
            }
            return {name: g.name, 
                    description: g.description, 
                    groupPeople: groupPeople, 
                    groupPerformanceTypes: groupPerformanceTypes};
        });
    }
//    getGroup: function(){
//        return grouplist.map( function(p){
//            
//            p.groupPeople.map(function(person){
//                
//            });
//        });
//    }
});
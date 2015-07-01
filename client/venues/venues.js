Venues = new Mongo.Collection('venues');

Template.venue.helpers({
    venueslist: function(){
        return Venues.find().fetch();
    }
});

Venues.attachSchema(new SimpleSchema({
    name:{
        type:String,
        label: 'Name'
    },
    address1:{
        type:String,
        label: 'Adress 1'
    },
    address2:{
        type: String,
        label: 'Adress 2',
        optional: true
    },
    city:{
        type: String,
        label: 'City'
    },
    state:{
        type: String,
        label: 'State'
    },
    zip:{
        type: String,
        label: 'Zip Code'
    }
}));


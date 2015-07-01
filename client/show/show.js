shows = new Mongo.Collection('shows');

shows.attachSchema( new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    description: {
        type: String,
        label: 'Description'
    },
    venue: {
        type: String,
        label: 'Venue',
        autoform: {
            options: function(){
                return Venues.find().map( function(v){
                    return {label: v.name, value: v._id};
                });
            }
        }
    },
    showDates: {
        type: [Date],
        label: 'Show Dates',
        autoform: {
            afFieldInput: {
                type: "datetime-local"
            }
        }
    }
}));

Template.showList.helpers({
    showlist: function() {
        return shows.find().map( function(s) {
            var showVenue = Venues.findOne({_id: s.venue});
            var showDatesObjects = s.showDates.map( function(sd) { return {date: sd}; });
            return {title: s.title, description: s.description, venue: showVenue, showDates: showDatesObjects };
        });
    }
});
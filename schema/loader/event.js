const DataLoader = require('dataloader');

const eventLoader = (models) => {
    const eventById = (id) => models.Event.findById(
        parseInt(id, 10), 
        {
            include: [{
                model: models.User,
                as: "attendees",
                through: {
                    attributes: []
                }
            }]
        }
    );

    return new DataLoader(
        (ids) => Promise.all(
            ids.map(eventById)
        )
    );
}

module.exports = eventLoader;
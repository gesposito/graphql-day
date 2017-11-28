const DataLoader = require('dataloader');

const { github } = require('../../services');

const githubLoader = () => {
    return new DataLoader(
        (ids) => Promise.all(
            ids.map(github.getInfoBy)
        )
    );
}

module.exports = githubLoader;
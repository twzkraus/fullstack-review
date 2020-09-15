const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let repoSchema = new mongoose.Schema({
  id: Number,
  name: String,
  owner_name: String,
  html_url: String,
  created_at: Date,
  watchers_count: Number,
  forks_count: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (records) => {
  // records could be one or many records
  records.forEach(rec => {
    // check in repo for records with this id
    Repo.find({id: rec.id}, (err, sameIdElements) => {
      // could be a pain point: will 'empty' return an error, or an empty array?
      if (err) return console.error(err);
      // if results array is empty, save this one
      if (!sameIdElements.length) {
        let thisInstance = new Repo({
          id: rec.id,
          name: rec.name,
          owner_name: rec.owner.login,
          // change not yet implemented: switch url to html_url
          html_url: rec.html_url,
          created_at: rec.created_at,
          watchers_count: rec.watchers_count,
          forks_count: rec.forks_count,
        });
        thisInstance.save((err, saved) => {
          if (err) return console.error(err);
          console.log(`Repo with id #${rec.id} saved to Mongo DB`);
        });
      } else {
        console.log(`Repo id #${rec.id} not saved to Mongo DB--a record with this id already exists`);
      }
    });
  });
};

let retrieve = (numRecords) => {
  return Repo.find()
    .sort({forks_count: -1})
    .limit(numRecords)
    .exec((err, records) => {
      return records;
    });
};

module.exports.save = save;
module.exports.retrieve = retrieve;

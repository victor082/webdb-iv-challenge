// const knex = require('knex')

// const knexConfig = {
//     client: "sqlite3",
//     connection: {
//         filename: './data/dev.sqlite3.db3',
//     },
//     useNullAsDefault: true,
// }
// const router = require('express').Router();
// const Dishes = require('./dishes-model.js');

// router.get('/', (req, res) => {
//     Dishes.find()
//     .then(dishes => {
//         res.status(200).json(dishes);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({ error: 'failed to retrieve dishes data' })
//     })
// })

// router.get('/:id', (req, res) => {
//     Dishes.findById(req.params.id)
//     .then(dishes => {
//         if (dish) {
//             res.status(200).json(dish)
//         } else {
//             res.status(404).json({ message: "Dish not found" })
//         }
//     })
//     .catch(error => {
//         res.status(500).json(error);
//     })
// })

// router.post('/', (req, res) => {
//     return db('dishes').add(req.body, 'id')
//     .then(ids => {
//         res.status(201).json(ids)
//     })
//     .catch(error => {
//         res.status(500).json(error)
//     })
// })

// router.put('/:id', (req, res) => {
//     const changes = req.body;
//     Zoos.find()
//       .where({ id: req.params.id })
//       .update(changes)
//       .then(count => {
//         if (count > 0) {
//           res.status(200).json({ message: `${count} records updated` });
//         } else {
//           res.status(404).json({ message: 'Role not found' });
//         }
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });

//   router.delete('/:id', (req, res) => {
//     Zoos.find()
//       .where({ id: req.params.id })
//       .del()
//       .then(count => {
//         if (count > 0) {
//           const unit = count > 1 ? 'records' : 'record';
//           res.status(200).json({ message: `${count} ${unit} deleted` });
//         } else {
//           res.status(404).json({ message: 'Animal not found' });
//         }
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });
// module.exports = router;
import pool from '../../../lib/db';

export default function handler(req, res) {
  if (req.method === 'GET') {
    pool
      .query('SELECT * FROM candidates WHERE id = $1', [req.query.id])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(`candidate GET by ID failed`);
        res.status(500);
        res.send(error);
      });
  } else if (req.method === 'DELETE') {
    pool
      .query('DELETE FROM candidates WHERE id = $1', [req.query.id])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(`candidate DELETE by ID failed`);
        res.status(500);
        res.send(error);
      });
  } else if (req.method === 'PATCH') {
    pool
      .query('UPDATE candidates SET first_name=$1, last_name=$2, email=$3, cohort=$4 WHERE id=$5', [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.cohort,
        req.query.id
      ])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(`candidate DELETE by ID failed`);
        res.status(500);
        res.send(error);
      });
  }
}

// CREATE TABLE candidates (
//   id SERIAL PRIMARY KEY,
//   first_name TEXT NOT NULL,
//   last_name TEXT NOT NULL,
//   email TEXT NOT NULL,
//   cohort TEXT NOT NULL
// );

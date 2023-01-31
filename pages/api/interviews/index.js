import pool from '../../../lib/db';

export default function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    let {
      interviewers_id,
      candidates_id,
      pass,
      notes_1,
      notes_2,
      notes_3,
      problem_1_rating,
      problem_2_rating,
      problem_3_rating,
      attempt,
      date,
      code,
      complete
    } = req.body;

    return pool
      .query(
        'INSERT INTO interviews( interviewers_id, candidates_id, pass , notes_1 , notes_2 , notes_3 , problem_1_rating , problem_2_rating , problem_3_rating , attempt, date, code, complete) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 ) RETURNING *;',
        [
          interviewers_id,
          candidates_id,
          pass,
          notes_1,
          notes_2,
          notes_3,
          problem_1_rating,
          problem_2_rating,
          problem_3_rating,
          attempt,
          date,
          code,
          complete
        ]
      )
      .then((data) => {
        res.send(data.rows);
      })
      .catch(console.log);
  } else if (method === 'GET') {
    pool
      .query(
        'SELECT * FROM interviews ORDER BY date DESC' //,
      )
      .then((data) => {
        res.send(data.rows);
      })
      .catch((error) => {
        console.log('== interviews GET failure ==');
        console.log(error);
        res.end();
      });
  } else if (method === 'PATCH') {
    let { complete, code, id, pass } = req.body;
    console.log('request body', req.body);
    if (complete !== undefined) {
      console.log('patch requested');
      return pool
        .query(`UPDATE interviews SET complete = $1 WHERE id = $2`, [complete, id])
        .then((data) => {
          res.send(data);
        })
        .catch(console.log());
    }
    if (pass !== undefined) {
      let { notes_1, notes_2, notes_3, problem_1_rating, problem_2_rating, attempt, pass, date, complete, code, id } =
        req.body;

      return pool
        .query(
          `UPDATE interviews SET 
      notes_1 = $1, 
      notes_2 =$2,
      notes_3 = $3,
      problem_1_rating = $4,
      problem_2_rating = $5,
      attempt = $6,
      pass = $7,
      date = $8,
      complete = $9,
      code = $10

      WHERE id = $11 `,
          [notes_1, notes_2, notes_3, problem_1_rating, problem_2_rating, attempt, pass, date, complete, code, id]
        )
        .then(() => {
          console.log('updated everything');
          res.send('updated everything');
        })
        .catch(console.log);
    } else if (code) {
      // console.log('id', id)
      return pool
        .query(`UPDATE interviews SET code = $1 WHERE id = $2`, [code, id])
        .then((data) => {
          res.send(data);
        })
        .catch(console.log);
    }
  }
}

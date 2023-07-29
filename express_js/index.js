var express = require('express');
var app = express();
var pool = require('./queries.js');

var things = require('./things.js');

app.use('/things', things)


// Soal 2 : Buatlah query untuk menampilkan data pada database sebagai berikut.
// 1. Menampilkan data seluruh list film
app.get('/film', (req, res) => {
    pool.query('SELECT * FROM film;', (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
    });
});

// 2. Menampilkan data film tertentu berdasarkan id
app.get('/film/:id', (req, res) => {
    const filmId = req.params.id;
    pool.query('SELECT * FROM film WHERE film_id = $1;', [filmId], (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result.rows);
    });
});


// 3. Menampilkan data list category
app.get('/categories', (req, res) => {
    pool.query(`select *
                from category;`, (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result.rows);
    });
});

// 4. Menampilkan data list film berdasarkan category
app.get('/film/categories/:category_id', (req, res) => {
    const categoryId = req.params.category_id;
    pool.query(
        `select  f.*
        from film f
        inner join  film_category fc on f.film_id = fc.film_id
        inner join  category c on c.category_id = fc.category_id
        where fc.category_id =$1;
       `, [categoryId], (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result.rows);
    });
});

pool.connect((err, res) => {
    if (err) {
        console.error('Error connecting to the database');
    } else {
        console.log('Connected to the database');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
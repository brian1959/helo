INSERT INTO husers
    (husername, hpassword)
VALUES
    ($1, $2)
returning *
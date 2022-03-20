const express  =require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM Usuarios',(err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
});

routes.post('/',(req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO Usuarios set ?',[req.body],(err, rows)=>{
            if(err) return res.send(err)

            res.send('user inserted!')
        })
    })
});

routes.delete('/:id',(req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM Usuarios WHERE id = ?',[req.params.id],(err, rows)=>{
            if(err) return res.send(err)

            res.send('user excluded!')
        })
    })
});

routes.put('/:id',(req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE Usuarios set ? WHERE id = ?',[req.body ,req.params.id],(err, rows)=>{
            if(err) return res.send(err)

            res.send('user updated!')
        })
    })
});

module.exports = routes
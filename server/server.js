const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Zain-123",
  database: "fms",
});

app.post("/login", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  db.query(
    "select * from accounts where email = ? and password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/admin/ManageTeachers/AddTeacher", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const id = req.body.id;
  const password = req.body.password;
  const phone = req.body.phone;
  const salary = req.body.salary;
  const description = req.body.description;

  db.query(
    "insert into accounts (name, id, email, password, access_type) VALUES (?, ?, ?, ?, ?)",
    [name, id, email, password, 1],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );

  db.query(
    "insert into teachers VALUES (?, ?, ?)",
    [id, name, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );

  db.query(
    "insert into salaries VALUES (?, ?, ?)",
    [id, name, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/admin/ManageStudents/AddStudent", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const id = req.body.id;
  const password = req.body.password;
  const phone = req.body.phone;

  db.query(
    "insert into accounts (name, id, email, password, access_type) VALUES (?, ?, ?, ?, ?)",
    [name, id, email, password, 2],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/teacher/ComplaintOrRequest", (req, res) => {
  const helpType = req.body.helpType;
  const subject = req.body.subject;
  const description = req.body.description;

  db.query(
    "insert into facultycomplaintsandrequests (InstructorId, Type, subject, description) VALUES (?, ?, ?, ?)",
    ["321", helpType, subject, description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/admin/ManageTeachers", (req, res) => {
  db.query("select * from teachers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(4000, () => {
  console.log("Listening on port...", 4000);
});

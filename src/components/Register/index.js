import { useState } from "react";

function Register({ setStudents, students }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleStudent() {
    const student = {
      name,
      email,
    };

    console.log(students);
    console.log(student);
    //{name:"Filipe", email:"filipe@mail.com"}
    //{name:"Amanda", email:"amanda@mail.com"}
    setStudents([...students, student]);
  }

  return (
    <>
      <div>
        <input
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      {name}
      <div>
        <input
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      {email}
      <div>
        <button onClick={handleStudent}>Add</button>
      </div>
    </>
  );
}

export default Register;

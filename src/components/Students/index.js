function Students({ students }) {
  return (
    <>
      <h3>Estudantes</h3>
      {students.map(({ name, email }, index) => (
        <div key={index}>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>--------------</div>
        </div>
      ))}
    </>
  );
}

export default Students;

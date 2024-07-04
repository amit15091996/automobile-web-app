const MainPage = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      {/* Display all required fields here */}
      {/* Example fields */}
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" />
      </div>
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
};

export default MainPage;

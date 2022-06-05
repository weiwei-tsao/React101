export const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      <p>Hello, {user?.name}</p>
    </section>
  );
};

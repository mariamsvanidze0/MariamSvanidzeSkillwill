import { useCustomers } from './hooks/useCustomers';
import { useUser } from './hooks/useUser';
import './App.css';

function App() {
  const { data: customers, isLoading: loadingCustomers } = useCustomers();
  const { data: user, isLoading: loadingUser } = useUser(1); // Example user with ID 1

  if (loadingCustomers || loadingUser) return <div>Loading...</div>;

  return (
    <div className="app">
      <h1>Customers</h1>
      <ul>
        {customers?.map(customer => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
      <h2>Selected User</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;

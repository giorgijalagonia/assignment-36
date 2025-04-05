import { useUsers } from './hooks/useUsers';
import { useUser } from './hooks/useUser';
import { useState } from 'react';

function App() {
  const { data: users, isLoading, error } = useUsers();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const {
    data: selectedUser,
    isLoading: userLoading,
  } = useUser(selectedId ?? 0);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>User List</h1>
      {users?.map((user) => (
        <div
          key={user.id}
          onClick={() => setSelectedId(user.id)}
          style={{
            cursor: 'pointer',
            padding: '0.5rem',
            border: '1px solid #ccc',
            marginBottom: '0.5rem',
          }}
        >
          {user.name}
        </div>
      ))}

      {selectedId && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Selected User Details</h2>
          {userLoading ? (
            <p>Loading user...</p>
          ) : (
            <pre>{JSON.stringify(selectedUser, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

interface UserProfileProps {
  userId: number;
  name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId, name }) => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    console.log('Fetching data for user:', userId);
    setData(`User data for ${name}`);
  }, [userId, name]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {userId}</p>
      <p>Name: {name}</p>
      {data && <p>Data: {data}</p>}
      <img
        src={`https://example.com/avatar/${userId}.jpg`}
        alt=""
      />
      <button onClick={() => console.log('Button clicked')}>
        Click Me
      </button>
    </div>
  );
};

export default UserProfile;

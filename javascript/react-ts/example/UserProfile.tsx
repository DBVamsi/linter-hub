import React, { useState, useEffect } from 'react';

interface UserProfileProps {
  userId: number;
  name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId, name }) => {
  const [data, setData] = useState<string | null>(null);
  const [unusedSetter, setUnusedSetter] = useState<boolean>(false); // Intentionally unused setter

  useEffect(() => {
    // Simulate data fetching
    console.log("Fetching data for user:", userId);
    setData(`User data for ${name}`);
    // Missing 'name' in dependency array
  }, [userId]); // Intentionally missing 'name'

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {userId}</p>
      <p>Name: {name}</p>
      {data && <p>Data: {data}</p>}
      {/* Intentionally missing alt attribute */}
      <img src={`https://example.com/avatar/${userId}.jpg`} />
      <button onClick={() => console.log("Button clicked")}>Click Me</button> {/* Mixed quotes and indentation for Prettier */}
    </div>
  );
};

export default UserProfile;

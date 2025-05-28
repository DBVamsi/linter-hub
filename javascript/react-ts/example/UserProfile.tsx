import React, { useState, useEffect } from 'react';

interface UserProfileProps {
  userId: number;
  name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId, name }) => {
  const [data, setData] = useState<string | null>(null);
  // Removed unused useState: const [unusedSetter, setUnusedSetter] = useState<boolean>(false);

  useEffect(() => {
    // Simulate data fetching
    console.log('Fetching data for user:', userId); // Changed to single quotes
    setData(`User data for ${name}`);
  }, [userId, name]); // Added 'name' to dependency array

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {userId}</p>
      <p>Name: {name}</p>
      {data && <p>Data: {data}</p>}
      <img src={`https://example.com/avatar/${userId}.jpg`} alt="" /> {/* Added alt attribute */}
      {/* Changed to single quotes and Prettier will handle formatting */}
      <button onClick={() => console.log('Button clicked')}>Click Me</button>
    </div>
  );
};

export default UserProfile;

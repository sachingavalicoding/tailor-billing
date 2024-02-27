import React, { useState } from 'react';
import { AppwriteProvider, useAppwrite } from '../context/AppwriteProvider';
import UserPreview from './UserPreview';
import { Link } from 'react-router-dom';
const UserList = () => {
  const { usersData } = useAppwrite();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mx-auto mt-28 p-4">
      <h2 className="text-2xl font-semibold mb-4">Customers List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border mb-4 w-full"
      />

      {/* Display User Cards */}
      <div className=" mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <Link
            key={user.$id}
            to={`/user/${user.$id}`}
            className="bg-white p-4 rounded shadow-md cursor-pointer transition duration-300 hover:shadow-lg"
          >
            <div>
              <strong className="text-lg font-medium">{user.name}</strong>
            </div>
            <div className="text-gray-600">{user.phoneno}</div>
          </Link>
        ))}
      </div>

      {/* Display User Preview */}
      {selectedUser && <UserPreview user={selectedUser} />}
    </div>
  );
};

export default UserList;

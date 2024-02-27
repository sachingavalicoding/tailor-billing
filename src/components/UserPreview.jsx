import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppwrite } from '../context/AppwriteProvider';

const UserPreview = () => {
  const { usersData } = useAppwrite();
  const { userId } = useParams();

  const user = usersData.find((user) => user.$id === userId);

  if (!user) {
    return <div className="text-center text-red-600">User not found</div>;
  }

  return (
    <div className="container mx-auto mt-28 p-4 bg-white rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Customer Details </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border bg-white">
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold">Name</td>
              <td className="border px-4 py-2">{user.name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Phone Number</td>
              <td className="border px-4 py-2">{user.phoneno}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold"> Phone Number 2</td>
              <td className="border px-4 py-2">{user.phoneno2}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Address</td>
              <td className="border px-4 py-2">{user.address}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Start Date</td>
              <td className="border px-4 py-2">{user.startDate}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">End Date</td>
              <td className="border px-4 py-2">{user.endDate}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Quantity Shirt </td>
              <td className="border px-4 py-2">{user.productQuantityShirt}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold"> Quantity Pant</td>
              <td className="border px-4 py-2">{user.productQuantityPant}</td>
            </tr>
          
            <tr>
              <td className="border px-4 py-2 font-semibold">Shirt </td>
              <td className="border px-4 py-2">{user.hand}</td>
            </tr>
         
            <tr>
              <td className="border px-4 py-2 font-semibold">Pant</td>
              <td className="border px-4 py-2">{user.foot}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPreview;

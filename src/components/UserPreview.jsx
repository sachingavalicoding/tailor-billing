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
    <div className="container mx-auto my-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-4">User Preview</h2>
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
              <td className="border px-4 py-2 font-semibold">Product Quantity</td>
              <td className="border px-4 py-2">{user.productQuantity}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Neck</td>
              <td className="border px-4 py-2">{user.neck}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Chest</td>
              <td className="border px-4 py-2">{user.chest}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Hand</td>
              <td className="border px-4 py-2">{user.hand}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Shoulder</td>
              <td className="border px-4 py-2">{user.sholder}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Foot</td>
              <td className="border px-4 py-2">{user.foot}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPreview;

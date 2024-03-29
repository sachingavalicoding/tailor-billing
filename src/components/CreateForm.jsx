import React, { useState } from 'react';
import { databases } from '../appwrite/appwrite';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";
const CreateForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phoneno: '',
        phoneno2: '',
        address: '',
        startDate: '',
        productQuantity: '',
        endDate: '',
        neck: '',
        chest: '',
        hand: '',
        sholder: '',
        foot: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a new document in the Appwrite database
            const response = await databases.createDocument("65ddd8d961a57942a6c5", "65ddd8e6a4ab67400c6b", ID.unique(), formData);

            console.log('Document created successfully:', response);
            navigate("/");
        } catch (error) {
            console.error('Error creating document:', error);
        }
    };


    return (
        <div className="container mx-auto mt-8 p-4 sm:p-8">
            <h1 className="text-3xl font-semibold mb-4">User Details Form</h1>
           <Link to="/">  <h2 className='flex items-center gap-3 mb-5 '>   <IoArrowBackCircle className='text-xl' />Back TO  Home </h2>   </Link>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name:</label>
                        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} required className="mt-1 p-2 border w-full" />
                    </div>
                    <div>
                        <label htmlFor="phoneno" className="block text-sm font-medium text-gray-600">Phone Number:</label>
                        <input type="tel" id="phoneno" name="phoneno" onChange={handleChange} value={formData.phoneno} required className="mt-1 p-2 border w-full" />
                    </div>
                </div>

                {/* Optional Phone Number and Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="phoneno2" className="block text-sm font-medium text-gray-600">Optional Phone Number:</label>
                        <input type="tel" id="phoneno2" name="phoneno2" onChange={handleChange} value={formData.phoneno2} className="mt-1 p-2 border w-full" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address:</label>
                        <input type="text" id="address" name="address" onChange={handleChange} value={formData.address} required className="mt-1 p-2 border w-full" />
                    </div>
                </div>

                {/* Date, Product Quantity, and End Date */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">Start Date:</label>
                        <input type="date" id="startDate" name="startDate" onChange={handleChange} value={formData.startDate} required className="mt-1 p-2 border w-full" />
                    </div>
                    <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-600">End Date:</label>
                        <input type="date" id="endDate" name="endDate" onChange={handleChange} value={formData.endDate} required className="mt-1 p-2 border w-full" />
                    </div>
                    <div>
                        <label htmlFor="productQuantity" className="block text-sm font-medium text-gray-600">Product Quantity:</label>
                        <input type="text" id="productQuantity" name="productQuantity" onChange={handleChange} value={formData.productQuantity} required className="mt-1 p-2 border w-full" />
                    </div>

                </div>

                {/* Body Measurements */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label htmlFor="neck" className="block text-sm font-medium text-gray-600">Neck:</label>
                        <input type="text" id="neck" name="neck" onChange={handleChange} value={formData.neck} required className="mt-1 p-2 border w-full" />
                    </div>
                    <div>
                        <label htmlFor="chest" className="block text-sm font-medium text-gray-600">Chest:</label>
                        <input type="text" id="chest" name="chest" onChange={handleChange} value={formData.chest} required className="mt-1 p-2 border w-full" />
                    </div>
                    <div>
                        <label htmlFor="hand" className="block text-sm font-medium text-gray-600">Hand:</label>
                        <input type="text" id="hand" name="hand" onChange={handleChange} value={formData.hand} required className="mt-1 p-2 border w-full" />
                    </div>
                    <div>
                        <label htmlFor="sholder" className="block text-sm font-medium text-gray-600">Shoulder:</label>
                        <input type="text" id="sholder" name="sholder" onChange={handleChange} value={formData.sholder} required className="mt-1 p-2 border w-full" />
                    </div>
                    <div>
                        <label htmlFor="foot" className="block text-sm font-medium text-gray-600">Foot:</label>
                        <input type="text" id="foot" name="foot" onChange={handleChange} value={formData.foot} required className="mt-1 p-2 border w-full" />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex ">
                    <button type="submit" className="bg-blue-500 w-full text-white px-3 py-2  font-medium rounded">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreateForm;

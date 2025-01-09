'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useForms } from '@/context/FormsContext';
import { useRouter } from 'next/navigation';
import FormComponent from '@/components/FormComponent';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { forms, formCount, updateFormCount, updateForm } = useForms();
  const router = useRouter();
  const [submittedForms, setSubmittedForms] = useState([]);
  const [showFormSection, setShowFormSection] = useState(false);

  const handleAddNewForms = () => {
    updateFormCount(1);
    setShowFormSection(true);
  };

  const handleDeleteForm = (indexToDelete) => {
    setSubmittedForms(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted forms:', forms);
    setSubmittedForms(prev => [...prev, ...forms]);
    setShowFormSection(false);
    updateFormCount(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">CMSA Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {showFormSection && (
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-black mb-4">Add New Forms</h2>
            <div className="mb-4">
              <label className="block mb-2 text-black">Number of Forms:</label>
              <select
                className="p-2 border rounded text-black w-48 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={formCount}
                onChange={(e) => updateFormCount(Number(e.target.value))}
              >
                <option value={1}>One Form</option>
                <option value={2}>Two Forms</option>
                <option value={3}>Three Forms</option>
              </select>
            </div>

            <form onSubmit={handleSubmit}>
              {forms.map((form, index) => (
                <FormComponent
                  key={index}
                  index={index}
                  formData={form}
                  updateForm={updateForm}
                />
              ))}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit Forms
                </button>
              </div>
            </form>
          </div>
        )}

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-black">Forms Submitted</h2>
            {!showFormSection && (
              <button
                onClick={handleAddNewForms}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Forms
              </button>
            )}
          </div>
          {submittedForms.length === 0 ? (
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-black text-lg">No forms have been submitted yet.</p>
              <p className="text-gray-500 mt-2">Click "Add New Forms" to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submittedForms.map((form, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-black text-lg">Form {index + 1}</h4>
                      <span className="text-sm text-gray-500">Submitted</span>
                    </div>
                    <button
                      onClick={() => handleDeleteForm(index)}
                      className="p-2 text-red-600 hover:text-red-700 transition-colors"
                      title="Delete form"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-black">
                    <div className="space-y-1">
                      <p className="text-gray-500 text-sm">Name</p>
                      <p className="font-medium">{form.name}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="font-medium">{form.email}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-500 text-sm">Phone</p>
                      <p className="font-medium">{form.phone}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-500 text-sm">Organization</p>
                      <p className="font-medium">{form.organization}</p>
                    </div>
                    <div className="col-span-2 space-y-1">
                      <p className="text-gray-500 text-sm">Address</p>
                      <p className="font-medium">{form.postalAddress}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
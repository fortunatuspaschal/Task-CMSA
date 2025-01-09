'use client';

export default function FormComponent({ index, formData, updateForm }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-4 text-black border-b pb-2">Form {index + 1}</h3>
      <div className="space-y-4">
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full p-2 border rounded text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={formData.name}
            onChange={(e) => updateForm(index, { ...formData, name: e.target.value })}
          />
        </div>
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Postal Address</label>
          <input
            type="text"
            placeholder="Enter postal address"
            className="w-full p-2 border rounded text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={formData.postalAddress}
            onChange={(e) => updateForm(index, { ...formData, postalAddress: e.target.value })}
          />
        </div>
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full p-2 border rounded text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={formData.email}
            onChange={(e) => updateForm(index, { ...formData, email: e.target.value })}
          />
        </div>
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Phone</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full p-2 border rounded text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={formData.phone}
            onChange={(e) => updateForm(index, { ...formData, phone: e.target.value })}
          />
        </div>
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Organization</label>
          <input
            type="text"
            placeholder="Enter organization name"
            className="w-full p-2 border rounded text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={formData.organization}
            onChange={(e) => updateForm(index, { ...formData, organization: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
} 
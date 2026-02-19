import React, { useState } from 'react';

// Contoh penggunaan:
// const fields = [
//   { name: 'name', label: 'Nama', type: 'text', placeholder: 'Masukkan nama', required: true },
//   { name: 'email', label: 'Email', type: 'email', placeholder: 'Masukkan email', required: true },
//   { name: 'gender', label: 'Jenis Kelamin', type: 'select', options: [{ value: 'male', label: 'Laki-laki' }, { value: 'female', label: 'Perempuan' }], required: true }
// ];
// <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} fields={fields} onSubmit={(data) => console.log(data)} title="Form Pendaftaran" />

const Form = ({ isOpen, onClose, fields, onSubmit, title = 'Form' }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({}); // Reset form setelah submit
    onClose(); // Tutup modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 -z-1 bg-black opacity-50 backdrop-blur-sm"></div>
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button className="text-gray-500 hover:text-gray-700 text-2xl" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              {field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih {field.label}</option>
                  {field.options?.map((option, idx) => (
                    <option key={idx} value={option.value}>{option.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
          <div className="flex justify-end space-x-2 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Batal</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
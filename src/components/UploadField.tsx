import React, { useState } from 'react';

interface UploadFieldProps {
  label: string;
  accept: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  preview?: boolean;  
}

const UploadField: React.FC<UploadFieldProps> = ({ label, accept, onChange, preview = false }) => {
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null); 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name); 
      if (preview && file.type.startsWith('image/')) {
        setFilePreview(URL.createObjectURL(file)); 
      }
    }
    if (onChange) onChange(e);
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
        <input
          type="file"
          accept={accept}  
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={handleFileChange}/>
        <div className="text-center text-gray-500 pointer-events-none z-0">
          <p className="text-sm">Drag & drop or click to upload</p>
          <p className="text-xs text-gray-400">Accepted formats: {accept.replace(/,/g, ', ')}</p>
        </div>
      </div>

      
      {preview && filePreview && (
        <div className="mt-4">
          <img 
            src={filePreview} 
            alt="File Preview" 
            className="max-w-xs h-auto rounded-lg shadow-md"
          />
        </div>
      )}

      
      {!preview && fileName && (
        <div className="mt-4 text-gray-700">
          <p><strong>Uploaded file:</strong> {fileName}</p>
        </div>
      )}
    </div>
  );
};

export default UploadField;

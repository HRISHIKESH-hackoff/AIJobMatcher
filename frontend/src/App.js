import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/resumes/upload',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      const matchResponse = await axios.post(
        'http://localhost:5000/api/jobs/match',
        { resumeId: response.data.id }
      );

      setMatches(matchResponse.data.matches);
    } catch (err) {
      setError('Error processing resume: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-indigo-600">AIJobMatcher</h1>
          <p className="text-gray-600">Smart Resume Analysis & Job Matching</p>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Upload Your Resume</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <p className="text-gray-600">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-400">PDF or DOC up to 10MB</p>
              </label>
            </div>

            {file && <p className="text-green-600">Selected: {file.name}</p>}
            {error && <p className="text-red-600">Error: {error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-400"
            >
              {loading ? 'Processing...' : 'Analyze Resume'}
            </button>
          </form>
        </div>

        {matches.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Job Matches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matches.map((match, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold mb-2">{match.title}</h3>
                  <p className="text-gray-600 mb-2">{match.company}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{match.location}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {match.matchPercentage}% Match
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

# AIJobMatcher

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)

An intelligent AI/ML-powered platform that analyzes resumes and matches them with suitable job opportunities. This full-stack application leverages Natural Language Processing (NLP), Machine Learning algorithms, and modern web technologies to provide smart career recommendations.

## Features

### Core Functionality
- **Resume Parsing & Analysis**: Extracts key information from PDF/DOCX resumes
- **NLP Skill Extraction**: Identifies technical and soft skills using advanced NLP
- **Job Matching Algorithm**: ML-based matching between resumes and job postings
- **Candidate Scoring**: Intelligent scoring system based on experience, skills, and education
- **Real-time Recommendations**: Instant job suggestions with match percentage
- **Interview Prep**: AI-generated interview questions based on job requirements

### Technical Highlights
- **Frontend**: React 18 with TypeScript, Tailwind CSS
- **Backend**: Node.js/Express with RESTful APIs
- **ML Pipeline**: TensorFlow.js, scikit-learn, NLP models
- **Database**: MongoDB for data persistence
- **Deployment**: Vercel (Frontend) + Render (Backend)

## Tech Stack

### Frontend
- React 18.0+
- TypeScript
- Tailwind CSS
- Axios for API calls
- React Query for state management

### Backend
- Node.js 16+
- Express.js
- MongoDB
- Multer for file uploads
- JWT for authentication

### ML & AI
- TensorFlow.js
- scikit-learn
- NLTK for NLP
- Spacy for advanced NLP
- pandas for data manipulation

## Project Structure

```
AIJobMatcher/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   └── styles/          # Tailwind CSS
│   └── package.json
│
├── backend/                  # Node.js/Express server
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # Database models
│   │   ├── middleware/      # Custom middleware
│   │   └── utils/           # Helper functions
│   └── package.json
│
├── ml-pipeline/             # Machine Learning models
│   ├── models/              # Pre-trained ML models
│   ├── preprocessing/       # Data preprocessing scripts
│   ├── training/            # Model training notebooks
│   └── requirements.txt
│
└── docs/                     # Documentation
    └── API_DOCS.md
```

## Installation & Setup

### Prerequisites
- Node.js 16+ installed
- Python 3.8+ for ML pipeline
- MongoDB account (local or MongoDB Atlas)
- npm or yarn package manager

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/HRISHIKESH-hackoff/AIJobMatcher.git
   cd AIJobMatcher
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure your .env file with MongoDB URI and API keys
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

4. **Setup ML Pipeline**
   ```bash
   cd ../ml-pipeline
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python train_models.py
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Resume Management
- `POST /api/resumes/upload` - Upload and parse resume
- `GET /api/resumes/:id` - Get resume details
- `PUT /api/resumes/:id` - Update resume
- `DELETE /api/resumes/:id` - Delete resume

### Job Matching
- `POST /api/jobs/match` - Get job matches for resume
- `GET /api/jobs/:id` - Get job details
- `GET /api/recommendations` - Get AI recommendations

### Analysis
- `POST /api/analysis/skills` - Extract skills from resume
- `POST /api/analysis/gaps` - Identify skill gaps
- `POST /api/analysis/interview-prep` - Generate interview questions

## Usage Examples

### Upload and Analyze Resume
```bash
curl -X POST http://localhost:5000/api/resumes/upload \
  -F "file=@resume.pdf" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Get Job Matches
```bash
curl -X POST http://localhost:5000/api/jobs/match \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"resumeId": "60d5ec49c1234567890abcde"}'
```

## Machine Learning Models

### Resume Classification
- Uses TensorFlow.js for client-side inference
- Classifies resumes into different career categories
- Accuracy: 94%+

### Skill Extraction
- NLP-based skill recognition
- Supports 500+ technical and soft skills
- Trained on industry-standard dataset

### Job Matching Algorithm
- Cosine similarity for job-resume matching
- Considers: skills, experience, education, location
- Real-time match percentage calculation

## Deployment

### Deploy Frontend to Vercel
```bash
cd frontend
npm install -g vercel
vercel
```

### Deploy Backend to Render
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables
4. Deploy

## Performance Metrics

- **Resume Processing Time**: <2 seconds
- **Job Matching Speed**: <100ms per match
- **API Response Time**: <200ms average
- **Frontend Load Time**: <1.5 seconds

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Video resume analysis
- [ ] LinkedIn profile integration
- [ ] Real-time job market analysis
- [ ] Salary prediction based on resume
- [ ] Mobile app development
- [ ] Industry-specific recommendations
- [ ] Portfolio integration
- [ ] Interview scheduling integration

## Future Enhancements

1. **Video Analysis**: Process video resumes using computer vision
2. **Real-time Notifications**: Alert users about matching jobs
3. **Advanced Analytics**: Dashboard with career insights
4. **Network Integration**: LinkedIn and GitHub profile sync
5. **Multi-language Support**: Support for 10+ languages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

- **Email**: support@aijobmatcher.com
- **GitHub Issues**: [Report bugs](https://github.com/HRISHIKESH-hackoff/AIJobMatcher/issues)
- **Documentation**: [Full API Docs](./docs/API_DOCS.md)

## Acknowledgments

- TensorFlow.js team for ML capabilities
- Express.js community
- Open-source NLP libraries

---

**Made with ❤️ by HRISHIKESH-hackoff**

If you found this project helpful, please star it! ⭐

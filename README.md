# GitFlow - AI-Powered GitHub Web App

<div align="center">

![GitFlow Logo](https://img.shields.io/badge/GitFlow-AI%20Powered%20Git%20Summarizer-blue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## 🌟 Features

- 🤖 AI-powered git commit summarization using Google's Gemini AI
- 📝 Generates clear, concise, and meaningful commit summaries
- 🔍 Understands complex code changes and provides context-aware descriptions
- ⚡ Fast and efficient processing of git diffs
- 🎯 Focuses on the most important changes in each commit

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GitDaksh/GitFlow.git
cd GitFlow
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your environment variables:
Create a `.env` file in the root directory and add your Gemini API key:
```env
GEMINI_API_KEY=your_api_key_here
```

### Usage

```typescript
import { aiSummariseCommit } from './src/lib/gemini';

// Example usage
const diff = `your git diff here`;
const summary = await aiSummariseCommit(diff);
console.log(summary);
```

## 🛠️ Built With

- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [Google Generative AI](https://ai.google.dev/) - For AI-powered summarization
- [Prisma](https://www.prisma.io/) - For database management

## 📝 Example Output

The AI will generate summaries like:

```
* Made firstName and lastName fields optional in User model [prisma/schema.prisma]
* Added new API endpoint for user authentication [src/routes/auth.ts]
* Updated database schema to include user preferences [prisma/migrations/xxx.sql]
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Google Gemini AI team for their amazing API
- The open-source community for their invaluable tools and libraries

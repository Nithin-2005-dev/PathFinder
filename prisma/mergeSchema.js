const fs = require('fs');
const path = require('path');

const files = [
  'models/enums.prisma',
  'models/user.prisma',
  'models/project.prisma',
  'models/gamification.prisma',
  'models/pathways.prisma',
  'models/collaboration.prisma',
  'models/subscriptions.prisma',
  'models/translations.prisma',
  'models/bookmarks.prisma',
  'models/roles.prisma',
  'models/audit.prisma',
  'models/skill.prisma',
];

// starting content for schema.prisma
let content = `generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

`;

for (const file of files) {
  const filePath = path.resolve(__dirname, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  content += '\n' + fileContent;
}

const outputPath = path.resolve(__dirname, 'schema.prisma');
fs.writeFileSync(outputPath, content);
console.log('Merged schema.prisma generated.');

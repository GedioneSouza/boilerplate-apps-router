module.exports = {
  testEnvironment: 'jsdom', // Ambiente de teste
  testPathIgnorePatterns: ['/node_modules', '/.next/'], // Ignorar essas pastas
  collectCoverage: true, // Cobertura de testes
  collectCoverageFrom: ['src/**/*.ts(x)?'], // Onde será feita a cobertura de testes
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Configura/carrega esse arquivo antes de tudo que neste caso é o arquivo "setup.ts"
  modulePaths: ['<rootDir>/src/'], // Pegar todos os arquivos da pasta src
  transform: {
    // Configuração do formato que terá os arquivos compilados do Babel
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}

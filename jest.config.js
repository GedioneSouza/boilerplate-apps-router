module.exports = {
  testEnvironment: 'jsdom', // Ambiente de teste
  testPathIgnorePatterns: ['/node_modules', '/.next/'], // Ignorar essas pastas
  collectCoverage: true, // Cobertura de testes
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', // should be tested in e2e
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/styles/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Configura/carrega esse arquivo antes de tudo que neste caso é o arquivo "setup.ts"
  modulePaths: ['<rootDir>/src/'], // Pegar todos os arquivos da pasta src
  transform: {
    // Configuração do formato que terá os arquivos compilados do Babel
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should to force it to use the browser version
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}

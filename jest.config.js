module.exports = {
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
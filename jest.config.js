module.exports = {
    "moduleFileExtensions": ["js", "json", "ts"],
    "moduleNameMapper": {
        "^src/(.*)": "<rootDir>/src/$1"
    },
    "testRegex": ".spec.ts$",
    "testEnvironment": "node",
    "rootDir": "./",
    "transform": {
        "^.+\\.(t|j)s$": "ts-jest"
    }
}
# Unity Project Version Utility

This utility package helps with determining a Unity 3D project's used Unity editor version.
It's a helper package to [Unity Tools for Azure DevOps](https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks).

[![npm version](https://badge.fury.io/js/%40dinomite-studios%2Funity-project-version.svg)](https://badge.fury.io/js/%40dinomite-studios%2Funity-project-version)
![Build Status](https://dev.azure.com/dinomite/Unity%20Tools%20for%20Azure%20DevOps/_apis/build/status/unity-project-version-ci-cd?branchName=main)

## How To Use

Use the static function `ProjectVersionService.determineProjectVersionFromFile` and pass the full path to the root directory containing
your Unity project. That is the directory containing the `Assets` folder. As a result, you'll get e.g.:

```
{
    version: '2019.4.17f1',
    revision: '123456abcd',
    isAlpha: false,
    isBeta: false
}
```

## Branches

- `main`: The main branch is build and deployed to the [public npm registry](https://www.npmjs.com/package/@dinomite-studios/unity-project-version)
- `development`: This branch contains latest in development features, fixes and changes and is merged to `main` once stable

## Contributions

Found and fixed a bug or improvement on something? Contributions are welcome! Please target your pull request
against the `development` branch.
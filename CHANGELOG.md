# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.4]

### Changed

- Revert to typescript `3.9.7`

## [1.1.3]

### Changed

- Not using `fs-extra` at all now. Solely using node built-in `fs` file system APIs

## [1.1.2]

### Changed

- Needed to go back to `fs-extra v8.1.0` because the latest version would cause errors with Azure DevOps

## [1.1.1]

### Changed

- Removed `versionWithRevision`field since it can easily be retrieved now using the new `revision` field introduced in v1.1
- Updated dependencies

### Fixed

- Fixed case where project version failed to be found if standard assets are used in the project

## [1.1.0]

### Added

- Added *revision* field to the returned version information.

## [1.0.4]

### Changed

- Downgrade fs-extra package.
- Remove azure-pipelines-task-lib package dependency.

## [1.0.3]

### Added

- Added azure-pipelines-task-lib package.

## [1.0.2]

### Added

- Added revision version to data set.

### Changed

- Improved error handling.

## [1.0.1]

### Changed

- Fixed documentation.

## [1.0.0]

- Initial package creation.
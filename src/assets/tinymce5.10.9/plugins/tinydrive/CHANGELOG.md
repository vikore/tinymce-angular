# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.4.1 - 2021-05-18

### Fixed
- Fixed an issue where the `skin` setting wasn't working in standalone-mode #TD-296

## 1.4.0 - 2021-05-04

### Added
- Added new pdf preview functionality #TD-252
- Added new base url option to the asset manager #TD-252
- Added new `skin` setting to plugin- and standalone-mode #TD-290
- Added new dark UI skin #TD-290

### Fixed
- Fixed an issue where images with exif orientation would get incorrectly oriented #TD-283
- Fixed an issue where specifying 'audio' for the `filetype` setting would not list the files in grid view #TD-237
- Fixed an issue with tab key throwing a max call stack exceeded error #TD-259

## 1.3.0 - 2019-06-03

### Added
- Added new standalone api functions pick, browse, start and upload. #TD-214
- Added new plugin api with functions pick, browse and upload. #TD-230
- Added new target setting to allow rendering inside a specific target element. #TD-214
- Added new video preview functionality #TD-197
- Added fallback icons for video, zip and audio formats #TD-247
- Added client side validation of min characters for search field. #TD-227

### Fixed
- Fixed bug where IE 11 would render the toolbar icons at incorrect positions. #TD-268

## 1.2.1 - 2019-04-24

### Added
- Added new dropbox/google drive icons. #TD-190

### Fixed
- Fixed an issue where file selection wouldn't be cleared when navigating to a new directory. #TD-232
- Fixed various focus issues where focus would be lost or moved incorrectly. #TD-232
- Fixed various async issues with the ui not being updated correctly. #TD-232
- Fixed an issue where it would scroll the file list to top if new files where added while scrolling. #TD-232

## 1.2.0 - 2019-03-28

### Added
- Added new google drive and dropbox file pickers #TD-190

### Improved
- Improved file type listing support when picking files in tinymce #TD-192
- Improved alert messages when deleting folders #TD-178
- Improved handling of invalid file types in local file pickers and drag drop #TD-190

### Fixed
- Fixed an issue where concurrent async list operations could result in duplicate files #TD-225
- Fixed an issue where it wasn't possible to upload some file extension mp4, m4v, keynote, csv #TD-176

## 1.1.0 - 2018-11-26

### Added
- Added setting to allow user specific root through JWT payload #TD-78

### Fixed
- Fixed issue where backdrop wasm't displayed for preview menu #TD-164

## 1.0.0 - 2018-09-18

### Added
- Initial release

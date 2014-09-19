
# Storage Abstraction

Attempt to provide common interface for file operations to any storage (local, cloud, etc). Intended scenario is file metadata is stored on database with actual file hosted somewhere. Storage will support any metadata store (using [Waterline](https://github.com/balderdashy/waterline)) and support any file storage (using Adapter concept)

## Interfaces

* storage.auth() 
* storage.stat()
* storage.cp()
* storage.rm()
* storage.cd()
* storage.mv()
* storage.ls()
* storage.mkdir()
* storage.chmod()
* storage.chown()
* storage.df()

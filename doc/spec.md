
**Cymb Storage Specification Draft v.0.1**
Inputs are welcome

## Components

Storage has three components

* Core library
* Backend storage
* CLI

## Core Library

Core library manage file metadata and handle connection to file storage. Example: When you do copy operation, storage will create new metadata and storage actual file in backend storage

Additional functionalities (might be moved into separate module)

* Record changes
* ACL

### File metadata

Below is metadata proposal.

```
{
  id : 1,
  created_at : 123456789,
  modified_at : 123456789,
  name : 'file.txt',
  is_dir : false,
  parent : 12,
  path : '/file/store,
  mime : 'file/txt',
  bytes : 12345,
  size : 12KB,
  icon : file_txt,
  storage : {
    type : 'azure'
    id : '123'
  },
  rev : 1235
  owner : {
    ...
  }
  ...
}
```

## Backend storage

Backend storage is where the actual file is stored. Storage can have multiple numbers of backend. 

```
var backend = {
  azureBackend : {
    adapter: 'cymb-storage-azure',
    accountName: 'AZURE_BLOB_ACCOUNT_NAME',
    accountKey: 'AZURE_BLOB_ACCOUNT_KEY'
  },
  googleDriveBackend : {
    adapter: 'cymb-storage-googledrive',
    ...
  }
} 
```

Backend will implement following standard interface

```
var adapter = {
  TODO :: complete adapter interface  
}
```

## CLI

This is planned component to do storage operation from command line
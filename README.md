# Kanso Pages

Pages is a CouchApp that I used for learning Kanso and CouchDB. It might also
be useful for building a simple website. 

This code is *not* Kanso >=1.0 compatible yet as it relies on the Kanso Admin
which has not been ported over yet, AFAIK.

## CouchDB

Start up a CouchDB >= 1.1 instance.  If your OS doesn't support a package, try
the Couchbase preview releases:

http://files.couchbase.com/developer-previews/couchbase-single-server-2.0.0-dev-preview/

## Install

This app uses the Kanso admin to edit your data.  Push the pages and admin apps
to your couch once you cloned or unpacked it:

```
kanso push pages
kanso pushadmin pages 
```

## Usage

Create pages with the built-in Kanso admin and make your site.

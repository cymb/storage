
'use strict';

var storage = require('../lib')

describe('storage.cp', function(){

  it('should copy the file', function(done){
    storage.copy('./fixtures/file.txt', 'cymb://one/file.txt', function(err, result) {
      assert(result === 'ok');
    })
  });

});
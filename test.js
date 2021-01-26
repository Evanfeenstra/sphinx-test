var test = require('ava');
var http = require('ava-http');

var nodes = require('./nodes.json')

test('test i am contact #1', async t => {
  const res = await http.get('https://xaalwgb234n7gy2.039.sphinxnodes.chat/contacts', {headers:{'x-user-token':nodes[0].authToken}});
  console.log(res)
	t.true(typeof res === 'object'); // json object by default
  t.deepEqual(res, {expected: 'output'}); // deepEqual comparison
});

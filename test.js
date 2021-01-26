var test = require('ava');
var http = require('ava-http');

var nodes = require('./nodes.json')
var node1 = nodes[0]

function makeArgs(node) {
  return {
    headers : {'x-user-token':node.authToken}
  }
}

test('test i am contact #1', async t => {
  const res = await http.get(node1.ip+'/contacts', makeArgs(node1));
  console.log(res)
	t.true(typeof res === 'object'); // json object by default
  t.deepEqual(res, {expected: 'output'}); // deepEqual comparison
});

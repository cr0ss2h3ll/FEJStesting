// import test from 'ava';


// test('foo', t => {
// 	t.pass();
// });

// test('bar', async t => {
// 	const bar = Promise.resolve('bar');

// 	t.is(await bar, 'bar');
// });

const test = require('ava');

test('avaFirstRun', ()=>{
    return "first ran";
});

test('avaSecondRun',()=>{
    return "second ran";
})
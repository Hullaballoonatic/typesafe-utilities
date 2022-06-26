# Typesafe Utilities

Growing utilities library that I like to use but with strict types. Each has a JSDoc attached.

## Functions
These are pretty much just type safe versions of lodash ones

### AssociatedBy

Creates an object composed of keys and values generated from the results of running each element of collection through iteratee. The order of grouped values is determined by the order they occur in collection. The iteratee is invoked with one argument: (value).

```typescript
const array = [ { dir: 'left', code: 97 }, { dir: 'right', code: 100 } ];
associatedBy(array, o => [o.dir, o.code]);
// => { 'left': 97, 'right': 100 }
```

### GroupedBy

Creates an object composed of keys generated from the results of running each element of collection through iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).

```typescript
groupedBy([6.1, 4.2, 6.3], Math.floor);
// => { 4: [4.2], 6: [6.1, 6.3] }

groupedBy(['one', 'two', 'three'], 'length');
// => { 3: ['one', 'two'], 5: ['three'] }
```

### KeyedBy

Creates a Record object composed of keys generated from the results of running each element of collection through keySelector. The corresponding value of each key is the last element responsible for generating the key. The keySelector is invoked with one argument: (value).

```typescript
const array = [
    { dir: 'left', code: 97 },  
    { dir: 'right', code: 100 },
];

keyedBy(array, o => String.fromCharCode(o.code));
// => { 'a': { dir: 'left', code: 97 }, 'b': { dir: 'right', code: 100 } }

keyedBy(array, 'dir');
// => { left: { dir: 'left', code: 97 }, right: { dir: 'right', code: 100 } }
```

### PartitionedBy

Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).

```typescript
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'pebbles', age: 1, active: false },
];

partitionedBy(users, o => o.age < 40);
// => objects for [['barney', 'pebbles'], ['fred']]

partitionedBy(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```
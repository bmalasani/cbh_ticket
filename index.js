const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

console.log(crypto.createHash("sha512").update("ff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1aff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1aff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1aff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1aff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1aff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1aff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1a").digest('hex').length);

// console.log(deterministicPartitionKey());

// //when event is empty string
// console.log(deterministicPartitionKey(""));

// // when event is string
// console.log(deterministicPartitionKey("event"));

// //when event is number
// console.log(deterministicPartitionKey(123));

// // when event is float
// console.log(deterministicPartitionKey(123.23));

// //when event is boolean true
// console.log(deterministicPartitionKey(true));

// // when event is false
// console.log(deterministicPartitionKey(false));

// //when event has partition key is string
// console.log(deterministicPartitionKey({ partitionKey: "string" }));

// //when event has partition key is not string
// console.log(deterministicPartitionKey({ partitionKey: 123 }));
// console.log(deterministicPartitionKey({ partitionKey: {} }));
// console.log(deterministicPartitionKey({ partitionKey: {length: 'ff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1a'} }));

const crypto = require("crypto");

/***
 *
 *
 * ## Refactoring
 *
 * - This algorithm should always return '0' for all falsy values, so I made the check at starting of the algorithm
 * -  if event has property 'partitionKey'  and the stringfied value or string length is lessthan 256 chars return immiditly 
 * - take strigfied data if no partition key
 * - return hash value.
 *
 */
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;
  // Should always return '0' for all falsy events
  if (!event) return TRIVIAL_PARTITION_KEY;

  if (event.partitionKey) {
    candidate =
      typeof event.partitionKey !== "string"
        ? JSON.stringify(event.partitionKey)
        : event.partitionKey;
    //Return candidate if length lessthan MAX PArtionKey Lenght
    if (candidate.length <= MAX_PARTITION_KEY_LENGTH) {
      return candidate;
    }
  } else {
    candidate = JSON.stringify(event);
  }
  candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  //It always generate 128 char hex hash
  return candidate;
};

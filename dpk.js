const crypto = require("crypto");

/***
 *
 *
 * ## Refactoring
 *
 * - This algorithm should always return '0' for all falsy values, so I made the check at starting of the algorithm
 * -  if event has property 'partitionKey' , the candidate is either partitionKey or stringfied content of partitionKey.
 *
 *
 */
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // Should always return '0' for all falsy events
  if (!event) return TRIVIAL_PARTITION_KEY;

  if (event.partitionKey) {
    candidate =
      typeof event.partitionKey !== "string"
        ? JSON.stringify(event.partitionKey)
        : event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Should return the literal '0' when input value falsy", () => {
    let trivialKey = deterministicPartitionKey(false);
    expect(trivialKey).toBe("0");
    trivialKey = deterministicPartitionKey(0);
    expect(trivialKey).toBe("0");
    trivialKey = deterministicPartitionKey("");
    expect(trivialKey).toBe("0");
    trivialKey = deterministicPartitionKey(false);
    expect(trivialKey).toBe("0");
  });

  it("Should generate same hash when input value doesn't have partitionKey (number type)", () => {
    const trivialKey = deterministicPartitionKey(123);
    const expectedValue = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(123))
      .digest("hex");
    expect(trivialKey).toBe(expectedValue);
  });

  it("Should generate same hash when input value doesn't have partitionKey  (string type)", () => {
    const trivialKey = deterministicPartitionKey("123sdfsdfdsf");
    const expectedValue = crypto
      .createHash("sha3-512")
      .update(JSON.stringify("123sdfsdfdsf"))
      .digest("hex");
    expect(trivialKey).toBe(expectedValue);
  });

  it("Should generate same hash when input value doesn't have partitionKey  (object type)", () => {
    const event = {
      key: "123131",
      name: "sdfjsdfsd",
      hash: "99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a",
    };
    const trivialKey = deterministicPartitionKey(event);
    const expectedValue = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(trivialKey).toBe(expectedValue);
  });

  it("Should generate same hash when input value have partitionKey  (partitionKey string type)", () => {
    const event = {
      key: "123131",
      name: "sdfjsdfsd",
      partitionKey:
        "99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a",
    };
    const trivialKey = deterministicPartitionKey(event);
    const expectedValue = crypto
      .createHash("sha3-512")
      .update(event.partitionKey)
      .digest("hex");
    expect(trivialKey).toBe(expectedValue);
  });

  it("Should generate same hash when input value have partitionKey  (partitionKey string type with lessthan 256 lenght)", () => {
    const event = {
      key: "123131",
      name: "sdfjsdfsd",
      partitionKey:
        "99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e",
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });

  it("Should generate same hash when input value have partitionKey  (partitionKey not string type)", () => {
    const event = {
      key: "123131",
      name: "sdfjsdfsd",
      partitionKey: {
        hash: "99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a99618d75a8a4844bf0c26ca451ea18d104fb040a881825dedf53a4a716e3537b6374e5f84ce13ef5af948a70a872c8116d104012ef1a39f76d42ce1ededb4f9a",
      },
    };
    const trivialKey = deterministicPartitionKey(event);
    const expectedValue = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event.partitionKey))
      .digest("hex");
    expect(trivialKey).toBe(expectedValue);
  });

  it("Should generate same partitionKey when partitionKey not string type and less than 256 chars", () => {
    const event = {
      key: "123131",
      name: "sdfjsdfsd",
      partitionKey: 123,
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(JSON.stringify(event.partitionKey));
  });

});

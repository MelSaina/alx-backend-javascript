const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // Check if the weakMap has an entry for the current endpoint
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    // Increment the count for the current endpoint
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is greater than or equal to 5, then throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

export { queryAPI, weakMap };

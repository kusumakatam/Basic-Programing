function processCategories(categories) {
  const counts = categories.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return { counts, sorted };
}

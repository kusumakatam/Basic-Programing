function processEmployees(employees) {
  const levels = { Excellent: 3, Good: 2, "Needs Improvement": 1 };

  return employees
    .filter(e => e.tasksCompleted > 5)
    .map(e => {
      let performance =
        e.rating > 4.5
          ? "Excellent"
          : e.rating >= 3
          ? "Good"
          : "Needs Improvement";

      return { name: e.name, performance };
    })
    .sort((a, b) => levels[b.performance] - levels[a.performance]);
}

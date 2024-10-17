export function getData() {
  const tasks = {
    data: [
      // Phase 1.1 - Construction Project A
      {
        id: "1.1",
        type: "Phase",
        text: "Phase 1.1 - Construction Project A",
        start_date: "01-04-2025",
        duration: 10,
        order: 1,
        progress: 0.0,
        open: true,
      },
      {
        id: "1.1.1",
        type: "Task",
        text: "Task 1.1.1 - Site Preparation",
        start_date: "01-04-2025",
        duration: 3,
        order: 2,
        progress: 0.0,
        parent: "1.1", // Phase 1.1 is the parent
      },
      {
        id: "1.1.2",
        type: "Task",
        text: "Task 1.1.2 - Foundation Laying",
        start_date: "04-04-2025",
        duration: 5,
        order: 3,
        progress: 0.0,
        parent: "1.1", // Phase 1.1 is the parent
      },
      {
        id: "1.1.1.1",
        type: "Subtask",
        text: "Subtask 1.1.1.1 - Concrete Pouring",
        start_date: "04-04-2025",
        duration: 2,
        order: 4,
        progress: 0.0,
        parent: "1.1.2", // Task 1.1.2 is the parent
      },
      {
        id: "1.1.1.2",
        type: "Subtask",
        text: "Subtask 1.1.1.2 - Reinforcement",
        start_date: "06-04-2025",
        duration: 3,
        order: 5,
        progress: 0.0,
        parent: "1.1.2", // Task 1.1.2 is the parent
      },
      {
        id: "1.1.3",
        type: "Task",
        text: "Task 1.1.3 - Framing",
        start_date: "10-04-2025",
        duration: 4,
        order: 6,
        progress: 0.0,
        parent: "1.1", // Phase 1.1 is the parent
      },

      // Phase 1.2 - Project Management
      {
        id: "1.2",
        type: "Phase",
        text: "Phase 1.2 - Project Management",
        start_date: "01-05-2025",
        duration: 12,
        order: 7,
        progress: 0.0,
        open: true,
      },
      {
        id: "1.2.1",
        type: "Task",
        text: "Task 1.2.1 - Scheduling",
        start_date: "01-05-2025",
        duration: 4,
        order: 8,
        progress: 0.0,
        parent: "1.2", // Phase 1.2 is the parent
      },
      {
        id: "1.2.2",
        type: "Task",
        text: "Task 1.2.2 - Budget Planning",
        start_date: "05-05-2025",
        duration: 6,
        order: 9,
        progress: 0.0,
        parent: "1.2", // Phase 1.2 is the parent
      },
      {
        id: "1.2.3",
        type: "Task",
        text: "Task 1.2.3 - Team Coordination",
        start_date: "11-05-2025",
        duration: 5,
        order: 10,
        progress: 0.0,
        parent: "1.2", // Phase 1.2 is the parent
      },
    ],
    links: [
      // Links for Phase 1.1 - Construction Project A
      { id: 1, source: "1.1.1", target: "1.1.2", type: "0" },  // Site Preparation -> Foundation Laying
      { id: 2, source: "1.1.2", target: "1.1.1.1", type: "0" }, // Foundation Laying -> Concrete Pouring
      { id: 3, source: "1.1.1.1", target: "1.1.1.2", type: "0" }, // Concrete Pouring -> Reinforcement
      { id: 4, source: "1.1.2", target: "1.1.3", type: "0" },   // Foundation Laying -> Framing
      
      // Links for Phase 1.2 - Project Management
      { id: 5, source: "1.2.1", target: "1.2.2", type: "0" },  // Scheduling -> Budget Planning
      { id: 6, source: "1.2.2", target: "1.2.3", type: "0" },  // Budget Planning -> Team Coordination
    ],
  };

  return tasks;
}

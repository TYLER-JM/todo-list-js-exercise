// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    descriptions: description,
    complete: false,
    logState: function(task) {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markComplete: function(task) {
      task.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take all the poop out of the litter box"); // task 0
const task2 = newTask("Do laundry", "unhappy"); // task 0
const tasks = [task1, task2];

task1.logState(task1); // Clean Cat Litter has not been completed
task1.markComplete(task1);
task1.logState(task1); // Clean Cat Litter has been completed
console.log(tasks);

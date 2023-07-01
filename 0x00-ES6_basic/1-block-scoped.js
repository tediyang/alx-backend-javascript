export default function taskBlock() {
  const task = false;
  const task2 = true;

  if (true) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}

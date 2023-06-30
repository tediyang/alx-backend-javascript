export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-va
    const task2 = false; // eslint-disable-line no-unused-va
  }

  return [task, task2];
}

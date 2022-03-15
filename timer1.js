/**
 * Creates an alarm clock/timer that will beep after a specified amount of time has passed. 
 * The user can specify an unlimited number of alarms using command line arguments.
 */

//alarm sound
const soundAlarm = () => process.stdout.write('\x07');

const timer = () => {
  // get command line arguments and store in an array
  const beeps = process.argv.slice(2);
  
  // checks if no numbers were provided
  if (!beeps.length) {
    return;
  }

  // iterate through the array of command line arguments to execute beep sound after specified time delay
  for (const time of beeps) {
    // checks if beep time is a negative number
    if (Number(time) < 0) {
      continue;
    }
    setTimeout(() => {
      soundAlarm();
      console.log('I beeped...');
    }, Number(time * 1000));
  }
};
timer();

// EDGE CASES
// if input is a negative number, ignore or skip that argument
// if the input is not a number, ignore or skip that argument

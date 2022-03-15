/**
 * Creates an alarm clock/timer that will beep after a specified amount of time has passed. 
 * The user can specify an unlimited number of alarms using command line arguments.
 */

//alarm sound
const soundAlarm = () => process.stdout.write('\x07');

const timer = () => {
  // get command line arguments and store in an array
  const args = process.argv.slice(2);
  const beeps = args.map(time => Number(time));
  
  // checks if no numbers were provided
  if (!beeps.length) {
    return;
  }

  // iterate through the array of command line arguments
  for (const time of beeps) {
    // checks if beep time is a negative number
    if (time < 0) continue;

    // checks if beep time is not a number
    if (isNaN(time)) continue;
    
    // sounds the alarms after specified delay
    setTimeout(() => {
      soundAlarm();
      console.log('I beeped...', time);
    }, time * 1000);
  }
};
timer();
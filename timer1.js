/**
 * Creates an alarm clock/timer that will beep after a specified amount of time has passed. 
 * The user can specify an unlimited number of alarms using command line arguments.
 */

// get command line arguments and store in an array
const beeps = process.argv.slice(2);

// iterate through the array of command line arguments to execute beep sound after specified time delay

// EDGE CASES
// do not beep if no numbers are provided
// if input is a negative number, ignore or skip that argument
// if the input is not a number, ignore or skip that argument

//alarm sound:
process.stdout.write('\x07');
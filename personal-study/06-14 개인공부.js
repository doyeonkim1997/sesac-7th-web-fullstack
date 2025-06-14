const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

switch (dayOfWeek) {
  case 'monday':
    console.log('Start of the work week!');
    break;
  case 'tuesday':
    console.log('Second day of the work week.');
    break;
  case 'wednesday':
    console.log('Midweek day.');
    break;
  case 'thursday':
    console.log('Almost there!');
    break;
  case 'friday':
    console.log('Last day of the work week!');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Weekend!');
    break;
  default:
    console.log('Invalid day.');
}

const fruit = prompt('Enter a fruit:').toLowerCase();
switch (fruit) {
  case 'apple':
    console.log('You chose an apple.');
    break;
  case 'banana':
    console.log('You chose a banana.');
    break;
  case 'orange':
    console.log('You chose an orange.');
    break;
  default:
    console.log('Unknown fruit.');
}

const grade = prompt('Enter your grade (A, B, C, D, F):').toUpperCase();

switch (grade) {
  case 'A':
    console.log('Excellent!');
    break;
  case 'B':
    console.log('Good job!');
    break;
  case 'C':
    console.log('You passed.');
    break;
  case 'D':
    console.log('You barely passed.');
    break;
  case 'F':
    console.log('You failed.');
    break;
  default:
    console.log('Invalid grade.');
}

const color = prompt('Enter a color (red, green, blue):').toLowerCase();


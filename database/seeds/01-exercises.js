
exports.seed = function(knex, Promise) {
    return knex('exercises').insert([
      {id: 1, exercise: 'Barbell Bench Press'},
      {id: 2, exercise: 'Dumbbell Bench Press'},
      {id: 3, exercise: 'Incline Barbell/Dumbbell Bench Press'},
      {id: 4, exercise: 'Flat Machine Press'},
      {id: 5, exercise: 'Incline Machine Press'},
      {id: 6, exercise: 'Decline Machine Press'},
      {id: 7, exercise: 'Chest Dips'},
      {id: 8, exercise: 'Push-Ups'},
      {id: 9, exercise: 'Flat Dumbbell Flyes'},
      {id: 10, exercise: 'Incline Dumbbell Flyes'},
      {id: 11, exercise: 'Decline Dumbbell Flyes'},
      {id: 12, exercise: 'Cable Crossover/Cable Flyes'},

      {id: 13, exercise: 'Pull-Ups'},
      {id: 14, exercise: 'Chin-Ups'},
      {id: 15, exercise: 'Lat Pull-Downs'},
      {id: 16, exercise: 'Bent Over Barbell/Dumbbell Rows'},
      {id: 17, exercise: 'T-Bar Rows'},
      {id: 18, exercise: 'Seated Cable Rows'},
      {id: 19, exercise: 'Chest Supported Barbell/Dumbbell/Machine Rows'},
      {id: 20, exercise: 'Inverted Rows'},
      {id: 21, exercise: 'Barbell/Dumbbell/Machine Rows'},

      {id: 22, exercise: 'Overhead Barbell/Dumbbell Press'},
      {id: 23, exercise: 'Dumbbell/Cable/Machine Front Raises'},
      {id: 24, exercise: 'Standing Curls'},
      {id: 25, exercise: 'Preacher Curls'},
      {id: 26, exercise: 'Dumbbell Hammer Curls'},
      {id: 27, exercise: 'Skull Crushers'},
      {id: 28, exercise: 'Cable Tricep Pulldowns'},
      {id: 29, exercise: 'Forearm Finger Roll Curls'},
      {id: 30, exercise: 'Overhead Tricep Extensions'},
      {id: 31, exercise: 'Weighted Bench Dips'},

      {id: 32, exercise: 'Barbell Squats'},
      {id: 33, exercise: 'Dumbbell Lunges'},
      {id: 34, exercise: 'Barbell Front Squats'},
      {id: 35, exercise: 'Dumbbell Step-Ups'},
      {id: 36, exercise: 'Leg Press'},
      {id: 37, exercise: 'Machine Squat/Hack Squat'},
      {id: 38, exercise: 'Leg Extensions'},
      {id: 39, exercise: 'Good-Mornings'},
      {id: 40, exercise: 'Barbell Deadlifts'},
      {id: 41, exercise: 'Leg Curls'},
      {id: 42, exercise: 'Calf Raises'},

      {id: 43, exercise: 'Machine Crunch'},
      {id: 44, exercise: 'Machine Oblique Crunch'},
      {id: 45, exercise: 'Plank'},
      {id: 46, exercise: 'Decline Sit-Ups'},
      {id: 47, exercise: 'Sit-Ups'},
      {id: 48, exercise: 'Leg Raises'},
      {id: 49, exercise: 'Hanging Leg Curls'},
      {id: 50, exercise: 'Hanging Bicycles'},
      {id: 51, exercise: 'Hanging Leg Raises'},
      {id: 52, exercise: 'Side Plank'},
      {id: 53, exercise: 'Kneeling Cable Crunch'}
    ]);
};
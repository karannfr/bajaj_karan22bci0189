const full_name = "karan_dugar";
const dob = "27122004";
const email = "karan.dugar2022@vitstudent.ac.in";
const roll_number = "22BCI0189";

function isNumber(value) {
  return /^-?\d+$/.test(value);
}

function isAlphabet(value) {
  return /^[a-zA-Z]+$/.test(value);
}

function isSpecialChar(value) {
  return !isNumber(value) && !isAlphabet(value);
}

function alternatingCapsReverse(str) {
  let res = '';
  let toggle = true;
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    res += toggle ? char.toUpperCase() : char.toLowerCase();
    toggle = !toggle;
  }
  return res;
}

exports.handleBFHL = (req, res) => {
  try {
    const inputData = req.body.data;

    if (!Array.isArray(inputData)) {
      return res.status(400).json({
        is_success: false,
        user_id: `${full_name}_${dob}`,
        error: "Invalid input. Expected 'data' to be an array."
      });
    }

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];

    let number_sum = 0;
    let alphabetConcat = '';

    inputData.forEach(item => {
      const strItem = String(item);
      if (isNumber(strItem)) {
        const num = parseInt(strItem);
        if (num % 2 === 0) {
          even_numbers.push(strItem);
        } else {
          odd_numbers.push(strItem);
        }
        number_sum += num;
      } else if (isAlphabet(strItem)) {
        alphabets.push(strItem.toUpperCase());
        alphabetConcat += strItem;
      } else {
        special_characters.push(strItem);
      }
    });

    const response = {
      is_success: true,
      user_id: `${full_name}_${dob}`,
      email: email,
      roll_number: roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: number_sum.toString(),
      concat_string: alternatingCapsReverse(alphabetConcat)
    };

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      user_id: `${full_name}_${dob}`,
      error: "Server error"
    });
  }
};

function dayOfTheProgrammer(year) {
    const day = leapYear(year) ? 12 : 13;
    return `${day}.09.${year}`;
}

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
console.log(dayOfTheProgrammer(2017));
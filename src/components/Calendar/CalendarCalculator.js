import React from "react";

import CalendarLine from "./CalendarLine";

const CalendarCalculator = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const datesInMonthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const indexFinder = (month) => {
    let indexToFind = 0;

    while (month !== months[indexToFind]) {
      indexToFind++;
    }
    return indexToFind;
  };

  const startCalendarArray = (startDate) => {
    let startCal;

    if (startDate === 0) {
      startCal = [];
    } else if (startDate === 1) {
      startCal = [""];
    } else if (startDate === 2) {
      startCal = ["", ""];
    } else if (startDate === 3) {
      startCal = ["", "", ""];
    } else if (startDate === 4) {
      startCal = ["", "", "", ""];
    } else if (startDate === 5) {
      startCal = ["", "", "", "", ""];
    } else {
      startCal = ["", "", "", "", "", ""];
    }

    return startCal;
  };

  const isLeapYear = (checkYear) => {
    if (checkYear % 4 === 0) {
      return true;
    } else {
      if (checkYear % 100 === 0) {
        return true;
      } else {
        if (checkYear % 400 === 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  const addDay = (checkDay) => {
    if (checkDay === 6) {
      return 0;
    } else {
      return checkDay + 1;
    }
  };

  const removeDay = (checkDay) => {
    if (checkDay === 0) {
      return 6;
    } else {
      return checkDay - 1;
    }
  };

  //   //---Return End Day of the Month :: 0 -> Sunday ---//
  //   const endDayOfMonth = (thisMonth, startDay, thisYear) => {
  //     const findIndex = indexFinder(thisMonth);
  //     let start = startDay;
  //     let endDay;

  //     if (isLeapYear(thisYear)) {
  //       for (var i = 0; i < datesInMonthLeap[findIndex] - 1; i++) {
  //         endDay = addDay(start);
  //       }
  //     } else {
  //       for (var j = 0; j < datesInMonth[findIndex] - 1; j++) {
  //         endDay = addDay(start);
  //       }
  //     }
  //     return endDay;
  //   };

  //---Return Start Day of the Year :: 0 -> Sunday ---//
  const startDayYear = (thisStartYear) => {
    let checkYear = 2023;
    let endDay = 6;
    let startDay = 6;

    while (checkYear <= thisStartYear) {
      if (isLeapYear(checkYear)) {
        startDay = addDay(endDay);
        endDay = addDay(startDay);
      } else {
        startDay = addDay(endDay);
        endDay = startDay;
      }
      checkYear++;
    }
    return startDay;
  };

  //---Return Start Day of the Month :: 0 -> Sunday ---//
  const startDayMonth = (thisStartMonth, thisStartYear) => {
    let startDay = startDayYear(thisStartYear);
    let endDay;
    let loop = indexFinder(thisStartMonth) + 1;
    let counter = 0;

    while (counter < loop) {
      if (isLeapYear(thisStartYear) && counter === 1) {
        endDay = startDay;
      } else {
        if (datesInMonth[counter] === 31) {
          endDay = addDay(startDay);
          endDay = addDay(endDay);
        } else if (datesInMonth[counter] === 28) {
          endDay = removeDay(startDay);
        } else {
          endDay = addDay(startDay);
        }
      }

      if (loop - (counter + 1) === 0) {
        counter++;
      } else {
        startDay = addDay(endDay);
        counter++;
      }
    }

    return startDay;
  };

  const calendarArray = (thisMonth, thisYear) => {
    let monthIndex = indexFinder(thisMonth);
    let calendar = startCalendarArray(startDayMonth(thisMonth, thisYear));
    let date = 1;

    if (isLeapYear(thisYear)) {
      for (var i = 1; i <= datesInMonthLeap[monthIndex]; i++) {
        calendar.push(date);
        date++;
      }
    } else {
      for (var j = 1; j <= datesInMonth[monthIndex]; j++) {
        calendar.push(date);
        date++;
      }
    }

    let finalCalendar = [];
    let container = [];
    let counter = 0;
    let additional = 42 - calendar.length;

    while (additional > 0) {
      calendar.push("");
      additional--;
    }

    for (var calIndex = 0; calIndex < 42; calIndex++) {
      if (counter < 7) {
        container.push(calendar[calIndex]);
        counter++;
      } else {
        finalCalendar.push(container);
        container = [];
        container.push(calendar[calIndex]);
        counter = 1;
      }
    }
    finalCalendar.push(container);

    return finalCalendar;
  };

  const createKeys = (dateArray) => {
    let keyArray = [];
    let keepArray = [];
    let keyToStore;

    for (var i = 0; i < dateArray.length; i++) {
      for (var j = 0; j < 7; j++) {
        keyToStore =
          props.year.toString() + props.month + dateArray[i][j].toString(); //2023March1
        if (dateArray[i][j] === "") {
          keepArray.push("no" + i.toString() + j.toString()); // no00
        } else {
          keepArray.push(keyToStore);
        }
      }
      keyArray.push(keepArray);
      keepArray = [];
    }
    return keyArray;
  };

  const cal = calendarArray(props.month, props.year);
  const keys = createKeys(cal);

  return (
    <React.Fragment>
      <tbody>
        <tr>
          {cal[0].map((date, index) => (
            <CalendarLine
              date={date}
              key={keys[0][index]}
              id={keys[0][index]}
            />
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {cal[1].map((date, index) => (
            <CalendarLine
              date={date}
              key={keys[1][index]}
              id={keys[1][index]}
            />
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {cal[2].map((date, index) => (
            <CalendarLine
              date={date}
              key={keys[2][index]}
              id={keys[2][index]}
            />
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {cal[3].map((date, index) => (
            <CalendarLine
              date={date}
              key={keys[3][index]}
              id={keys[3][index]}
            />
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {cal[4].map((date, index) => (
            <CalendarLine
              date={date}
              key={keys[4][index]}
              id={keys[4][index]}
            />
          ))}
        </tr>
      </tbody>
      {cal[5][0] !== "" && (
        <tbody>
          <tr>
            {cal[5].map((date, index) => (
              <CalendarLine
              date={date}
              key={keys[5][index]}
              id={keys[5][index]}
            />
            ))}
          </tr>
        </tbody>
      )}
    </React.Fragment>
  );
};

export default CalendarCalculator;

/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(row){
  return {
    firstName:row[0],
    familyName:row[1],
    title:row[2],
    payPerHour:row[3],
    timeInEvents:[],
    timeOutEvents:[]
  };
};

let createEmployeeRecords = function(employeeRowData){
  return employeeRowData.map((row)=>createEmployeeRecord(row));
};

let createTimeInEvent=function(dateStamp){
  let [date,hour]=dateStamp.split(' ');
  this.timeInEvents.push({
    type:"TimeIn",
    hour:parseInt(hour,10),
    date,
  });
  return this;
};

let createTimeOutEvent=function(dateStamp){
  let [date,hour]=dateStamp.split(' ');
  this.timeInEvents.push({
    type:"TimeOut",
    hour:parseInt(hour,10),
    date,
  });
  return this;
};

let hoursWorkedOnDate = function(date){
  let inEvent=this.timeInEvents.find()
}







let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
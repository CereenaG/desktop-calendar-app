function dateAndMonth(){
    const now=new Date()
    const date=now.getDate()
    const monthName=[ "January",
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
  "December"];
  const month=monthName[now.getMonth()];
  const days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
  const day=days[now.getDay()];
  
  document.getElementById('date').textContent=date
  document.getElementById('month').textContent=month
  document.getElementById('day').textContent=day

}
dateAndMonth();
const mapNumbers = new Map([
   [0,'zero'],
   [1,'one'],
   [2,'two'],
   [3,'three'],
   [4,'four'],
   [5,'five'],
   [6,'six'],
   [7,'seven'],
   [8,'eight'],
   [9,'nine'],
   [10,'ten'],
   [11,'eleven'],
   [12,'twelve'],
   [13,'thirteen'],
   [14,'fourteen'],
   [15,'fifteen'],
   [16,'sixteen'],
   [17,'seventeen'],
   [18,'eighteen'],
   [19,'nineteen'],   
   [20,'twenty'],
   [30,'thirty'],
   [40,'fourty'],
   [50,'fifty'],
   [60,'sixty'],
   [70,'seventy'],
   [80,'eighty'],
   [90,'ninty'],
   //[100,'hundred'],
])

module.exports = function toReadable (number) {
  if (number < 20) {
     return mapNumbers.get(number);  
  } 
  else if (number >= 20 && number < 100) {
     let units = number % 10;
     return `${mapNumbers.get(number - units)} ${mapNumbers.get(units)}`; 
   }
  else if (number < 1000) {
     let hundreds = Math.floor(number / 100); 
     let dozens = number - hundreds;
     hundreds = `${mapNumbers.get(hundreds)} hundred`;
     if (dozens % 10 === 0) {
        return `${hundreds} ${dozens}`;
     }
     else 
   units = dozens % 10;
     return `${hundreds} ${dozens} ${mapNumbers.get(units-1)}`;
  }

}

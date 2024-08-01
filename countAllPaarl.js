export function countAllPaarl(registrationNumbers) {
    
    const regNumbers = registrationNumbers.split(',');
    
   
    let count = 0;
    
    for (let i = 0; i < regNumbers
         .length; i++) {
        
        const trimmedNumber = regNumbers[i].trim();
        
        if (trimmedNumber.startsWith('CJ')) {
            
            count++;
        }
    }
    
    return count;
}


const registrationNumbers = "CA 1234, CJ 5678, CJ 9101, CY 2345";
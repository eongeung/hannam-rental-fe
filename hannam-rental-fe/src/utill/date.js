export const RentalDates = () => { 
    const today = new Date();
    const rentalDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    
    const returnDay = new Date(today);
    returnDay.setDate(today.getDate() + 4);
    const returnDate = `${returnDay.getFullYear()}년 ${returnDay.getMonth() + 1}월 ${returnDay.getDate()}일`;

    return { rentalDate, returnDate };
}
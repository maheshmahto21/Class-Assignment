//Q-11 : Implement a class representing a Date with member functions to set and display the date


class CustomDate {
    constructor(year, month, day) {
        this.setDate(year, month, day);
    }


    setDate(year, month, day) {
        if (this.isValidDate(year, month, day)) {
            this.year = year;
            this.month = month;
            this.day = day;
        } else {
            throw new Error("Invalid date");
        }
    }

 
    displayDate() {
        return `${this.year}-${this.formatNumber(this.month)}-${this.formatNumber(this.day)}`;
    }


    formatNumber(num) {
        return num < 10 ? `0${num}` : num;
    }


    isValidDate(year, month, day) {
        const date = new Date(year, month - 1, day);
        return date.getFullYear() === year && 
               date.getMonth() === month - 1 && 
               date.getDate() === day;
    }
}


try {
    const myDate = new CustomDate(2023, 9, 26);
    console.log(myDate.displayDate()); 

    myDate.setDate(2024, 12, 25);
    console.log(myDate.displayDate()); 
} catch (error) {
    console.error(error.message);
}

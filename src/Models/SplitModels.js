// models.js
export class Member {
    constructor(userId, name) {
        this.userId = userId;
        this.name = name;
    }

    topMap() {
        return {
            userId: this.userId,
            name: this.name
        }
    }
}

export class Transaction {
    constructor(userId, payer, amount, description, date, split = []) {
        this.userId = userId;
        this.payer = payer;
        this.amount = amount;
        this.description = description;
        this.date = DateFormat(date);
        this.split = split;
    }

    toMap() {
        return {
            isLock: false,
            userId: this.userId,
            payer: this.payer,
            amount: Number(this.amount),
            description: this.description,
            date: this.date,
            split: this.split
        };
    }
}

export class Split {
    constructor(userId = "", userName = "", share = 0) {
        this.userId = userId;
        this.userName = userName;
        this.share = share;
    }

    toMap() {
        return {
            userName: this.userName,
            userId: this.userId,
            share: this.share,
        };
    }
}

export class SplitData {
    constructor(name, members = [], date = new Date()) {
        this.name = name;
        this.members = members;
        this.date = DateFormat(date)
    }

    toMap() {
        return {
            name: this.name,
            members: this.members,
            date: this.date
        };
    }
}

export class TransactionDetail {
    constructor(userId = "", userName = "", splitAmount = 0) {
        this.userId = userId;
        this.userName = userName;
        this.splitAmount = splitAmount;
    }
}

export const setCardStyle = (Target, ItemStyle, ItemShow) => {
    const animationTime = 800;

    Target.forEach((ele, index) => {
        if (!ItemStyle[ele.id]) {
            ItemStyle[ele.id] = `animation: showCard ${animationTime / 1000}s ease-in-out ${index * 250}ms;`;
        }
        ItemShow[ele.id] = true;

        setTimeout(() => {
            delete ItemStyle[ele.id];
            delete ItemShow[ele.id];
        }, animationTime + index * 250)
    });

};

export const DateFormat = (date) => {
    const formatter = new Intl.DateTimeFormat("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
    const formattedDate = formatter.format(date).replace(/\//g, "-").replace(",", "");
    return formattedDate;
}
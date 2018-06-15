export class Customer {
    public email: string;
    public currentPrize: string;
    public contractorId: string;
    //will need to create a "Prize" class to reference here (or just create it as part of the Customer model), in order to create an array of those Prizes
    public prizes = [
        [1, false], [2, false], [3, false], [4, false],
        [5, false], [6, false], [7, false], [8, false],
        [9, false], [10, false], [11, false], [12, false],
        [13, false], [14, false], [15, false], [16, false]
    ];
    public token: string;
    public lastPlay: Date;
}


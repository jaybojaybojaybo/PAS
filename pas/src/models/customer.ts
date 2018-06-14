export class Customer {
    public email: string;
    public currentPrize: string;
    public contractorId: string;
    //will need to create a "Prize" class to reference here (or just create it as part of the Customer model), in order to create an array of those Prizes
    public prizes = [];
}
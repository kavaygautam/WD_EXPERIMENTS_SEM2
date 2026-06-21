abstract class BankAccount {
    int accountNumber;
    String holderName;
    double balance;

    BankAccount(int accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    void deposit(double amount) {
        balance += amount;
    }

    void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + holderName);
        System.out.println("Balance: " + balance);
    }

    abstract void calculateInterest();
}

class SavingsAccount extends BankAccount {
    SavingsAccount(int accountNumber, String holderName, double balance) {
        super(accountNumber, holderName, balance);
    }

    void calculateInterest() {
        double interest = balance * 0.03; 
        System.out.println("Savings Account Interest: " + interest);
    }
}

class CurrentAccount extends BankAccount {
    CurrentAccount(int accountNumber, String holderName, double balance) {
        super(accountNumber, holderName, balance);
    }

    void calculateInterest() {
        double interest = balance * 0.02; 
        System.out.println("Current Account Interest: " + interest);
    }
}

public class Exp10 {
    public static void main(String[] args) {
        SavingsAccount sAcc = new SavingsAccount(101, "Rahul", 12000);
        System.out.println("------ Savings Account ------");
        sAcc.displayDetails();
        sAcc.calculateInterest();

        System.out.println();

        CurrentAccount cAcc = new CurrentAccount(102, "Anita", 23000);
        System.out.println("------ Current Account ------");
        cAcc.displayDetails();
        cAcc.calculateInterest();
    }
}

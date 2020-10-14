package com.ocheretenyuk;

import java.util.Scanner;

public class HourlyWorker implements Salary{
    private int numberOfHours;
    private int paymentPerHour;
    private String fullname;

    @Override
    public void salary() {
        System.out.println(getFullname() + " must receive: " + (getPaymentPerHour() * getNumberOfHours()) + "$");
    }

    public void setAllInfo(Scanner sc){
        System.out.println("Enter employee information with hourly pay.");

        System.out.print("Fullname: ");
        setFullname(sc.nextLine());

        System.out.print("Payment per hour: ");
        setPaymentPerHour(sc.nextInt());

        System.out.print("Number of hours: ");
        setNumberOfHours(sc.nextInt());
    }

    public int getPaymentPerHour() {
        return paymentPerHour;
    }

    public void setPaymentPerHour(int paymentPerHour) {
        this.paymentPerHour = paymentPerHour;
    }

    public int getNumberOfHours() {
        return numberOfHours;
    }

    public void setNumberOfHours(int numberOfHours) {
        this.numberOfHours = numberOfHours;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}

package com.ocheretenyuk;

import java.util.Scanner;

public class RateWorker implements Salary {
    private int rateOnMonth;
    private String fullname;

    public void setAllInfo(Scanner sc){
        System.out.println("\nEnter employee information with a monthly rate.");

        System.out.print("Fullname: ");
        setFullname(sc.nextLine());

        System.out.print("Rate on month: ");
        setRateOnMonth(sc.nextInt());

    }

    @Override
    public void salary() {
        System.out.println(getFullname() + " must receive: " + getRateOnMonth() + "$");
    }

    public int getRateOnMonth() {
        return rateOnMonth;
    }

    public void setRateOnMonth(int rateOnMonth) {
        this.rateOnMonth = rateOnMonth;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}

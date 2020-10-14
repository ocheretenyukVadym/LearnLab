package com.ocheretenyuk;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        HourlyWorker hourlyWorker = new HourlyWorker();
        RateWorker rateWorker = new RateWorker();

        hourlyWorker.setAllInfo(new Scanner(System.in));
        hourlyWorker.salary();

        rateWorker.setAllInfo(new Scanner(System.in));
        rateWorker.salary();
    }
}

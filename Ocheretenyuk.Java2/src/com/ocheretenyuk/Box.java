package com.ocheretenyuk;

public class Box {

    protected int volume;

    public Box() {
        super();
    }

    public Box(int volume) {
        this.volume = volume;
        System.out.println("Box is created! Volume: " + this.volume);
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public int getVolume() {
        return this.volume;
    }

    public boolean add(Shape obj) {
        if (this.volume - obj.volume < 0) {
            System.out.println("Sorry, the box is full");
            return false;
        } else {
            setVolume(this.volume - obj.volume);
            System.out.println("Added! Current volume: " + getVolume());
        }
        return true;
    }
}

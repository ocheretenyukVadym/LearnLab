package com.ocheretenyuk;

public class ElementNotFoundExeption extends Error {

    public ElementNotFoundExeption(){
        super();
    }
    public ElementNotFoundExeption(String message){
        super(message);
    }
    public ElementNotFoundExeption(String message, Throwable cause) {
        super(message, cause);
    }
}

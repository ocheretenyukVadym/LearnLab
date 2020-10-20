package com.ocheretenyuk;

public class ElementNotFoundException extends Error {

    public ElementNotFoundException(){
        super();
    }
    public ElementNotFoundException(String message){
        super(message);
    }
    public ElementNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

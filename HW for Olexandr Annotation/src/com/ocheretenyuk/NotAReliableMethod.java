package com.ocheretenyuk;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface NotAReliableMethod {
    public String name() default "";
    public String message() default "Warning! Not a reliable method! ";
    public String offer() default " Use other method";
}

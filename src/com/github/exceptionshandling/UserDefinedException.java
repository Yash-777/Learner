package com.github.exceptionshandling;

public class UserDefinedException extends Exception {

	private static final long serialVersionUID = -2040806780682598822L;
	public UserDefinedException(String message) {
		super(message);
	}
}
class WebDriverException extends RuntimeException {

	private static final long serialVersionUID = 1448252457771538150L;
	public WebDriverException(String message) {
		super(message);
	}
	
	public WebDriverException(Throwable cause) {
		super(cause);
	}
}
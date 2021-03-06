package com.github.os.threads;

import java.util.Random;

/**
 * http://www.oracle.com/technetwork/articles/java/fork-join-422606.html
 * 
 * @author yashwanth.m
 *
 */
public class Thread_vs_Runnable {
	public static void main(String[] args) {
		// Single Object shared over multiple threads � Runnable Interface
		ImplementsRunnable a = new ImplementsRunnable();
		
		Thread r1 = new Thread(a);
		Thread r2 = new Thread(a);
		
		// For ever thread we create new object � Thread Class
		Thread t1 = new ExtendsThread(10,20);
		Thread t2 = new ExtendsThread(40,50);
		
		r2.run();
		System.out.println("Polymorphism "
				+ "� Calls Thread.run() method, which furthur calls Runnable object's run method."
				+ "� Which is ImplementsRunnable.run().");
		
		t2.run();
		System.out.println("Polymorphism � ExtendsThread.run() : Object.run() is Called.");
		
		// private native void start0(); - Separate thread.
		r1.start();
		r2.start();
		
		t1.start();
		t2.start();
	}
}

/**
 * you must have to create separate instance for every thread access.
 * Hence different memory is allocated for every class instances and each has separate counter,
 * the value remains same, which means no increment will happen because none of the object reference is same.
 * 
 * @author yashwanth.m
 *
 */
class ExtendsThread extends Thread {
	int field1, field2;
	
	ExtendsThread( int field1, int field2 ) {
		this.field1 = field1;
		this.field2 = field2;
	}
	
	@Override
	public void run() {
		System.out.print( Thread.currentThread().getName() + ": ");
		System.out.println("Current thread values ["+field1+" : "+field2+"]");
	}
}

/**
 * You usually extend a class to add or modify functionality.
 * So, if you don't want to overwrite any Thread behavior, then use Runnable.
 * 
 * @author yashwanth.m
 *
 */
class ImplementsRunnable implements Runnable {
	int ir1 = 0;
	
	Random random = new Random();
	int max = 100, min = 1;
	@Override
	public void run() {
		for (int i = 0; i < 5; i++) {
			//Integer token_id = random.nextInt( Integer.MAX_VALUE );
			int randomNum = random.nextInt((max - min) + 1) + min;
			ir1 = randomNum;
			sleepThread(10);
			System.out.println(i+" "+Thread.currentThread().getName() +" � Val : "+ir1);
		}
	}
	void sleepThread(int sec) {
		try {
			Thread.sleep( 1000 * sec );
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
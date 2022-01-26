package com.example.demo;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(value = { "all" })
public class Password {
	public String password;
	public String passwordHashed;
	
	public Password()
	{
		password = "";
		passwordHashed = "";
	}
	
	public Password(String password)
	{
		this.password = "";
        String passwordHashed = null;  
        try   
        {  
            MessageDigest m = MessageDigest.getInstance("MD5");  
            m.update(password.getBytes());  
            byte[] bytes = m.digest();  
            StringBuilder s = new StringBuilder();  
            for(int i=0; i< bytes.length ;i++)  
            {  
                s.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));  
            }  
              
            /* Complete hashed password in hexadecimal format */  
            passwordHashed = s.toString();  
        }   
        catch (NoSuchAlgorithmException e)   
        {  
            e.printStackTrace();  
        }  
        this.passwordHashed = passwordHashed;
        System.out.println("Plain-text password: " + password);  
        System.out.println("Encrypted password using MD5: " + passwordHashed);  
	}

}

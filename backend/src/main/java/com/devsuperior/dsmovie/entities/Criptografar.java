package com.devsuperior.dsmovie.entities;

import java.math.BigInteger;
import java.security.MessageDigest;

public class Criptografar {
	
	public static String criptografia(String senha)
	{
		String retorno = "";
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("MD5");
			BigInteger hash = new BigInteger(1,md.digest(senha.getBytes()));
			retorno = hash.toString(32);
		}
		catch(Exception e) {}
		return retorno;
	}
}

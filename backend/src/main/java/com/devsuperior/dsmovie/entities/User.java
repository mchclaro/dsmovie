package com.devsuperior.dsmovie.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user")

public class User {
	
	@Id
	@GeneratedValue(strategy = 	GenerationType.IDENTITY)
	
	private Long id;
	private String email;
	private String nome;
	private String endereco;
	private String sexo;
	private String telefone;
	private String senha;
	
	public User() 
	{
	}

	public User(Long id, String email, String nome, String endereco, String sexo, 
			String telefone, String senha) {
		this.id = id;
		this.email = email;
		this.nome = nome;
		this.endereco = endereco;
		this.sexo = sexo;
		this.telefone = telefone;
		this.senha = senha;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}	
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	
	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	
	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}

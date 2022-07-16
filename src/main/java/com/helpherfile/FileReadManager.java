package com.helpherfile;

import java.io.IOException;

public class FileReadManager {
	
	//PSDP
	//private
	private FileReadManager() {
		
	}
	
	//static 
	public static FileReadManager getInstance_FRM() {
		FileReadManager frm=new FileReadManager();
		return frm;

	}
	
	
	//non static
	
	public ConfigurationReader getInstance_CR() throws IOException {
		ConfigurationReader reader=new ConfigurationReader();
		return reader;

	}
	

}

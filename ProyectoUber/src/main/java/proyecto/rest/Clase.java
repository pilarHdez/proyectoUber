package proyecto.rest;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.json.JSONArray;
import org.json.JSONObject;

import proyecto.bd.Datos;

@Path("/clase")
public class Clase{
	
	
	/*http://localhost:8080/proyecto/app/clase/all*/
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public String all() {
		
		ArrayList<Datos> datos = new ArrayList<>();
		datos.add(new Datos("nombre1", "primerApellido1", "segundoApellido1", "correo1@correo.com"));
		datos.add(new Datos("nombre2", "primerApellido2", "segundoApellido2", "correo2@correo.com"));
		datos.add(new Datos("nombre3", "primerApellido3", "segundoApellido3", "correo3@correo.com"));
		datos.add(new Datos("nombre4", "primerApellido4", "segundoApellido4", "correo4@correo.com"));
		datos.add(new Datos("nombre5", "primerApellido5", "segundoApellido5", "correo5@correo.com"));
		
		JSONArray json = new JSONArray(datos);
		return json.toString();
	}
	
	/*http://localhost:8080/proyecto/app/clase/getOne/?id=x*/
	@GET
	@Path("/getOne")
	@Produces(MediaType.APPLICATION_JSON)
	public String getOne(@QueryParam("id")String id) {
		
		JSONObject json = new JSONObject(new Datos("nombre"+id, "primerApellido"+id, "segundoApellido"+id, "correo"+id+"@correo.com"));
		return json.toString();
	}
	
	/*http://localhost:8080/proyecto/app/clase/setOneData*/
	@POST
	@Path("/setOneData")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String setOneData(@FormParam("valor") String valor) {
		JSONObject json = new JSONObject();
		json.put("object", new Datos(valor, "primerApellido1", "segundoApellido1", "correo1@correo.com"));
		return json.toString();
	}
	
	/*http://localhost:8080/proyecto/app/clase/setData*/
	@POST
	@Path("/setData")
	@Produces(MediaType.APPLICATION_JSON)
	public String setData(@FormParam("nombre") String nombre,
						  @FormParam("primerApellido") String primerApellido,
						  @FormParam("segundoApellido") String segundoApellido) {
		JSONObject json = new JSONObject();
		json.put("message", "Carga exitosa");
		return json.toString();
	}
	
	
	
}
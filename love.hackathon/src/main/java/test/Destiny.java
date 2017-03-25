package test;

import java.util.HashSet;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.love.hackathon.Matcher;
import com.love.hackathon.data.User;

@Path("/publish")
public class Destiny {
	private Matcher matcher= new Matcher(new HashSet<User>()); 
 
	
    @GET
    @Path("/{message}")
    public Response publishMessage(@PathParam("message") String msgStr){
         
        String responseStr = "Received message: "+msgStr;
        return Response.status(200).entity(responseStr).build();
    }
    
	
	
	@POST
	@Path("/findeMatches")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONArray getMatches(JSONObject inputJsonObj) throws Exception {
		return matcher.findMatches(inputJsonObj);
	}

	@POST
	@Path("/neuerUser")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response register(JSONObject inputJsonObj) throws Exception {
		User addNewUser = matcher.addNewUser(inputJsonObj);
		
		String responseStr = "Received message: ";
		
        return Response.status(200).entity(responseStr).build();
	}
}
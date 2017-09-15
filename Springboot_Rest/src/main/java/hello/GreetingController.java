package hello;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
	
	

	    @RequestMapping("/login")
		public String hi() {
			return "Hello World from Restful API";
		}
}

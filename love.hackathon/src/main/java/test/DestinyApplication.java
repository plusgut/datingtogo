package test;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;


public class DestinyApplication  extends Application {

		private Set<Object> singletons = new HashSet<Object>();

		public DestinyApplication() {
			singletons.add(new Destiny());
		}

		@Override
		public Set<Object> getSingletons() {
			return singletons;
		}
}

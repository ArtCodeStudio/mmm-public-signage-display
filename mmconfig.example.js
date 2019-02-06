/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "de",
	timeFormat: 24,
	units: "metric",
	modules: [
		{
			module: "mmm-marquee",
			position: "fullscreen_above",
		},
		{
			module: "alert",
			config: {
				welcome_message: "Willkommen",
			}
		},
		// {
		// 	module: "updatenotification",
		// 	position: "top_bar"
		// },
		{
			module: "clock",
			position: "top_left",
		},
		{
			module: "calendar",
			header: "Feiertage",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar",
						url: "http://i.cal.to/ical/53/niedersachsen/feiertage/3b57dd8d.8037e115-f56029e7.ics",
						maximumEntries: 1
					},
				]
			}
		},
		{
			module: "calendar",
			header: "Ferien",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar",
						url: "http://i.cal.to/ical/68/niedersachsen/ferien/3b57dd8d.8037e115-59747cad.ics",
						maximumEntries: 1
					},
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {

			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: false,
				locationID: "2939658",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "4efe07e05e6435a91a41034c3a3e6fe0"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Wettervorhersage",
			config: {
				location: false,
				locationID: "2939658",  //ID from https://openweathermap.org/city
				appid: "4efe07e05e6435a91a41034c3a3e6fe0"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar", // fullscreen_below
			config: {
				feeds: [
					// Nachrichten
					// {
					// 	title: "ZEIT ONLINE",
					// 	url: "http://newsfeed.zeit.de/index"
					// },
					// {
					// 	title: "FAZ.NET",
					// 	url: "https://www.faz.net/rss/aktuell"
					// },
					// {
					// 	title: "n-tv.de",
					// 	url: "https://www.n-tv.de/rss"
					// },
					// Wissenschaft und Forschung
					// {
					// 	title: "Spektrum.de",
					// 	url: "https://www.spektrum.de/alias/rss/spektrum-de-rss-feed/996406"
					// },
					// Positive News
					// {
					// 	title: "ZEIT ONLINE",
					// 	url: "http://newsfeed.zeit.de/serie/gute-nachrichten"
					// },
					{
						title: "Nachrichten",
						// title: "Nur positive Nachrichten",
						url: "https://nur-positive-nachrichten.de/component/com_obrss/format,feed/id,3/task,feed/"
					},
					{
						title: "Nachrichten",
						// title: "Gute Nachrichten",
						url: "https://www.gute-nachrichten.com.de/feed/"
					},
					// Online
					// {
					// 	title: "t3n",
					// 	url: "https://t3n.de/rss.xml"
					// },
					// Tech
					// {
					// 	title: "Golem.de",
					// 	url: "https://rss.golem.de/rss.php?feed=RSS2.0",
					// }
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: true,
				truncDescription: false,
				updateInterval: 60000, // 30 seconds
			}
		},
		{
			module: "MMM-PublicTransportHafas",
			position: "top_right",

			config: {
				stationID: "000619624",                   // Replace with your stationID!
				stationName: "Abfahrtszeiten Cuxhaven Bahnhof/ZOB",   // Replace with your station name!

				direction: "",                    // Show only departures heading to this station. (A station ID.)
				ignoredLines: [],                 // Which lines should be ignored? (comma-separated list of line names)
				// Which transportation types should not be shown on the mirror? (comma-separated list of types) possible values: StN for tram, BuN for bus, s for suburban
				excludedTransportationTypes: [

				],
				timeToStation: 0,                 // How long do you need to walk to the next Station?

				showColoredLineSymbols: true,     // Want colored line symbols?
				useColorForRealtimeInfo: true,    // Want colored real time information (timeToStation, early)?
				showTableHeadersAsSymbols: true,  // Table Headers as symbols or text?
				maxUnreachableDepartures: 0,      // How many unreachable departures should be shown?
				maxReachableDepartures: 10,        // How many reachable departures should be shown?
				customLineStyles: "",             // Prefix for the name of the custom css file. ex: Leipzig-lines.css (case sensitive)
				showOnlyLineNumbers: false,       // Display only the line number instead of the complete name, i. e. "11" instead of "STR 11"
				timeInFuture: 1440,									// An integer indicating how far in the future a departure can be to be still included in the shown departures.
			},
		},
		{
			module: "MMM-Globe",
			position: "middle_center",
			config: {
				style: "geoColor",
				imageSize: 600,
				ownImagePath: "",
				updateInterval: 10*60*1000,
			}
		},
		{
			module: "mmm-public-signage-display",
			position: "middle_center"
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

// // var awesomeThoughts = "I am Abhilash and I am AWESOMe";
// // console.log(awesomeThoughts);
// // var funThoughts = awesomeThoughts.replace("AWESOMe","Fun");
// // console.log(funThoughts);
// // $("#main").append(funThoughts);

// var name = "Abhilash Nama";
// var formattedName = HTMLheaderName.replace("%data%",name);
// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%",role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var bio = {
// 	"name" : "Abhilash Nama",
// 	"role" : "Web Developer",
// 	"contact_info" : {
// 		"email" : HTMLemail.replace("%data%","ahilashnama@gmail.com"),
// 		"phone" : HTMLmobile.replace("%data%","(435) 764-0333"),
// 		},
// 	"pic_url" : HTMLbioPic.replace("%data%",'images/me.jpg'),
// 	"welcome_message" : HTMLWelcomeMsg.replace("%data%","I am excited to build great web sites and to be a part of a talented and energetic team"),
// 	"skills" : HTMLskills.replace("%data%",["talented", "motivated", "energetic", "up-beat"])
// }

// var formattedEmail = HTMLemail.replace("%data%", bio.contact_info.email);
// var formattedPhone = HTMLmobile.replace("%data%", bio.contact_info.phone);


// $("#header").append(bio.contact_info.email);
// $("#header").append(bio.contact_info.phone);
// $("#header").append(bio.pic_url);
// $("#header").append(bio.welcome_message);
// $("#header").append(HTMlskillsStart);
// $("#header").append(bio.skills);




var bio = {
	"name" : "Abhilash Nama",
	"role" : "Front End Web Developer",
	"welcomeMsg" : "Committed, hard-working, and energetic professional with excellent individual and team player skills. I am excited to build great web sites and to be a part of a talented and energetic team.",
	"contacts" : {
		"mobile" : "(435) 764-0333",
		"email" : "abhilashnama@gmail.com",
		"github" : "elegant13",
		"location" : "Herndon, VA"},
	"biopic" : "images/bio2.jpg",
	"skills" : ["HTML", "CSS", "Javascript", "jQuery", "Python"]
};

var education = {
	"schools": [
		{
			"name" : "Utah State University",
			"location" : "Logan, UT",
			"degree" : "Masters",
			"major" : "Transportation Engineering",
			"dates" : "2007",
			"url" : "www.usu.edu"
		},
		{
			"name" : "Osmania University",
			"location" : "Hyderabad, India",
			"degree" : "Bachelors",
			"major" : "Civil Engineering",
			"dates" : "2005",
			"url" : "www.osmania.ac.in"
		}],
	"onlineClasses": [
		{
		"title" : "Programming Foundations with Python",
		"school" : "Udacity",
		"date" : "Sep 2015",
		"url" : "www.udacity.com"
		},
		{
		"title" : "HTML & CSS Fundamentals",
		"school" : "Udacity",
		"date" : "Oct 2015",
		"url" : "www.udacity.com"
		},
		{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity",
		"date" : "Nov 2015",
		"url" : "www.udacity.com"
		},
		{
		"title" : "Responsive Images",
		"school" : "Udacity",
		"date" : "Nov 2015",
		"url" : "www.udacity.com"
		},
		{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"date" : "Dec 2015",
		"url" : "www.udacity.com"
		},
		{
		"title" : "Intro to jQuery",
		"school" : "Udacity",
		"date" : "Dec 2015",
		"url" : "www.udacity.com"
		}		
]};

var work = {
	"jobs": [
	{
		"employer" : "SELF",
		"title" : "Front End Web Developer",
		"location" : "Herndon, VA",
		"dates" : "Nov 2015 - Present",
		"description" : "Worked on developing Python programming skills at Udacity. Acquired front-end web development skills by completing courses like HTML & CSS Fundamentals, Responsive Web Design Fundamentals, Responsive Images, Javascript Basics and JQuery at Udacity. Enrolled in 'Front End Web Developer' Nanodegree"
	},
	{
		"employer" : "AECOM",
		"title" : "Transportation Engineer",
		"location": "Arlington, VA",
		"dates" : "Nov 2007 - August 2015",
		"description" : "Registered Professional Engineer in Virginia and Washington D.C. Worked as signal operations engineer at Virginia Department of Transportation for 7 years designing and optimizing traffic signal timing for over 1400 traffic signals in Northern Virginia, managing traffic congestion, developing traffic control plans for construction and other incident related detours, reviewing signal timing plans from consultants." +
		"Worked at AECOM as a travel demand modeler for over an year estimating travel demand for future years based on projected population, employment growth, and land use patterns."
	},
	{
		"employer" : "Utah Local Transportation Assistance Program",
		"title" : "Technical Assistant",
		"location": "Logan, UT",
		"dates" : "Aug 2006 - Aug 2007",
		"description" : "Assisted in developing maintenance plans for pavement management for local governments and assessing the structural conditions of various wildlife refuge assets for the National Wildlife Service"
	}]
};

var projects = {
	"project": [
	{
		"title": "Nama Photography",
		"dates": "Nov 2015",
		"description": "Designed and developed a responsive website for 'Nama Photography'"
	},
	{
		"title": "Favorite Desserts",
		"dates": "Dec 2015",
		"description": "Designed and developed a responsive website for 'Favorite Desserts'"
	}]
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg));

bio.display = function() {
	if(bio.skills.length > 0){
      $("#header").append(HTMLskillsStart);
      	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
      	$("#skills").append(formattedSkill);
      	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
      	$("#skills").append(formattedSkill);
      	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
      	$("#skills").append(formattedSkill);
      	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
      	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
      	$("#skills").append(formattedSkill);
}};

bio.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		
		$(".education-entry:last").append(formattedSchoolNameDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	};
	
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineClasses) {
				
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineClasses[course].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineClasses[course].url);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		
		$(".education-entry:last").append(formattedOnlineTitleSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	};
}

education.display();

work.display = function() {
	for (job in work.jobs) {
 	$("#workExperience").append(HTMLworkStart);

 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
 	var formattedEmployerTitle = formattedEmployer + formattedTitle;

 	$(".work-entry:last").append(formattedEmployerTitle);
 	$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
 	$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
 	$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
 }
};

work.display();

// $("#main").append(internationalizeButton);
// function inName(){
// 	var nameArray = [];
// 	nameArray = (bio.name).split(" ");
// 	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
// 	nameArray[1] = nameArray[1].toUpperCase();
// 	console.log(nameArray[0]);
// 	console.log(nameArray[1]);
// 	return nameArray[0] + " " + nameArray[1];
// };

// inName();

projects.display = function(){
	for (project in projects.project){
		$("#projects").append(HTMLprojectStart);

		var formattedProject = HTMLprojectTitle.replace("%data%",projects.project[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);

		$(".project-entry:last").append(formattedProject);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
	}
};

projects.display();

$("#mapDiv").append(googleMap);

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


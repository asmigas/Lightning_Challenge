({  
        createDateCurrent : function getDaysInMonth(component, event, d)  {
        	var date = new Date(d.getFullYear(), d.getMonth(), 1);
            var month = date.getMonth();
        	var days = [];
            var formatDay = component.get("v.formatDay");
            component.set("v.dates", []);
            var startDay = 0;
            if(formatDay == 'Euro' ) {
                startDay = 1;
            } else {startDay = 0;}
        
            if(date.getDay() != startDay) {
                while (date.getDay() != startDay) {  
                    date.setDate(date.getDate() - 1);
                    days.push(new Date(date));                                     
                }
            }
        	days = days.reverse();
        	//date = new Date(2018, 7, 1);
        	date = new Date(d.getFullYear(), d.getMonth(), 1);
            while (date.getMonth() === month) {
                days.push(new Date(date));                 
                date.setDate(date.getDate() + 1);
            }
        
        	//date = new Date(2018, 8, 1);
        	date = new Date(d.getFullYear(), d.getMonth()+1, 1);
        	if((date.getDay()-1 != 6 && days.length != 42)) {
                while ( days.length != 42) { //((date.getDay() != 0 && days.length != 42)) {  
                    days.push(new Date(date));
                    //console.log('days',date.getDate());
                    date.setDate(date.getDate() + 1);                      
                }
            }
        //console.log('days',days.length);
        component.set("v.dates", days);
		this.createDays(component, event, days, month, d);
    },
 
    createDays : function(component, event, days, month, currentDateTemp) {
        	var currentDateCmp = component.get("v.currentDate");
        	var currentDate = new Date(currentDateCmp);
        	var today = new Date();
            //var weekDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            var weekDay = ['Su','Mo','Tu','We','Th','Fr','Sa'];
        	var weekFullDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            //var cont = component.find('root--nav--day');
        	//cont.set("v.body", []);
        	var newComponentsDay = [];
        	var formatDay = component.get("v.formatDay");
        	if(formatDay == 'Euro' ) {
                weekDay.splice(0, 1);
                weekDay.push('Su');
                //weekFullDay.splice(0, 1);
                //weekFullDay.push('Sunday');
            }
            for (var i = 0, I = weekDay.length; i < I; i++){
                newComponentsDay.push(["aura:html", {
                        "tag": "div",
                    	"body" : weekDay[i],
                        "HTMLAttributes": {
                            "id": "DayNameId",
                            "title": weekFullDay[i],
                            "class": "datepicker--date--nav slds-size_1-of-7 slds-text-align_center"
                        }
            	}]);
            }        
        	newComponentsDay.push(["aura:html", {
                        "tag": "hr"
            }]);        
            	$A.createComponents(newComponentsDay,
                    function (components, status, errorMessage) {
                        component.set("v.contentPicker", []);
                		var pageBody = component.get("v.contentPicker");
                        //var container = component.find('root--nav--day');
                        if (status === 'SUCCESS') {
                            for (var i = 0; i < components.length; i++) {
                                var div = components[i];
                                pageBody.push(div);
                        	}
                        	component.set("v.contentPicker", pageBody);
                        }
                    }
                );
        
        var newComponents = [];
        days.forEach(function(element, index) {	
             newComponents.push(["aura:html", {
                        "tag": "div",
                        "HTMLAttributes": {
                            "id": "dynamicDivDate",
                            "class": "datepicker--day slds-size_1-of-7"
                        }
            }]);
    		if(element.getDate() == today.getDate() && element.getMonth() == today.getMonth() && element.getFullYear() == today.getFullYear()) {
                var bgcolor = component.get("v.bgcolor");
                var color = component.get("v.color");
                newComponents.push(["aura:html", {
                            "tag": "div",
                            "body": element.getDate().toString(),   
                    		"aura:id": "dynamicDate-"+index.toString(),
                            "HTMLAttributes": {
                                //"id": "dynamicDate-"+index.toString(),
                                "data-currentdate" : element.toISOString(),
                                "onclick": component.getReference("c.setCurrentDate"),
                                "title": weekFullDay[element.getDay()],//element.getDate().toString(),
                                "style": "background-color:"+bgcolor.toString()+";\ncolor:"+color.toString()+";",
                                "class": "dynamicDay slds-text-align_center dynamicDay--today"
                              }
                }]);                
            } else
            if(element.getDate() == currentDate.getDate() && element.getMonth() == currentDate.getMonth() && element.getFullYear() == currentDate.getFullYear()) {
                newComponents.push(["aura:html", {
                            "tag": "div",
                            "body": element.getDate().toString(),    
                    		"aura:id": "dynamicDate-"+index.toString(),
                            "HTMLAttributes": {
                                //"id": "dynamicDate-"+index.toString(),
                                "data-currentdate" : element.toISOString(),
                                "onclick": component.getReference("c.setCurrentDate"),
                                "title": weekFullDay[element.getDay()],//element.getDate().toString(),
                                "class": "dynamicDay slds-text-align_center dynamicDay--current"
                              }
                }]);                
            } else  
                if(element.getMonth() != month) {
                //if(element.getMonth() != currentDate.getMonth()) {
                    newComponents.push(["aura:html", {
                                "tag": "div",
                                "body": element.getDate().toString(),  
                        		"aura:id": "dynamicDate-"+index.toString(),
                                "HTMLAttributes": {
                                    //"id": "dynamicDate-"+index.toString(),
                                    "data-currentdate" : element.toISOString(),
                                    "onclick": component.getReference("c.setCurrentDate"),
                                    "title": weekFullDay[element.getDay()],//element.getDate().toString(),
                                    "class": "dynamicDay slds-text-align_center dynamicDay--other"
                                  }
                    }]);	
                }
             else {
                 newComponents.push(["aura:html", {
                            "tag": "div",
                            "body": element.getDate().toString(),
                     		"aura:id": "dynamicDate-"+index.toString(),
                            "HTMLAttributes": {
                               // "id": "dynamicDate-"+index.toString(),
                                "data-currentdate" : element.toISOString(),
                                "onclick": component.getReference("c.setCurrentDate"),
                                "title": weekFullDay[element.getDay()],//element.getFullYear()+" "+element.getMonth()+" "+element.getDate(),//element.getDate().toString(),
                                "class": "dynamicDay slds-text-align_center"
                              }
                }]);
            }
    	});
    	//console.log(newComponents);
        $A.createComponents(newComponents,
        function (components, status, errorMessage) {
             if (status === 'SUCCESS') {
                var pageBody = component.get("v.contentPicker");                 
                for (var i = 0; i < components.length; i += 2) {
                    var td = components[i];
                    var div = components[i + 1];
                    var tdBody = td.get("v.body");
                    tdBody.push(div);
                    td.set("v.body", tdBody);
                    pageBody.push(td);
                }
                var menuDay = component.find('menuDay'); 
                pageBody.push(menuDay);
                component.set("v.contentPicker", pageBody);
            }
            else // Report any error
            {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Failed to create list components."
                });
                toastEvent.fire();
            }
        }
    );  
   },
    
    createMonth : function(component, event, tempDate) {
        var currentDateCmp = component.get("v.currentDate");
        var currentDate = new Date(currentDateCmp);       
        var month = tempDate.getMonth();
        
        var monthYear = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.'];
		var monthFullYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];        
        var newMonthComponents = [];
        
            for (var i = 0, I = monthYear.length; i < I; i++){                
                newMonthComponents.push(["aura:html", {
                        "tag": "div",
                        "HTMLAttributes": {
                            "id": "dynamicDivMonth",
                            "class": "datepicker--month slds-size_1-of-3"
                        }
            }]);
                 if((month == i) && (currentDate.getMonth() == tempDate.getMonth()) && (currentDate.getFullYear() == tempDate.getFullYear())) {
                     //console.log('month:',month,' i:',i,' cM:',currentDate.getMonth(),' tM:',tempDate.getMonth(),' cY:',currentDate.getFullYear(),' tY:',tempDate.getFullYear());
                     newMonthComponents.push(["aura:html", {
                                "tag": "div",
                                "body": monthYear[i],
                                "HTMLAttributes": {
                                    "id": "dynamicMonthId" +i.toString(),
                                    "data-currentmonth" : i.toString(),
                                    "onclick": component.getReference("c.setCurrentMonth"),
                                    "title": monthFullYear[i],
                                    "class": "dynamicMonth dynamicMonth--current slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"
                                  }
                    }]);
                 } else {
                 	newMonthComponents.push(["aura:html", {
                                "tag": "div",
                                "body": monthYear[i],
                                "HTMLAttributes": {
                                    "id": "dynamicMonthId" +i.toString(),
                                    "data-currentmonth" : i.toString(),
                                    "onclick": component.getReference("c.setCurrentMonth"),
                                    "title": monthFullYear[i],
                                    "class": "dynamicMonth slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"
                                  }
                    }]);    
                 }
            }			
    	//console.log(newMonthComponents);
        $A.createComponents(newMonthComponents,
        function (components, status, errorMessage) {
             if (status === 'SUCCESS') {
                component.set("v.contentPicker", []);
                var pageBody = component.get("v.contentPicker");                 
                for (var i = 0; i < components.length; i += 2) {
                    var td = components[i];
                    var div = components[i + 1];
                    var tdBody = td.get("v.body");
                    tdBody.push(div);
                    td.set("v.body", tdBody)
                    pageBody.push(td);
                }
                component.set("v.contentPicker", pageBody);
            }
            else // Report any error
            {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Failed to create list components."
                });
                toastEvent.fire();
            }
        }
    ); 
    },
    
    createYear : function(component, event, year) {
        var currentDateCmp = component.get("v.currentDate");
        var currentDate = new Date(currentDateCmp);
        var currentYear = currentDate.getFullYear();
        
        var years = [];
        var newYearsComponents = [];
        for(var y = year; y > year-13; y-- ) {
        	years.push(y);    
        }
        years = years.reverse();
        for(var y = year+1; y <= year + 7; y++ ) {
        	years.push(y);    
        }
        //console.log(years);
        component.set("v.informCurrentDate", years[0]+"-"+years[years.length-1]);         
            years.forEach(function(element, index) {	                
                newYearsComponents.push(["aura:html", {
                        "tag": "div",
                        "HTMLAttributes": {
                            "id": "dynamicDivYear",
                            "class": "datepicker--year slds-size_1-of-4"
                        }
            }]);
                if(element == currentYear) {
                    newYearsComponents.push(["aura:html", {
                                "tag": "div",
                                "body": element.toString(),
                                "HTMLAttributes": {
                                    "id": "dynamicYearId" +index.toString(),
                                    "data-current_year" : element.toString(),
                                    "onclick": component.getReference("c.setCurrentYear"),
                                    "title": element.toString(),
                                    "class": "dynamicYear dynamicYear--current slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"
                                  }
                    }]);                
                } else {
                     newYearsComponents.push(["aura:html", {
                                "tag": "div",
                                "body": element.toString(),
                                "HTMLAttributes": {
                                    "id": "dynamicYearId" +index.toString(),
                                    "data-current_year" : element.toString(),
                                    "onclick": component.getReference("c.setCurrentYear"),
                                    "title": element.toString(),
                                    "class": "dynamicYear slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"
                                  }
                    }]);
                }
            });			
    	//console.log(newMonthComponents);
        $A.createComponents(newYearsComponents,
        function (components, status, errorMessage) {
             if (status === 'SUCCESS') {
                component.set("v.contentPicker", []);
                var pageBody = component.get("v.contentPicker");                 
                for (var i = 0; i < components.length; i += 2) {
                    var td = components[i];
                    var div = components[i + 1];
                    var tdBody = td.get("v.body");
                    tdBody.push(div);
                    td.set("v.body", tdBody)
                    pageBody.push(td);
                }
                component.set("v.contentPicker", pageBody);
            }
            else 
            {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Failed to create list components."
                });
                toastEvent.fire();
            }
        }
    ); 
    },
    
    nextDay : function(component, event) {
    	var currentDate = component.get("v.currentDateTemp");
        var d = new Date(currentDate);
        var month = d.getMonth()+1;
        var date = new Date(d.getFullYear(), month, d.getDate()); 
        if(date.getMonth() != month) {        
        	 date = new Date(d.getFullYear(), month, 1);
        }       
        var format = component.get("v.format");
        component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
        //component.set("v.informCurrentDate", date.toLocaleString("en-us", {month: "long"}));
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createDateCurrent(component, event, date);   
    },
    
    previewDay : function(component, event) {
    	var currentDate = component.get("v.currentDateTemp");
        var d = new Date(currentDate);
        var month = d.getMonth()-1;
        var date = new Date(d.getFullYear(), month, d.getDate()); 
        if(date.getMonth() != month) {        
        	 date = new Date(d.getFullYear(), month, 1);
        } 
        var format = component.get("v.format");
        component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
        //component.set("v.informCurrentDate", date.toLocaleString("en-us", {month: "long"})); 
		component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));        
        this.createDateCurrent(component, event, date);     
    },
    
    nextMonth : function(component, event) {
    	var currentDate = component.get("v.currentDateTemp");
        var d = new Date(currentDate);
        var date = new Date(d.getFullYear()+1, d.getMonth(), d.getDate());         
        var format = component.get("v.format");
        component.set("v.informCurrentDate", date.toLocaleString("en-us", {year: "numeric"}));
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createMonth(component, event, date);   
    },
    
    previewMonth : function(component, event) {
    	var currentDate = component.get("v.currentDateTemp");
        var d = new Date(currentDate);
        var date = new Date(d.getFullYear()-1, d.getMonth(), d.getDate());         
        var format = component.get("v.format");
        component.set("v.informCurrentDate", date.toLocaleString("en-us", {year: "numeric"}));
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createMonth(component, event, date);      
    },
    
    nextYear : function(component, event) {
    	var currentDate = component.get("v.currentDateTemp");
        var d = new Date(currentDate);
        var year = d.getFullYear()+19;
        var date = new Date(year, d.getMonth(), d.getDate());  
        var format = component.get("v.format");
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createYear(component, event, year);   
    },
    
    previewYear : function(component, event) {
    	var currentDate = component.get("v.currentDateTemp");
        var d = new Date(currentDate);
        var year = d.getFullYear()-19;
        var date = new Date(year, d.getMonth(), d.getDate());  
        var format = component.get("v.format");
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createYear(component, event, year);   
    },
   
    blurtoggleVisibility : function(component, event) {
        //event.stopPropagation();
        var cmpTarget = component.find('mainPickerClass');
        $A.util.addClass(cmpTarget, 'ease');  
    },
})